const translations = {
  ru: {
    title_calc: '<i class="fa-solid fa-calculator"></i> Калькулятор',
    subtitle_calc: 'Расчет дозы на еду и коррекцию',
    recommended_dose: 'Рекомендуемая доза:',
    units: 'ЕД',
    dose_food: 'На еду:',
    dose_correction: 'Коррекция:',
    save_injection: '<i class="fa-solid fa-syringe"></i> Сохранить укол',
    current_bg_title:
      '<i class="fa-solid fa-droplet" style="color: #ff453a;"></i> Текущий сахар',
    sugar_label: 'Сахар',
    what_to_eat: '<i class="fa-solid fa-utensils"></i> Что будем есть?',
    total_meal: 'Итого:',
    add_btn: '+ Добавить',
    empty_meal:
      'Список еды пуст.<br>Нажмите "+ Добавить" или введите ХЕ вручную.',
    manual_xe: 'Или введите ХЕ вручную (всего)',
    calc_btn: 'Рассчитать дозу',
    food_title: '<i class="fa-solid fa-apple-whole"></i> База продуктов',
    search_placeholder: 'Поиск продукта...',
    settings_title: '<i class="fa-solid fa-gear"></i> Настройки',
    basic_params: '<i class="fa-solid fa-ruler"></i> Основные параметры',
    age_group: 'Возрастная группа',
    age_adult: 'Взрослые (18-60 лет)',
    age_child: 'Дети (до 12 лет)',
    age_teen: 'Подростки (12-18 лет)',
    age_senior: 'Пожилые (60+ лет)',
    glucose_units: 'Единицы измерения сахара',
    weight_label: 'Вес тела (кг)',
    auto_calc_btn: 'Авторасчет по весу',
    medical_params:
      '<i class="fa-solid fa-syringe"></i> Медицинские коэффициенты',
    xe_weight: 'Вес 1 ХЕ (г углеводов)',
    target_bg: 'Целевой сахар',
    carb_ratio: 'Углеводный коэффициент (ЕД на 1 ХЕ)',
    isf: 'Фактор чувствительности (снижение на 1 ЕД)',
    save_settings: 'Сохранить настройки',
    nav_calc: 'Калькулятор',
    nav_food: 'Еда',
    nav_settings: 'Настройки',
    nav_faq: 'FAQ',
    faq_title:
      '<i class="fa-solid fa-circle-question"></i> FAQ & Отказ от ответственности',
    faq_disclaimer_title:
      '<i class="fa-solid fa-triangle-exclamation"></i> Важное предупреждение (Medical Disclaimer)',
    faq_disclaimer_text:
      'Данное приложение создано исключительно для образовательных и информационных целей. Оно <b>не является медицинским прибором</b> и не может заменить профессиональную консультацию эндокринолога.<br><br>Используемые формулы (Правило 500, Правило 1800, расчет IOB) являются общепринятыми клиническими стандартами, однако <b>вы принимаете на себя все риски</b> за использование рассчитанных доз. Алгоритм может не учитывать стресс, болезнь, физическую активность и другие индивидуальные факторы. Всегда проверяйте расчеты и консультируйтесь с врачом перед изменением терапии.',
    saved_toast: '<i class="fa-solid fa-check"></i> Настройки сохранены!',
    injection_saved_toast: '<i class="fa-solid fa-syringe"></i> Укол сохранен!',
    high_bg_toast:
      '<i class="fa-solid fa-triangle-exclamation"></i> Высокая глюкоза! Проверьте кетоны.',
    carbs_per_100: 'г углеводов / 100г',
    xe: 'ХЕ',
    ml: 'мл',
    g: 'г',
    pcs: 'шт.',
    wizard_btn:
      '<i class="fa-solid fa-bullseye"></i> Рассчитать по своему опыту',
    wizard_back: 'Назад в настройки',
    wizard_title: '<i class="fa-solid fa-bullseye"></i> Мастер настройки',
    wizard_subtitle: 'Расчет ваших реальных коэффициентов',
    wizard_carb_title: 'Углеводный коэффициент (УК)',
    wizard_carb_desc:
      'Вспомните свой идеальный прием пищи, когда сахар до и после еды был в норме.',
    wizard_carb_eaten: 'Углеводы (г)',
    wizard_carb_dose: 'Инсулин (ЕД)',
    wizard_carb_corr: 'Коррекция (ЕД)',
    wizard_carb_result: 'Ваш реальный УК:',
    wizard_carb_units: 'ЕД / 1 ХЕ',
    wizard_apply_carb: 'Применить этот УК',
    wizard_isf_title: 'Фактор чувствительности (ФЧИ)',
    wizard_isf_desc:
      'Вспомните случай, когда вы скалывали высокий сахар (без еды).',
    wizard_isf_before: 'Сахар ДО',
    wizard_isf_after: 'ПОСЛЕ (4ч)',
    wizard_isf_dose: 'Инсулин (ЕД)',
    wizard_isf_food: 'Была еда в этот период',
    wizard_isf_result: 'Ваш реальный ФЧИ:',
    wizard_apply_isf: 'Применить этот ФЧИ',
    wizard_applied_toast:
      '<i class="fa-solid fa-check"></i> Коэффициент успешно применен!',
    faq_q1_title: 'Как рассчитывается доза на еду?',
    faq_q1_text:
      'Доза на еду = (Количество ХЕ) × (Углеводный коэффициент). Например, если вы съели 3 ХЕ, а УК = 1.2, то доза = 3 × 1.2 = 3.6 ЕД.',
    faq_q2_title: 'Как рассчитывается доза на коррекцию?',
    faq_q2_text:
      'Доза на коррекцию = (Текущий сахар - Целевой сахар) / ФЧИ. Если ваш сахар 10, целевой 5.5, а ФЧИ = 2.5, то доза = (10 - 5.5) / 2.5 = 1.8 ЕД.',
    faq_q3_title: 'Откуда берутся дефолтные коэффициенты?',
    faq_q3_text:
      'При выборе возраста и веса коэффициенты рассчитываются по международным формулам:<br>• <b>Правило 500:</b> УК = 500 / Базальная доза.<br>• <b>Правило 100 (ммоль/л):</b> ФЧИ = 100 / Суточная доза.<br>Суточная доза примерно вычисляется по весу (от 0.5 до 1.0 ЕД на кг).',
    faq_q4_title: 'Что такое IOB (Активный инсулин)?',
    faq_q4_text:
      'IOB (Insulin on Board) — это количество ранее уколотого инсулина, которое еще действует в организме. Если вы недавно кололи инсулин, калькулятор автоматически вычтет его остаток из новой дозы на коррекцию, чтобы не допустить гипогликемии.',
  },
  uk: {
    title_calc: '<i class="fa-solid fa-calculator"></i> Калькулятор',
    subtitle_calc: 'Розрахунок дози на їжу та корекцію',
    recommended_dose: 'Рекомендована доза:',
    units: 'ОД',
    dose_food: 'На їжу:',
    dose_correction: 'Корекція:',
    save_injection: '<i class="fa-solid fa-syringe"></i> Зберегти укол',
    current_bg_title:
      '<i class="fa-solid fa-droplet" style="color: #ff453a;"></i> Поточний цукор',
    sugar_label: 'Цукор',
    what_to_eat: '<i class="fa-solid fa-utensils"></i> Що будемо їсти?',
    total_meal: 'Разом:',
    add_btn: '+ Додати',
    empty_meal:
      'Список їжі порожній.<br>Натисніть "+ Додати" або введіть ХО вручну.',
    manual_xe: 'Або введіть ХО вручну (всього)',
    calc_btn: 'Розрахувати дозу',
    food_title: '<i class="fa-solid fa-apple-whole"></i> База продуктів',
    search_placeholder: 'Пошук продукту...',
    settings_title: '<i class="fa-solid fa-gear"></i> Налаштування',
    basic_params: '<i class="fa-solid fa-ruler"></i> Основні параметри',
    age_group: 'Вікова група',
    age_adult: 'Дорослі (18-60 років)',
    age_child: 'Діти (до 12 років)',
    age_teen: 'Підлітки (12-18 років)',
    age_senior: 'Літні (60+ років)',
    glucose_units: 'Одиниці вимірювання цукру',
    weight_label: 'Вага тіла (кг)',
    auto_calc_btn: 'Авторозрахунок за вагою',
    medical_params: '<i class="fa-solid fa-syringe"></i> Медичні коефіцієнти',
    xe_weight: 'Вага 1 ХО (г вуглеводів)',
    target_bg: 'Цільовий цукор',
    carb_ratio: 'Вуглеводний коефіцієнт (ОД на 1 ХО)',
    isf: 'Фактор чутливості (зниження на 1 ОД)',
    save_settings: 'Зберегти налаштування',
    nav_calc: 'Калькулятор',
    nav_food: 'Їжа',
    nav_settings: 'Налаштування',
    nav_faq: 'FAQ',
    faq_title:
      '<i class="fa-solid fa-circle-question"></i> FAQ & Відмова від відповідальності',
    faq_disclaimer_title:
      '<i class="fa-solid fa-triangle-exclamation"></i> Важливе попередження (Medical Disclaimer)',
    faq_disclaimer_text:
      'Цей додаток створено виключно для освітніх та інформаційних цілей. Він <b>не є медичним приладом</b> і не може замінити професійну консультацію ендокринолога.<br><br>Використовувані формули (Правило 500, Правило 1800, розрахунок IOB) є загальноприйнятими клінічними стандартами, проте <b>ви берете на себе всі ризики</b> за використання розрахованих доз. Алгоритм може не враховувати стрес, хворобу, фізичну активність та інші індивідуальні фактори. Завжди перевіряйте розрахунки та консультуйтеся з лікарем перед зміною терапії.',
    saved_toast: '<i class="fa-solid fa-check"></i> Налаштування збережено!',
    injection_saved_toast:
      '<i class="fa-solid fa-syringe"></i> Укол збережено!',
    high_bg_toast:
      '<i class="fa-solid fa-triangle-exclamation"></i> Висока глюкоза! Перевірте кетони.',
    carbs_per_100: 'г вуглеводів / 100г',
    xe: 'ХО',
    ml: 'мл',
    g: 'г',
    pcs: 'шт.',
    wizard_btn:
      '<i class="fa-solid fa-bullseye"></i> Розрахувати за своїм досвідом',
    wizard_back: 'Назад до налаштувань',
    wizard_title: '<i class="fa-solid fa-bullseye"></i> Майстер налаштування',
    wizard_subtitle: 'Розрахунок ваших реальних коефіцієнтів',
    wizard_carb_title: 'Вуглеводний коефіцієнт (ВК)',
    wizard_carb_desc:
      'Згадайте свій ідеальний прийом їжі, коли цукор до і після їжі був у нормі.',
    wizard_carb_eaten: 'Вуглеводи (г)',
    wizard_carb_dose: 'Інсулін (ОД)',
    wizard_carb_corr: 'Корекція (ОД)',
    wizard_carb_result: 'Ваш реальний ВК:',
    wizard_carb_units: 'ОД / 1 ХО',
    wizard_apply_carb: 'Застосувати цей ВК',
    wizard_isf_title: 'Фактор чутливості (ФЧІ)',
    wizard_isf_desc:
      'Згадайте випадок, коли ви збивали високий цукор (без їжі).',
    wizard_isf_before: 'Цукор ДО',
    wizard_isf_after: 'ПІСЛЯ (4г)',
    wizard_isf_dose: 'Інсулін (ОД)',
    wizard_isf_food: 'Була їжа в цей період',
    wizard_isf_result: 'Ваш реальний ФЧІ:',
    wizard_apply_isf: 'Застосувати цей ФЧІ',
    wizard_applied_toast:
      '<i class="fa-solid fa-check"></i> Коефіцієнт успішно застосовано!',
    faq_q1_title: 'Як розраховується доза на їжу?',
    faq_q1_text:
      "Доза на їжу = (Кількість ХО) × (Вуглеводний коефіцієнт). Наприклад, якщо ви з'їли 3 ХО, а ВК = 1.2, то доза = 3 × 1.2 = 3.6 ОД.",
    faq_q2_title: 'Як розраховується доза на корекцію?',
    faq_q2_text:
      'Доза на корекцію = (Поточний цукор - Цільовий цукор) / ФЧІ. Якщо ваш цукор 10, цільовий 5.5, а ФЧІ = 2.5, то доза = (10 - 5.5) / 2.5 = 1.8 ОД.',
    faq_q3_title: 'Звідки беруться дефолтні коефіцієнти?',
    faq_q3_text:
      'При виборі віку та ваги коефіцієнти розраховуються за міжнародними формулами:<br>• <b>Правило 500:</b> ВК = 500 / Добова доза.<br>• <b>Правило 100 (ммоль/л):</b> ФЧІ = 100 / Добова доза.<br>Добова доза приблизно обчислюється за вагою (від 0.5 до 1.0 ОД на кг).',
    faq_q4_title: 'Що таке IOB (Активний інсулін)?',
    faq_q4_text:
      'IOB (Insulin on Board) — це кількість раніше введеного інсуліну, яка ще діє в організмі. Якщо ви нещодавно кололи інсулін, калькулятор автоматично відніме його залишок з нової дози на корекцію, щоб не допустити гіпоглікемії.',
  },
  en: {
    title_calc: '<i class="fa-solid fa-calculator"></i> Calculator',
    subtitle_calc: 'Dose calculation for food and correction',
    recommended_dose: 'Recommended dose:',
    units: 'U',
    dose_food: 'For food:',
    dose_correction: 'Correction:',
    save_injection: '<i class="fa-solid fa-syringe"></i> Save injection',
    current_bg_title:
      '<i class="fa-solid fa-droplet" style="color: #ff453a;"></i> Current Blood Sugar',
    sugar_label: 'Glucose',
    what_to_eat: '<i class="fa-solid fa-utensils"></i> What to eat?',
    total_meal: 'Total:',
    add_btn: '+ Add',
    empty_meal: 'Meal list is empty.<br>Press "+ Add" or enter carbs manually.',
    manual_xe: 'Or enter manual Carbs/Exchanges',
    calc_btn: 'Calculate Dose',
    food_title: '<i class="fa-solid fa-apple-whole"></i> Food Database',
    search_placeholder: 'Search food...',
    settings_title: '<i class="fa-solid fa-gear"></i> Settings',
    basic_params: '<i class="fa-solid fa-ruler"></i> Basic Parameters',
    age_group: 'Age Group',
    age_adult: 'Adults (18-60 years)',
    age_child: 'Children (under 12)',
    age_teen: 'Teens (12-18 years)',
    age_senior: 'Seniors (60+ years)',
    glucose_units: 'Glucose Units',
    weight_label: 'Body Weight (kg)',
    auto_calc_btn: 'Auto-calculate by weight',
    medical_params: '<i class="fa-solid fa-syringe"></i> Medical Coefficients',
    xe_weight: '1 Carb Exchange (g of carbs)',
    target_bg: 'Target Blood Sugar',
    carb_ratio: 'Carb Ratio (U per 1 Exchange)',
    isf: 'Insulin Sensitivity Factor',
    save_settings: 'Save Settings',
    nav_calc: 'Calculator',
    nav_food: 'Food',
    nav_settings: 'Settings',
    nav_faq: 'FAQ',
    faq_title:
      '<i class="fa-solid fa-circle-question"></i> FAQ & Medical Disclaimer',
    faq_disclaimer_title:
      '<i class="fa-solid fa-triangle-exclamation"></i> Important Warning (Medical Disclaimer)',
    faq_disclaimer_text:
      'This application is designed solely for educational and informational purposes. It is <b>not a medical device</b> and cannot replace professional consultation with an endocrinologist.<br><br>The formulas used (Rule of 500, Rule of 1800, IOB calculation) are standard clinical guidelines, but <b>you assume all risks</b> for using the calculated doses. The algorithm may not account for stress, illness, physical activity, and other individual factors. Always verify calculations and consult your doctor before changing your therapy.',
    saved_toast: '<i class="fa-solid fa-check"></i> Settings saved!',
    injection_saved_toast:
      '<i class="fa-solid fa-syringe"></i> Injection saved!',
    high_bg_toast:
      '<i class="fa-solid fa-triangle-exclamation"></i> High glucose! Check ketones.',
    carbs_per_100: 'g carbs / 100g',
    xe: 'Exch.',
    ml: 'ml',
    g: 'g',
    pcs: 'pcs',
    wizard_btn:
      '<i class="fa-solid fa-bullseye"></i> Calculate from experience',
    wizard_back: 'Back to settings',
    wizard_title: '<i class="fa-solid fa-bullseye"></i> Setup Wizard',
    wizard_subtitle: 'Calculate your real coefficients',
    wizard_carb_title: 'Carbohydrate Ratio (CR)',
    wizard_carb_desc:
      'Recall your perfect meal where your blood sugar before and after was normal.',
    wizard_carb_eaten: 'Carbs (g)',
    wizard_carb_dose: 'Insulin (U)',
    wizard_carb_corr: 'Correction (U)',
    wizard_carb_result: 'Your real CR:',
    wizard_carb_units: 'U / 1 Exch.',
    wizard_apply_carb: 'Apply this CR',
    wizard_isf_title: 'Insulin Sensitivity Factor (ISF)',
    wizard_isf_desc:
      'Recall a time you corrected high blood sugar (without food).',
    wizard_isf_before: 'BG Before',
    wizard_isf_after: 'BG AFTER (4h)',
    wizard_isf_dose: 'Insulin (U)',
    wizard_isf_food: 'Food eaten during period',
    wizard_isf_result: 'Your real ISF:',
    wizard_apply_isf: 'Apply this ISF',
    wizard_applied_toast:
      '<i class="fa-solid fa-check"></i> Coefficient applied successfully!',
    faq_q1_title: 'How is the food dose calculated?',
    faq_q1_text:
      'Food dose = (Carbs/Exchanges) × (Carb Ratio). For example, if you ate 3 exchanges and your CR is 1.2, the dose = 3 × 1.2 = 3.6 U.',
    faq_q2_title: 'How is the correction dose calculated?',
    faq_q2_text:
      'Correction dose = (Current BG - Target BG) / ISF. If your BG is 10, target is 5.5, and ISF is 2.5, the dose = (10 - 5.5) / 2.5 = 1.8 U.',
    faq_q3_title: 'Where do the default coefficients come from?',
    faq_q3_text:
      'When choosing age and weight, coefficients are calculated using international formulas:<br>• <b>Rule of 500:</b> CR = 500 / Total Daily Dose.<br>• <b>Rule of 1800 (mg/dl) or 100 (mmol/L):</b> ISF = 1800 / Total Daily Dose.<br>TDD is estimated by weight (0.5 to 1.0 U per kg).',
    faq_q4_title: 'What is IOB (Insulin on Board)?',
    faq_q4_text:
      'IOB (Insulin on Board) is the amount of previously injected fast-acting insulin that is still active in the body. If you injected recently, the calculator subtracts the active insulin from the new correction dose to prevent hypoglycemia.',
  },
};

