let settings = {
  weight: 60,
  xeWeight: 10,
  targetBg: 5.5,
  carbRatio: 1.0,
  isf: 3.0,
  glucoseUnit: 'mmol',
  ageGroup: 'adult',
};

let currentMeal = [];

function init() {
  loadSettings();
  renderFoodList();
  renderMealList();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function loadSettings() {
  const saved = localStorage.getItem('insulinSettings');
  if (saved) {
    settings = { ...settings, ...JSON.parse(saved) };
  }
  document.getElementById('setting-weight').value = settings.weight;
  document.getElementById('setting-xe-weight').value = settings.xeWeight;
  document.getElementById('setting-target-bg').value = settings.targetBg;
  document.getElementById('setting-carb-ratio').value = settings.carbRatio;
  document.getElementById('setting-isf').value = settings.isf;
  document.getElementById('setting-glucose-unit').value = settings.glucoseUnit;
  document.getElementById('setting-age-group').value =
    settings.ageGroup || 'adult';
  updateUnitLabels();
}

function updateUnitLabels() {
  const label = settings.glucoseUnit === 'mmol' ? '(ммоль/л)' : '(мг/дл)';
  document
    .querySelectorAll('.unit-label')
    .forEach(el => (el.innerText = label));
}

function changeGlucoseUnit() {
  const newUnit = document.getElementById('setting-glucose-unit').value;
  if (newUnit === settings.glucoseUnit) return;

  settings.targetBg = convertGlucoseUnit(
    settings.targetBg,
    settings.glucoseUnit,
    newUnit,
    false,
  );
  settings.isf = convertGlucoseUnit(
    settings.isf,
    settings.glucoseUnit,
    newUnit,
    true,
  );

  settings.glucoseUnit = newUnit;
  document.getElementById('setting-target-bg').value = settings.targetBg;
  document.getElementById('setting-isf').value = settings.isf;
  updateUnitLabels();
}

function saveSettings() {
  settings.weight =
    parseFloat(document.getElementById('setting-weight').value) || 0;
  settings.xeWeight =
    parseFloat(document.getElementById('setting-xe-weight').value) || 10;
  settings.targetBg =
    parseFloat(document.getElementById('setting-target-bg').value) ||
    (settings.glucoseUnit === 'mmol' ? 5.5 : 100);
  settings.carbRatio =
    parseFloat(document.getElementById('setting-carb-ratio').value) || 1.0;
  settings.isf =
    parseFloat(document.getElementById('setting-isf').value) ||
    (settings.glucoseUnit === 'mmol' ? 3.0 : 50);
  settings.glucoseUnit = document.getElementById('setting-glucose-unit').value;
  settings.ageGroup = document.getElementById('setting-age-group').value;
  localStorage.setItem('insulinSettings', JSON.stringify(settings));
  showToast(t('saved_toast'));
  renderFoodList();
  renderMealList();
}

function autoCalculateSettings() {
  const weight = parseFloat(document.getElementById('setting-weight').value);
  if (!weight || weight <= 0) return;

  const ageGroup = document.getElementById('setting-age-group').value;
  const tdd = computeTDD(weight, ageGroup);

  const currentXeWeight =
    parseFloat(document.getElementById('setting-xe-weight').value) || 10;
  const carbRatio = computeCarbRatio(tdd, currentXeWeight);

  const isf = computeISF(tdd, settings.glucoseUnit);
  document.getElementById('setting-isf').value = isf;
  document.getElementById('setting-carb-ratio').value = carbRatio.toFixed(1);

  showToast('✅ Коэффициенты рассчитаны!');
}

function switchTab(tabId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + tabId).classList.add('active');
  document
    .querySelectorAll('.nav-item')
    .forEach(n => n.classList.remove('active'));
  const navItem = document.getElementById('nav-' + tabId);
  if (navItem) navItem.classList.add('active');
  if (tabId === 'calculator') {
    renderMealList();
    document.getElementById('result-card').style.display = 'none';
  }
}

