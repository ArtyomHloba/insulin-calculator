let settings = {
  weight: 60,
  xeWeight: 10,
  targetBg: 5.5,
  carbRatio: 1.0,
  isf: 3.0,
  glucoseUnit: 'mmol',
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
  if (newUnit === 'mgdl') {
    settings.targetBg = Math.round(settings.targetBg * 18);
    settings.isf = Math.round(settings.isf * 18);
  } else {
    settings.targetBg = (settings.targetBg / 18).toFixed(1);
    settings.isf = (settings.isf / 18).toFixed(1);
  }
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
  localStorage.setItem('insulinSettings', JSON.stringify(settings));
  showToast('✅ Настройки сохранены!');
  renderFoodList();
  renderMealList();
}

function autoCalculateSettings() {
  const weight = parseFloat(document.getElementById('setting-weight').value);
  if (!weight || weight <= 0) return;
  const tdd = weight * 0.55;
  const carbsPerUnit = 500 / tdd;
  const currentXeWeight =
    parseFloat(document.getElementById('setting-xe-weight').value) || 10;
  const carbRatio = currentXeWeight / carbsPerUnit;
  let isf;
  if (settings.glucoseUnit === 'mgdl') {
    isf = 1800 / tdd;
    document.getElementById('setting-isf').value = Math.round(isf);
  } else {
    isf = 100 / tdd;
    document.getElementById('setting-isf').value = isf.toFixed(1);
  }
  document.getElementById('setting-carb-ratio').value = carbRatio.toFixed(1);
}

function switchTab(tabId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + tabId).classList.add('active');
  document
    .querySelectorAll('.nav-item')
    .forEach(n => n.classList.remove('active'));
  document.getElementById('nav-' + tabId).classList.add('active');
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
      f.name.toLowerCase().includes(query) ||
      f.category.toLowerCase().includes(query),
  );
  filtered.forEach(food => {
    const xePer100 = (food.carbsPer100g / settings.xeWeight).toFixed(1);
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
    const div = document.createElement('div');
    div.className = 'food-item';
    div.innerHTML = `
      <div class="food-info">
        <h4 style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px;">${food.name} ${giHtml}</h4>
        <p>${food.carbsPer100g}г углеводов / 100г (~${xePer100} ХЕ)</p>
      </div>
      <button class="food-action" onclick="addToMeal('${food.id}')">+</button>
    `;
    container.appendChild(div);
  });
}

function addToMeal(foodId) {
  const food = foodData.find(f => f.id === foodId);
  if (!food) return;
  const isTablet =
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
        Список еды пуст.<br>Нажмите "+ Добавить" или введите ХЕ вручную.
      </p>`;
    return;
  }
  let html = '';
  currentMeal.forEach((item, index) => {
    const isTablet =
      item.food.id === 's1_1' ||
      item.food.name.toLowerCase().includes('сахарозаменитель') ||
      item.food.name.toLowerCase().includes('таблетк');
    const isDrink = item.food.category === 'Напитки';
    const unitLabel = isTablet ? 'шт.' : isDrink ? 'мл' : 'г';
    html += `
      <div class="meal-item">
        <div class="name">${item.food.name}</div>
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
  let totalCarbs = 0;
  currentMeal.forEach(item => {
    totalCarbs += (item.food.carbsPer100g * item.grams) / 100;
  });
  let totalXe = totalCarbs / settings.xeWeight;
  const manualXeStr = document.getElementById('manual-xe').value;
  if (manualXeStr) {
    totalXe += parseFloat(manualXeStr) || 0;
  }
  const doseFood = totalXe * settings.carbRatio;
  let doseCorrection = 0;
  const currentBgStr = document.getElementById('current-bg').value;
  if (currentBgStr) {
    const currentBg = parseFloat(currentBgStr);
    if (!isNaN(currentBg)) {
      doseCorrection = (currentBg - settings.targetBg) / settings.isf;
    }
  }
  let finalDose = doseFood + doseCorrection;
  if (finalDose < 0) finalDose = 0;
  finalDose = Math.round(finalDose * 2) / 2;
  document.getElementById('dose-food').innerText =
    'На еду: ' + doseFood.toFixed(1) + ' ЕД';
  document.getElementById('dose-correction').innerText =
    'Коррекция: ' + doseCorrection.toFixed(1) + ' ЕД';
  document.getElementById('final-dose').innerText = finalDose.toFixed(1);
  document.getElementById('result-card').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
init();
