function computeTDD(weight, ageGroup) {
  if (!weight || weight <= 0) return 0;
  let multiplier = 0.55; // adult
  if (ageGroup === 'child') multiplier = 0.7;
  else if (ageGroup === 'teen') multiplier = 1.0;
  else if (ageGroup === 'senior') multiplier = 0.45;
  return weight * multiplier;
}

function computeCarbRatio(tdd, xeWeight) {
  if (!tdd || tdd <= 0) return 1.0;
  const carbsPerUnit = 500 / tdd;
  return parseFloat((xeWeight / carbsPerUnit).toFixed(2));
}

function computeISF(tdd, glucoseUnit) {
  if (!tdd || tdd <= 0) return glucoseUnit === 'mgdl' ? 50 : 3.0;
  if (glucoseUnit === 'mgdl') {
    return Math.round(1800 / tdd);
  } else {
    return parseFloat((100 / tdd).toFixed(1));
  }
}

function convertGlucoseUnit(value, fromUnit, toUnit) {
  if (value === null || value === undefined || isNaN(value)) return null;
  if (fromUnit === toUnit) return value;
  if (toUnit === 'mgdl') {
    return Math.round(value * 18);
  } else {
    return parseFloat((value / 18).toFixed(1));
  }
}

function computeXePer100(carbsPer100g, xeWeight) {
  if (!xeWeight || xeWeight <= 0) return 0;
  return parseFloat((carbsPer100g / xeWeight).toFixed(2));
}

function computeActiveInsulin(lastInjection, currentTimeMs = Date.now()) {
  if (
    !lastInjection ||
    !lastInjection.dose ||
    lastInjection.dose <= 0 ||
    !lastInjection.time
  ) {
    return 0;
  }
  const hoursPassed = (currentTimeMs - lastInjection.time) / (1000 * 60 * 60);
  const diaHours = 4.0;

  if (hoursPassed < diaHours) {
    const activeInsulinIOB = lastInjection.dose * (1 - hoursPassed / diaHours);
    return Math.max(0, parseFloat(activeInsulinIOB.toFixed(2)));
  }
  return 0;
}

function computeDose(meal, manualXeStr, settings, currentBgStr, lastInjection) {
  let totalCarbs = 0;
  meal.forEach(item => {
    totalCarbs += (item.food.carbsPer100g * item.grams) / 100;
  });

  let totalXe = totalCarbs / settings.xeWeight;
  if (manualXeStr) {
    totalXe += parseFloat(manualXeStr) || 0;
  }

  const doseFood = totalXe * settings.carbRatio;

  let doseCorrection = 0;
  let activeInsulinIOB = computeActiveInsulin(lastInjection);
  let warnings = [];

  const hypoThreshold = settings.glucoseUnit === 'mmol' ? 3.9 : 70;
  const highBgThreshold = settings.glucoseUnit === 'mmol' ? 13.0 : 235;

  let currentBg = null;
  if (
    currentBgStr !== undefined &&
    currentBgStr !== null &&
    currentBgStr !== ''
  ) {
    currentBg = parseFloat(currentBgStr);
  }

  if (currentBg !== null && !isNaN(currentBg)) {
    if (currentBg < hypoThreshold) {
      warnings.push('hypo');
    }

    if (currentBg > highBgThreshold) {
      warnings.push('ketones');
    }

    let rawCorrection = (currentBg - settings.targetBg) / settings.isf;

    if (rawCorrection > 0) {
      if (activeInsulinIOB > 0) {
        warnings.push('iob_deducted');
        rawCorrection = Math.max(0, rawCorrection - activeInsulinIOB);
      }
      doseCorrection = rawCorrection;
    } else {
      doseCorrection = rawCorrection;
    }
  }

  let rawDose = doseFood + doseCorrection;
  if (rawDose < 0) rawDose = 0;

  const finalDose = Math.round(rawDose * 2) / 2;

  return {
    doseFood: parseFloat(doseFood.toFixed(2)),
    doseCorrection: parseFloat(doseCorrection.toFixed(2)),
    activeInsulinIOB,
    finalDose,
    warnings,
    currentBg,
    totalXe: parseFloat(totalXe.toFixed(2)),
  };
}

function calculateRealCarbRatio(
  carbsGrams,
  totalDose,
  xeWeight,
  correctionDose = 0,
) {
  if (
    !carbsGrams ||
    carbsGrams <= 0 ||
    !totalDose ||
    totalDose <= 0 ||
    !xeWeight ||
    xeWeight <= 0
  ) {
    return 0;
  }

  const foodDose = Math.max(0, totalDose - correctionDose);
  if (foodDose <= 0) return 0;

  const xe = carbsGrams / xeWeight;
  return parseFloat((foodDose / xe).toFixed(2));
}

function calculateRealISF(
  bgBefore,
  bgAfter,
  correctionDose,
  hadFoodDuringPeriod = false,
) {
  if (hadFoodDuringPeriod) return 0;

  if (!bgBefore || !bgAfter || !correctionDose || correctionDose <= 0) return 0;

  const drop = bgBefore - bgAfter;
  if (drop <= 0) return 0;

  return parseFloat((drop / correctionDose).toFixed(2));
}