function renderFoodList() {
  const query = (
    document.getElementById('food-search').value || ''
  ).toLowerCase();
  const container = document.getElementById('food-container');
  container.innerHTML = '';
  const filtered = foodData.filter(
    f =>
      tFood(f.name).toLowerCase().includes(query) ||
      tCategory(f.category).toLowerCase().includes(query),
  );
  let html = '';
  filtered.forEach(food => {
    const xePer100 = computeXePer100(food.carbsPer100g, settings.xeWeight);
    let giHtml = '';
    if (food.gi) {
      let giClass = 'gi-' + food.gi;
      let giText =
        food.gi === 'low'
          ? 'Низкий ГИ'
          : food.gi === 'medium'
            ? 'Средний ГИ'
            : 'Высокий ГИ';
      giHtml = `<span class="gi-badge ${giClass}">${giText}</span>`;
    }
    html += `
      <div class="food-item">
        <div class="food-info">
          <h4 style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px;">${tFood(food.name)} ${giHtml}</h4>
          <p>${food.carbsPer100g} ${t('carbs_per_100')} (~${xePer100} ${t('xe')})</p>
        </div>
        <button class="food-action" onclick="addToMeal('${food.id}')">+</button>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addToMeal(foodId) {
  const food = foodData.find(f => f.id === foodId);
  if (!food) return;
  const isTablet =
    food.unit === 'pcs' ||
    food.id === 's1_1' ||
    food.name.toLowerCase().includes('сахарозаменитель') ||
    food.name.toLowerCase().includes('таблетк');
  const defaultAmount =
    food.defaultAmount !== undefined ? food.defaultAmount : isTablet ? 1 : 100;
  const existing = currentMeal.find(m => m.food.id === foodId);
  if (existing) {
    existing.grams += defaultAmount;
  } else {
    currentMeal.push({ food: food, grams: defaultAmount });
  }
  switchTab('calculator');
}

function removeFromMeal(index) {
  currentMeal.splice(index, 1);
  renderMealList();
}

function updateMealGrams(index, grams) {
  const g = parseFloat(grams);
  if (!isNaN(g) && g >= 0) {
    currentMeal[index].grams = g;
  }
}

function renderMealList() {
  const container = document.getElementById('meal-list');
  if (currentMeal.length === 0) {
    container.innerHTML = `
      <p style="color: var(--text-muted); font-size: 14px; text-align: center; padding: 20px 0;">
        ${t('empty_meal')}
      </p>`;
    return;
  }
  let html = '';
  currentMeal.forEach((item, index) => {
    const isTablet =
      item.food.unit === 'pcs' ||
      item.food.id === 's1_1' ||
      item.food.name.toLowerCase().includes('сахарозаменитель') ||
      item.food.name.toLowerCase().includes('таблетк');
    const isDrink = item.food.category === 'Напитки' || item.food.unit === 'ml';
    const unitLabel = isTablet ? t('pcs') : isDrink ? t('ml') : t('g');
    html += `
      <div class="meal-item">
        <div class="name">${tFood(item.food.name)}</div>
        <div class="flex-row" style="align-items: center; gap: 4px;">
          <input type="number" class="grams-input" value="${item.grams}" onchange="updateMealGrams(${index}, this.value)" inputmode="numeric"> ${unitLabel}
        </div>
        <button class="remove-btn" onclick="removeFromMeal(${index})">×</button>
      </div>
    `;
  });
  container.innerHTML = html;
}

function calculateDose() {
  const manualXeStr = document.getElementById('manual-xe').value;
  const currentBgStr = document.getElementById('current-bg').value;
  const lastInjection = JSON.parse(
    localStorage.getItem('insulinLastInjection'),
  );

  const result = computeDose(
    currentMeal,
    manualXeStr,
    settings,
    currentBgStr,
    lastInjection,
  );

  if (result.warnings.includes('hypo')) {
    alert(
      `🚨 ОПАСНОСТЬ ГИПОГЛИКЕМИИ!\n\nТекущая глюкоза (${result.currentBg}) ниже порога безопасности.\n\n1. Сначала съешьте 1-2 ХЕ быстрой глюкозы БЕЗ укола!\n2. Дождитесь подъема сахара.\n3. Только после этого рассчитывайте инсулин на еду.`,
    );
  }
  if (result.warnings.includes('ketones')) {
    showToast(t('high_bg_toast'));
  }
  if (result.warnings.includes('iob_deducted')) {
    alert(
      `ℹ️ Учтен активный инсулин (IOB): ~${result.activeInsulinIOB.toFixed(1)} ЕД от прошлого укола.\nДоза на коррекцию будет снижена, чтобы избежать гипогликемии.`,
    );
  }

  document.getElementById('dose-food').innerText =
    `${t('dose_food')} ${result.doseFood.toFixed(2)} ${t('units')}`;

  const sign = result.doseCorrection > 0 ? '+' : '';
  let correctionText = `${t('dose_correction')} ${sign}${result.doseCorrection.toFixed(2)} ${t('units')}`;
  if (
    result.activeInsulinIOB > 0 &&
    result.currentBg &&
    result.currentBg > settings.targetBg
  ) {
    correctionText += ` (IOB -${result.activeInsulinIOB.toFixed(1)})`;
  }
  document.getElementById('dose-correction').innerText = correctionText;

  document.getElementById('final-dose').innerText = result.finalDose.toFixed(1);

  window.lastCalculatedDose = result.finalDose;

  document.getElementById('result-card').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveInjection() {
  if (window.lastCalculatedDose !== undefined) {
    const record = {
      time: Date.now(),
      dose: window.lastCalculatedDose,
    };
    localStorage.setItem('insulinLastInjection', JSON.stringify(record));
    showToast(
      t('injection_saved_toast').replace('{dose}', window.lastCalculatedDose),
    );
  }
}

let currentWizardCarbRatio = null;
let currentWizardISF = null;

function calculateWizardCarb() {
  const carbs = parseFloat(document.getElementById('wizard-carbs').value) || 0;
  const dose =
    parseFloat(document.getElementById('wizard-dose-food').value) || 0;
  const result = calculateRealCarbRatio(carbs, dose, settings.xeWeight);

  if (result > 0) {
    currentWizardCarbRatio = result;
    document.getElementById('wizard-carb-result').innerText = result.toFixed(2);
  } else {
    currentWizardCarbRatio = null;
    document.getElementById('wizard-carb-result').innerText = '--';
  }
}

function applyWizardCarb() {
  if (currentWizardCarbRatio && currentWizardCarbRatio > 0) {
    settings.carbRatio = currentWizardCarbRatio;
    document.getElementById('setting-carb-ratio').value = settings.carbRatio;
    saveSettings();
    showToast(t('wizard_applied_toast') || 'УК успешно применен!');
    switchTab('settings');
  }
}

function calculateWizardISF() {
  const bgBefore =
    parseFloat(document.getElementById('wizard-bg-before').value) || 0;
  const bgAfter =
    parseFloat(document.getElementById('wizard-bg-after').value) || 0;
  const dose =
    parseFloat(document.getElementById('wizard-dose-corr').value) || 0;
  const result = calculateRealISF(bgBefore, bgAfter, dose);

  if (result > 0) {
    currentWizardISF = result;
    document.getElementById('wizard-isf-result').innerText = result.toFixed(2);
  } else {
    currentWizardISF = null;
    document.getElementById('wizard-isf-result').innerText = '--';
  }
}

function applyWizardISF() {
  if (currentWizardISF && currentWizardISF > 0) {
    settings.isf = currentWizardISF;
    document.getElementById('setting-isf').value = settings.isf;
    saveSettings();
    showToast(t('wizard_applied_toast') || 'ФЧИ успешно применен!');
    switchTab('settings');
  }
}

init();
