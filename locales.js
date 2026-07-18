const translations = {
  ru: {
    title_calc: '📱 Калькулятор',
    subtitle_calc: 'Расчет дозы на еду и коррекцию',
    recommended_dose: 'Рекомендуемая доза:',
    units: 'ЕД',
    dose_food: 'На еду:',
    dose_correction: 'Коррекция:',
    save_injection: '💉 Сохранить укол',
    current_bg_title: '🩸 Текущий сахар',
    sugar_label: 'Сахар',
    what_to_eat: '🍽 Что будем есть?',
    add_btn: '+ Добавить',
    empty_meal:
      'Список еды пуст.<br>Нажмите "+ Добавить" или введите ХЕ вручную.',
    manual_xe: 'Или введите ХЕ вручную (всего)',
    calc_btn: 'Рассчитать дозу',
    food_title: '🍎 База продуктов',
    search_placeholder: '🔍 Поиск продукта...',
    settings_title: '⚙️ Настройки',
    basic_params: '📏 Основные параметры',
    age_group: 'Возрастная группа',
    age_adult: 'Взрослые (18-60 лет)',
    age_child: 'Дети (до 12 лет)',
    age_teen: 'Подростки (12-18 лет)',
    age_senior: 'Пожилые (60+ лет)',
    glucose_units: 'Единицы измерения сахара',
    weight_label: 'Вес тела (кг)',
    auto_calc_btn: 'Авторасчет по весу',
    medical_params: '💉 Медицинские коэффициенты',
    xe_weight: 'Вес 1 ХЕ (г углеводов)',
    target_bg: 'Целевой сахар',
    carb_ratio: 'Углеводный коэффициент (ЕД на 1 ХЕ)',
    isf: 'Фактор чувствительности (снижение на 1 ЕД)',
    save_settings: 'Сохранить настройки',
    nav_calc: 'Калькулятор',
    nav_food: 'Еда',
    nav_settings: 'Настройки',
    nav_faq: 'FAQ',
    faq_title: '❓ FAQ & Отказ от ответственности',
    faq_disclaimer_title: '⚠️ Важное предупреждение (Medical Disclaimer)',
    faq_disclaimer_text:
      'Данное приложение создано исключительно для образовательных и информационных целей. Оно <b>не является медицинским прибором</b> и не может заменить профессиональную консультацию эндокринолога.<br><br>Используемые формулы (Правило 500, Правило 1800, расчет IOB) являются общепринятыми клиническими стандартами, однако <b>вы принимаете на себя все риски</b> за использование рассчитанных доз. Алгоритм может не учитывать стресс, болезнь, физическую активность и другие индивидуальные факторы. Всегда проверяйте расчеты и консультируйтесь с врачом перед изменением терапии.',
    saved_toast: '✅ Настройки сохранены!',
    injection_saved_toast: '💉 Укол сохранен!',
    high_bg_toast: '⚠️ Высокая глюкоза! Проверьте кетоны.',
    carbs_per_100: 'г углеводов / 100г',
    xe: 'ХЕ',
    ml: 'мл',
    g: 'г',
    pcs: 'шт.',
    wizard_btn: '🎯 Рассчитать по своему опыту',
    wizard_back: 'Назад в настройки',
    wizard_title: '🎯 Мастер настройки',
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
    wizard_applied_toast: '✅ Коэффициент успешно применен!',
  },
  uk: {
    title_calc: '📱 Калькулятор',
    subtitle_calc: 'Розрахунок дози на їжу та корекцію',
    recommended_dose: 'Рекомендована доза:',
    units: 'ОД',
    dose_food: 'На їжу:',
    dose_correction: 'Корекція:',
    save_injection: '💉 Зберегти укол',
    current_bg_title: '🩸 Поточний цукор',
    sugar_label: 'Цукор',
    what_to_eat: '🍽 Що будемо їсти?',
    add_btn: '+ Додати',
    empty_meal:
      'Список їжі порожній.<br>Натисніть "+ Додати" або введіть ХО вручну.',
    manual_xe: 'Або введіть ХО вручну (всього)',
    calc_btn: 'Розрахувати дозу',
    food_title: '🍎 База продуктів',
    search_placeholder: '🔍 Пошук продукту...',
    settings_title: '⚙️ Налаштування',
    basic_params: '📏 Основні параметри',
    age_group: 'Вікова група',
    age_adult: 'Дорослі (18-60 років)',
    age_child: 'Діти (до 12 років)',
    age_teen: 'Підлітки (12-18 років)',
    age_senior: 'Літні (60+ років)',
    glucose_units: 'Одиниці вимірювання цукру',
    weight_label: 'Вага тіла (кг)',
    auto_calc_btn: 'Авторозрахунок за вагою',
    medical_params: '💉 Медичні коефіцієнти',
    xe_weight: 'Вага 1 ХО (г вуглеводів)',
    target_bg: 'Цільовий цукор',
    carb_ratio: 'Вуглеводний коефіцієнт (ОД на 1 ХО)',
    isf: 'Фактор чутливості (зниження на 1 ОД)',
    save_settings: 'Зберегти налаштування',
    nav_calc: 'Калькулятор',
    nav_food: 'Їжа',
    nav_settings: 'Налаштування',
    nav_faq: 'FAQ',
    faq_title: '❓ FAQ & Відмова від відповідальності',
    faq_disclaimer_title: '⚠️ Важливе попередження (Medical Disclaimer)',
    faq_disclaimer_text:
      'Цей додаток створено виключно для освітніх та інформаційних цілей. Він <b>не є медичним приладом</b> і не може замінити професійну консультацію ендокринолога.<br><br>Використовувані формули (Правило 500, Правило 1800, розрахунок IOB) є загальноприйнятими клінічними стандартами, проте <b>ви берете на себе всі ризики</b> за використання розрахованих доз. Алгоритм може не враховувати стрес, хворобу, фізичну активність та інші індивідуальні фактори. Завжди перевіряйте розрахунки та консультуйтеся з лікарем перед зміною терапії.',
    saved_toast: '✅ Налаштування збережено!',
    injection_saved_toast: '💉 Укол збережено!',
    high_bg_toast: '⚠️ Висока глюкоза! Перевірте кетони.',
    carbs_per_100: 'г вуглеводів / 100г',
    xe: 'ХО',
    ml: 'мл',
    g: 'г',
    pcs: 'шт.',
    wizard_btn: '🎯 Розрахувати за своїм досвідом',
    wizard_back: 'Назад до налаштувань',
    wizard_title: '🎯 Майстер налаштування',
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
    wizard_applied_toast: '✅ Коефіцієнт успішно застосовано!',
  },
  en: {
    title_calc: '📱 Calculator',
    subtitle_calc: 'Dose calculation for food and correction',
    recommended_dose: 'Recommended dose:',
    units: 'U',
    dose_food: 'For food:',
    dose_correction: 'Correction:',
    save_injection: '💉 Save injection',
    current_bg_title: '🩸 Current Blood Sugar',
    sugar_label: 'Blood Sugar',
    what_to_eat: '🍽 What are we eating?',
    add_btn: '+ Add',
    empty_meal: 'Meal list is empty.<br>Press "+ Add" or enter carbs manually.',
    manual_xe: 'Or enter manual Carbs/Exchanges',
    calc_btn: 'Calculate Dose',
    food_title: '🍎 Food Database',
    search_placeholder: '🔍 Search food...',
    settings_title: '⚙️ Settings',
    basic_params: '📏 Basic Parameters',
    age_group: 'Age Group',
    age_adult: 'Adults (18-60 years)',
    age_child: 'Children (under 12)',
    age_teen: 'Teens (12-18 years)',
    age_senior: 'Seniors (60+ years)',
    glucose_units: 'Glucose Units',
    weight_label: 'Body Weight (kg)',
    auto_calc_btn: 'Auto-calculate by weight',
    medical_params: '💉 Medical Coefficients',
    xe_weight: '1 Carb Exchange (g of carbs)',
    target_bg: 'Target Blood Sugar',
    carb_ratio: 'Carb Ratio (U per 1 Exchange)',
    isf: 'Insulin Sensitivity Factor',
    save_settings: 'Save Settings',
    nav_calc: 'Calculator',
    nav_food: 'Food',
    nav_settings: 'Settings',
    nav_faq: 'FAQ',
    faq_title: '❓ FAQ & Medical Disclaimer',
    faq_disclaimer_title: '⚠️ Important Warning (Medical Disclaimer)',
    faq_disclaimer_text:
      'This application is designed solely for educational and informational purposes. It is <b>not a medical device</b> and cannot replace professional consultation with an endocrinologist.<br><br>The formulas used (Rule of 500, Rule of 1800, IOB calculation) are standard clinical guidelines, but <b>you assume all risks</b> for using the calculated doses. The algorithm may not account for stress, illness, physical activity, and other individual factors. Always verify calculations and consult your doctor before changing your therapy.',
    saved_toast: '✅ Settings saved!',
    injection_saved_toast: '💉 Injection saved!',
    high_bg_toast: '⚠️ High glucose! Check ketones.',
    carbs_per_100: 'g carbs / 100g',
    xe: 'Exch.',
    ml: 'ml',
    g: 'g',
    pcs: 'pcs',
    wizard_btn: '🎯 Calculate from experience',
    wizard_back: 'Back to settings',
    wizard_title: '🎯 Setup Wizard',
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
    wizard_applied_toast: '✅ Coefficient applied successfully!',
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