function t(key) {
  const lang = localStorage.getItem('appLang') || 'ru';
  return translations[lang][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      el.setAttribute('placeholder', t(key));
    } else {
      el.innerHTML = t(key);
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem('appLang', lang);
  document.getElementById('lang-select').value = lang;
  applyTranslations();
  if (typeof renderMealList === 'function') renderMealList();
  if (typeof renderFoodList === 'function') renderFoodList();
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('appLang') || 'ru';
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', e => setLanguage(e.target.value));
  }
  applyTranslations();
});

const categoryTranslations = {
  Гарниры: { ru: 'Гарниры', uk: 'Гарніри', en: 'Side Dishes' },
  'Хлеб и выпечка': {
    ru: 'Хлеб и выпечка',
    uk: 'Хліб та випічка',
    en: 'Bread & Pastries',
  },
  'Фрукты и ягоды': {
    ru: 'Фрукты и ягоды',
    uk: 'Фрукти та ягоди',
    en: 'Fruits & Berries',
  },
  'Овощи и бобовые': {
    ru: 'Овощи и бобовые',
    uk: 'Овочі та бобові',
    en: 'Vegetables & Legumes',
  },
  'Овощи (безуглеводные)': {
    ru: 'Овощи (безуглеводные)',
    uk: 'Овочі (безвуглеводні)',
    en: 'Vegetables (Carb-free)',
  },
  Сладости: { ru: 'Сладости', uk: 'Солодощі', en: 'Sweets' },
  Мороженое: { ru: 'Мороженое', uk: 'Морозиво', en: 'Ice Cream' },
  'Молочные продукты': {
    ru: 'Молочные продукты',
    uk: 'Молочні продукти',
    en: 'Dairy',
  },
  Напитки: { ru: 'Напитки', uk: 'Напої', en: 'Beverages' },
  Фастфуд: { ru: 'Фастфуд', uk: 'Фастфуд', en: 'Fast Food' },
  'Мясо и рыба (0 ХЕ)': {
    ru: 'Мясо и рыба (0 ХЕ)',
    uk: "М'ясо та риба (0 ХО)",
    en: 'Meat & Fish (0 Carbs)',
  },
  Сыр: { ru: 'Сыр', uk: 'Сир', en: 'Cheese' },
  Орехи: { ru: 'Орехи', uk: 'Горіхи', en: 'Nuts' },
};

function tCategory(cat) {
  const lang = localStorage.getItem('appLang') || 'ru';
  return categoryTranslations[cat]
    ? categoryTranslations[cat][lang] || cat
    : cat;
}

function tFood(name) {
  // TODO: Add food name translations if needed. Currently falls back to Russian.
  return name;
}
