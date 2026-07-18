const foodData = [
  {
    id: 'g1',
    name: 'Гречневая каша (вареная)',
    category: 'Гарниры',
    carbsPer100g: 20,
    gi: 'medium',
  },

  { id: 'g2', name: 'Гречка (сухая)', category: 'Гарниры', carbsPer100g: 68 },

  {
    id: 'g3',
    name: 'Рис белый (вареный)',
    category: 'Гарниры',
    carbsPer100g: 28,
    gi: 'high',
  },

  {
    id: 'g4',
    name: 'Рис бурый (вареный)',
    category: 'Гарниры',
    carbsPer100g: 23,
    gi: 'medium',
  },

  { id: 'g5', name: 'Рис (сухой)', category: 'Гарниры', carbsPer100g: 78 },

  {
    id: 'g6',
    name: 'Макароны (вареные)',
    category: 'Гарниры',
    carbsPer100g: 28,
    gi: 'medium',
  },

  { id: 'g7', name: 'Макароны (сухие)', category: 'Гарниры', carbsPer100g: 70 },

  {
    id: 'g8',
    name: 'Картофель вареный',
    category: 'Гарниры',
    carbsPer100g: 18,
    gi: 'high',
  },

  {
    id: 'g9',
    name: 'Картофельное пюре (на молоке)',
    category: 'Гарниры',
    carbsPer100g: 15,
    gi: 'high',
  },

  { id: 'g10', name: 'Картофель фри', category: 'Гарниры', carbsPer100g: 35 },

  {
    id: 'g11',
    name: 'Картофель жареный',
    category: 'Гарниры',
    carbsPer100g: 23,
    gi: 'high',
  },

  {
    id: 'g12',
    name: 'Овсяная каша (на молоке)',
    category: 'Гарниры',
    carbsPer100g: 15,
    gi: 'medium',
  },

  {
    id: 'g13',
    name: 'Овсяные хлопья (сухие)',
    category: 'Гарниры',
    carbsPer100g: 62,
    gi: 'medium',
  },

  {
    id: 'g14',
    name: 'Пшенная каша (вареная)',
    category: 'Гарниры',
    carbsPer100g: 17,
    gi: 'high',
  },

  {
    id: 'g15',
    name: 'Булгур (вареный)',
    category: 'Гарниры',
    carbsPer100g: 18,
    gi: 'medium',
  },

  {
    id: 'g16',
    name: 'Кускус (вареный)',
    category: 'Гарниры',
    carbsPer100g: 23,
    gi: 'high',
  },

  { id: 'g17', name: 'Киноа (вареная)', category: 'Гарниры', carbsPer100g: 21 },

  {
    id: 'b1',
    name: 'Хлеб белый (пшеничный)',
    category: 'Хлеб и выпечка',
    carbsPer100g: 50,
    gi: 'high',
  },

  {
    id: 'b2',
    name: 'Хлеб черный (ржаной)',
    category: 'Хлеб и выпечка',
    carbsPer100g: 40,
    gi: 'medium',
  },

  {
    id: 'b3',
    name: 'Батон нарезной',
    category: 'Хлеб и выпечка',
    carbsPer100g: 51,
    gi: 'high',
  },

  {
    id: 'b4',
    name: 'Лаваш тонкий (армянский)',
    category: 'Хлеб и выпечка',
    carbsPer100g: 48,
    gi: 'medium',
  },

  {
    id: 'b5',
    name: 'Хлебцы хрустящие',
    category: 'Хлеб и выпечка',
    carbsPer100g: 60,
    gi: 'medium',
  },

  {
    id: 'b6',
    name: 'Блины (без начинки)',
    category: 'Хлеб и выпечка',
    carbsPer100g: 28,
    gi: 'high',
  },

  { id: 'b7', name: 'Оладьи', category: 'Хлеб и выпечка', carbsPer100g: 35 },

  {
    id: 'b8',
    name: 'Пирожок с картошкой',
    category: 'Хлеб и выпечка',
    carbsPer100g: 38,
    gi: 'medium',
  },

  {
    id: 'b9',
    name: 'Пирожок с мясом',
    category: 'Хлеб и выпечка',
    carbsPer100g: 30,
    gi: 'medium',
  },

  {
    id: 'b10',
    name: 'Булочка сладкая',
    category: 'Хлеб и выпечка',
    carbsPer100g: 55,
    gi: 'high',
  },

  { id: 'b11', name: 'Круассан', category: 'Хлеб и выпечка', carbsPer100g: 45 },

  { id: 'f1', name: 'Яблоко', category: 'Фрукты и ягоды', carbsPer100g: 11 },

  {
    id: 'f2',
    name: 'Банан (без кожуры)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 23,
    gi: 'medium',
  },

  { id: 'f3', name: 'Апельсин', category: 'Фрукты и ягоды', carbsPer100g: 8 },

  { id: 'f4', name: 'Мандарин', category: 'Фрукты и ягоды', carbsPer100g: 11 },

  { id: 'f5', name: 'Груша', category: 'Фрукты и ягоды', carbsPer100g: 11 },

  { id: 'f6', name: 'Виноград', category: 'Фрукты и ягоды', carbsPer100g: 17 },

  { id: 'f7', name: 'Киви', category: 'Фрукты и ягоды', carbsPer100g: 10 },

  { id: 'f8', name: 'Персик', category: 'Фрукты и ягоды', carbsPer100g: 9 },

  { id: 'f9', name: 'Нектарин', category: 'Фрукты и ягоды', carbsPer100g: 11 },

  { id: 'f10', name: 'Слива', category: 'Фрукты и ягоды', carbsPer100g: 10 },

  { id: 'f11', name: 'Абрикос', category: 'Фрукты и ягоды', carbsPer100g: 9 },

  { id: 'f12', name: 'Хурма', category: 'Фрукты и ягоды', carbsPer100g: 15 },

  { id: 'f13', name: 'Гранат', category: 'Фрукты и ягоды', carbsPer100g: 14 },

  {
    id: 'f14',
    name: 'Ананас (свежий)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 13,
    gi: 'low',
  },

  { id: 'f15', name: 'Манго', category: 'Фрукты и ягоды', carbsPer100g: 15 },

  { id: 'f16', name: 'Арбуз', category: 'Фрукты и ягоды', carbsPer100g: 8 },

  { id: 'f17', name: 'Дыня', category: 'Фрукты и ягоды', carbsPer100g: 8 },

  { id: 'f18', name: 'Клубника', category: 'Фрукты и ягоды', carbsPer100g: 6 },

  { id: 'f19', name: 'Малина', category: 'Фрукты и ягоды', carbsPer100g: 8 },

  { id: 'f20', name: 'Черешня', category: 'Фрукты и ягоды', carbsPer100g: 12 },

  { id: 'f21', name: 'Вишня', category: 'Фрукты и ягоды', carbsPer100g: 10 },

  { id: 'f22', name: 'Черника', category: 'Фрукты и ягоды', carbsPer100g: 8 },

  {
    id: 'v1',
    name: 'Кукуруза консервированная',
    category: 'Овощи и бобовые',
    carbsPer100g: 11,
    gi: 'low',
  },

  {
    id: 'v2',
    name: 'Горошек зеленый консервированный',
    category: 'Овощи и бобовые',
    carbsPer100g: 6,
    gi: 'low',
  },

  {
    id: 'v3',
    name: 'Морковь сырая',
    category: 'Овощи и бобовые',
    carbsPer100g: 7,
    gi: 'low',
  },

  {
    id: 'v4',
    name: 'Морковь вареная',
    category: 'Овощи и бобовые',
    carbsPer100g: 5,
    gi: 'high',
  },

  {
    id: 'v5',
    name: 'Свекла вареная',
    category: 'Овощи и бобовые',
    carbsPer100g: 8,
    gi: 'low',
  },

  {
    id: 'v6',
    name: 'Помидор',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 4,
    gi: 'medium',
  },

  {
    id: 'v7',
    name: 'Огурец',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 3,
    gi: 'medium',
  },

  {
    id: 'v8',
    name: 'Капуста белокочанная',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 5,
    gi: 'medium',
  },

  {
    id: 'v9',
    name: 'Перец болгарский',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 5,
    gi: 'medium',
  },

  {
    id: 'v10',
    name: 'Фасоль вареная',
    category: 'Овощи и бобовые',
    carbsPer100g: 21,
    gi: 'low',
  },

  {
    id: 'v11',
    name: 'Чечевица вареная',
    category: 'Овощи и бобовые',
    carbsPer100g: 20,
    gi: 'low',
  },

  {
    id: 's1',
    name: 'Сахар (рафинад/песок)',
    category: 'Сладости',
    carbsPer100g: 99.8,
    gi: 'high',
  },

  {
    id: 's1_1',
    name: 'Таблетки сахарозаменителя (1 шт = 0 ХЕ)',
    category: 'Сладости',
    carbsPer100g: 0,
    defaultAmount: 1,
    gi: 'high',
  },

  {
    id: 's1_2',
    name: 'Таблетки декстрозы / глюкозы (от гипо, 1 шт = 4г угл)',
    category: 'Сладости',
    carbsPer100g: 400,
    gi: 'high',
    defaultAmount: 1,
  },

  { id: 's2', name: 'Мед', category: 'Сладости', carbsPer100g: 82 },

  {
    id: 's3',
    name: 'Шоколад молочный',
    category: 'Сладости',
    carbsPer100g: 55,
    gi: 'high',
  },

  {
    id: 's4',
    name: 'Шоколад горький (70%)',
    category: 'Сладости',
    carbsPer100g: 48,
    gi: 'high',
  },

  {
    id: 's5',
    name: 'Конфета шоколадная',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
  },

  {
    id: 's6',
    name: 'Леденец (карамель)',
    category: 'Сладости',
    carbsPer100g: 95,
    gi: 'high',
  },

  { id: 's7', name: 'Мармелад', category: 'Сладости', carbsPer100g: 80 },

  { id: 's8', name: 'Зефир / Пастила', category: 'Сладости', carbsPer100g: 80 },

  { id: 's9', name: 'Печенье овсяное', category: 'Сладости', carbsPer100g: 70 },

  {
    id: 's10',
    name: 'Печенье юбилейное',
    category: 'Сладости',
    carbsPer100g: 65,
    gi: 'high',
  },

  { id: 's11', name: 'Пряники', category: 'Сладости', carbsPer100g: 75 },

  { id: 's12', name: 'Вафли', category: 'Сладости', carbsPer100g: 60 },

  {
    id: 's13',
    name: 'Торт бисквитный',
    category: 'Сладости',
    carbsPer100g: 50,
    gi: 'high',
  },

  {
    id: 's14',
    name: 'Сгущенное молоко (с сахаром)',
    category: 'Сладости',
    carbsPer100g: 56,
    gi: 'high',
  },

  {
    id: 'i1',
    name: 'Мороженое Пломбир (ванильный)',
    category: 'Мороженое',
    carbsPer100g: 20,
    gi: 'medium',
  },

  {
    id: 'i2',
    name: 'Мороженое Эскимо (в шоколаде)',
    category: 'Мороженое',
    carbsPer100g: 22,
    gi: 'medium',
  },

  {
    id: 'i3',
    name: 'Мороженое Фруктовый лед',
    category: 'Мороженое',
    carbsPer100g: 28,
    gi: 'medium',
  },

  {
    id: 'i4',
    name: 'Мороженое Рожок (с вафлей)',
    category: 'Мороженое',
    carbsPer100g: 30,
    gi: 'medium',
  },

  {
    id: 'i5',
    name: 'Мороженое Шоколадное',
    category: 'Мороженое',
    carbsPer100g: 22,
    gi: 'medium',
  },

  {
    id: 'd1',
    name: 'Молоко 2.5-3.2%',
    category: 'Молочные продукты',
    carbsPer100g: 4.7,
    gi: 'low',
  },

  { id: 'd2', name: 'Кефир', category: 'Молочные продукты', carbsPer100g: 4.0 },

  {
    id: 'd3',
    name: 'Йогурт питьевой (с сахаром/фруктами)',
    category: 'Молочные продукты',
    carbsPer100g: 11,
    gi: 'low',
  },

  {
    id: 'd4',
    name: 'Йогурт натуральный (без добавок)',
    category: 'Молочные продукты',
    carbsPer100g: 5,
    gi: 'low',
  },

  {
    id: 'd5',
    name: 'Творог 5-9%',
    category: 'Молочные продукты',
    carbsPer100g: 3,
    gi: 'low',
  },

  {
    id: 'd6',
    name: 'Творожок сладкий / сырок',
    category: 'Молочные продукты',
    carbsPer100g: 15,
    gi: 'high',
  },

  {
    id: 'd7',
    name: 'Сырок глазированный',
    category: 'Молочные продукты',
    carbsPer100g: 30,
    gi: 'high',
  },

  { id: 'd8', name: 'Смета', category: 'Молочные продукты', carbsPer100g: 3.5 },

  {
    id: 'd9',
    name: 'Сырники (из творога с мукой)',
    category: 'Молочные продукты',
    carbsPer100g: 20,
    gi: 'low',
  },

  {
    id: 'dr1',
    name: 'Сок яблочный (пакетированный)',
    category: 'Напитки',
    carbsPer100g: 11,
    gi: 'medium',
  },

  {
    id: 'dr2',
    name: 'Сок апельсиновый',
    category: 'Напитки',
    carbsPer100g: 10,
    gi: 'medium',
  },

  { id: 'dr3', name: 'Сок мультифрукт', category: 'Напитки', carbsPer100g: 12 },

  {
    id: 'dr4',
    name: 'Кока-Кола / Пепси (классика)',
    category: 'Напитки',
    carbsPer100g: 10.6,
    gi: 'medium',
  },

  {
    id: 'dr5',
    name: 'Кока-Кола Zero / Без сахара',
    category: 'Напитки',
    carbsPer100g: 0,
    gi: 'medium',
  },

  { id: 'dr6', name: 'Спрайт / 7Up', category: 'Напитки', carbsPer100g: 10 },

  { id: 'dr7', name: 'Квас', category: 'Напитки', carbsPer100g: 6 },

  {
    id: 'dr8',
    name: 'Чай сладкий (2 ч.л. сахара на чашку)',
    category: 'Напитки',
    carbsPer100g: 6,
    gi: 'medium',
  },

  {
    id: 'ff1',
    name: 'Бургер (Биг Мак / Воппер)',
    category: 'Фастфуд',
    carbsPer100g: 22,
    gi: 'high',
  },

  {
    id: 'ff2',
    name: 'Гамбургер классический',
    category: 'Фастфуд',
    carbsPer100g: 28,
    gi: 'high',
  },

  {
    id: 'ff3',
    name: 'Пицца (на тонком тесте)',
    category: 'Фастфуд',
    carbsPer100g: 32,
    gi: 'high',
  },

  {
    id: 'ff4',
    name: 'Пицца (на толстом тесте)',
    category: 'Фастфуд',
    carbsPer100g: 35,
    gi: 'high',
  },

  {
    id: 'ff5',
    name: 'Шаурма (в лаваше)',
    category: 'Фастфуд',
    carbsPer100g: 20,
    gi: 'high',
  },

  {
    id: 'ff6',
    name: 'Наггетсы куриные (в панировке)',
    category: 'Фастфуд',
    carbsPer100g: 15,
    gi: 'high',
  },

  {
    id: 'ff7',
    name: 'Суши / Роллы (с рисом)',
    category: 'Фастфуд',
    carbsPer100g: 30,
    gi: 'high',
  },

  {
    id: 'ff8',
    name: 'Блин с начинкой (Теремок)',
    category: 'Фастфуд',
    carbsPer100g: 25,
    gi: 'high',
  },

  {
    id: 'z1',
    name: 'Куриное филе вареное',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0,
    gi: 'medium',
  },

  {
    id: 'z2',
    name: 'Говядина / Свинина вареная',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0,
    gi: 'medium',
  },

  {
    id: 'z3',
    name: 'Котлета мясная (без хлеба)',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 3,
    gi: 'medium',
  },

  {
    id: 'z4',
    name: 'Котлета домашняя (с хлебом)',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 10,
    gi: 'medium',
  },

  {
    id: 'z5',
    name: 'Рыба запеченая',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0,
    gi: 'medium',
  },

  {
    id: 'z6',
    name: 'Яйцо куриное вареное (1 шт = ~50г)',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0.5,
    gi: 'medium',
  },

  {
    id: 'z6_1',
    name: 'Яйцо жареное / глазунья (1 шт = ~50г)',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0.8,
    gi: 'medium',
  },

  { id: 'z7', name: 'Сыр твердый', category: 'Сыр', carbsPer100g: 0.5 },

  {
    id: 'z8',
    name: 'Колбаса вареная / Сосиски',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 2,
    gi: 'medium',
  },

  { id: 'z9', name: 'Орехи грецкие', category: 'Орехи', carbsPer100g: 14 },

  {
    id: 'g18',
    name: 'Чечевица красная (вареная)',
    category: 'Гарниры',
    carbsPer100g: 20,
    gi: 'low',
  },

  {
    id: 'g19',
    name: 'Чечевица (сухая)',
    category: 'Гарниры',
    carbsPer100g: 60,
    gi: 'low',
  },

  {
    id: 'g20',
    name: 'Перловая каша (вареная)',
    category: 'Гарниры',
    carbsPer100g: 22,
    gi: 'low',
  },

  {
    id: 'g21',
    name: 'Гороховое пюре',
    category: 'Гарниры',
    carbsPer100g: 15,
    gi: 'low',
  },

  {
    id: 'g22',
    name: 'Кукурузная каша (полента, вареная)',
    category: 'Гарниры',
    carbsPer100g: 16,
    gi: 'high',
  },

  {
    id: 'g23',
    name: 'Баттат (сладкий картофель, запеченный)',
    category: 'Гарниры',
    carbsPer100g: 20,
    gi: 'medium',
  },

  {
    id: 'g24',
    name: 'Тайский рис (Жасмин / Басмати, вареный)',
    category: 'Гарниры',
    carbsPer100g: 29,
    gi: 'medium',
  },

  {
    id: 'b12',
    name: 'Хлеб цельнозерновой',
    category: 'Хлеб и выпечка',
    carbsPer100g: 43,
    gi: 'low',
  },

  {
    id: 'b13',
    name: 'Хлеб бородинский',
    category: 'Хлеб и выпечка',
    carbsPer100g: 39,
    gi: 'medium',
  },

  {
    id: 'b14',
    name: 'Тортилья (кукурузная лепешка)',
    category: 'Хлеб и выпечка',
    carbsPer100g: 45,
    gi: 'medium',
  },

  {
    id: 'b15',
    name: 'Бублик / Баранка',
    category: 'Хлеб и выпечка',
    carbsPer100g: 68,
    gi: 'high',
  },

  {
    id: 'b16',
    name: 'Сухари пшеничные',
    category: 'Хлеб и выпечка',
    carbsPer100g: 71,
    gi: 'high',
  },

  {
    id: 'b17',
    name: 'Пицца-кекс (маффин несладкий)',
    category: 'Хлеб и выпечка',
    carbsPer100g: 40,
    gi: 'medium',
  },

  {
    id: 'f23',
    name: 'Грейпфрут',
    category: 'Фрукты и ягоды',
    carbsPer100g: 6.5,
    gi: 'low',
  },

  {
    id: 'f24',
    name: 'Авокадо (спелое)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 2.0,
    gi: 'low',
  },

  {
    id: 'f25',
    name: 'Инжир (свежий)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 16,
    gi: 'medium',
  },

  {
    id: 'f26',
    name: 'Инжир (сушеный)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 64,
    gi: 'high',
  },

  {
    id: 'f27',
    name: 'Финики (сушеные)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 69,
    gi: 'high',
  },

  {
    id: 'f28',
    name: 'Изюм',
    category: 'Фрукты и ягоды',
    carbsPer100g: 79,
    gi: 'high',
  },

  {
    id: 'f29',
    name: 'Чернослив',
    category: 'Фрукты и ягоды',
    carbsPer100g: 57,
    gi: 'low',
  },

  {
    id: 'f30',
    name: 'Курага',
    category: 'Фрукты и ягоды',
    carbsPer100g: 51,
    gi: 'low',
  },

  {
    id: 'f31',
    name: 'Голубика',
    category: 'Фрукты и ягоды',
    carbsPer100g: 12,
    gi: 'low',
  },

  {
    id: 'f32',
    name: 'Клюква (свежая)',
    category: 'Фрукты и ягоды',
    carbsPer100g: 8,
    gi: 'low',
  },

  {
    id: 'v12',
    name: 'Трава / Зелень (укроп, петрушка, шпинат)',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 1.5,
    gi: 'low',
  },

  {
    id: 'v13',
    name: 'Брокколи вареная / на пару',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 4,
    gi: 'low',
  },

  {
    id: 'v14',
    name: 'Цветная капуста вареная',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 3,
    gi: 'low',
  },

  {
    id: 'v15',
    name: 'Кабачки / Цуккини тушеные',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 3.5,
    gi: 'low',
  },

  {
    id: 'v16',
    name: 'Баклажаны запеченные',
    category: 'Овощи (безуглеводные)',
    carbsPer100g: 6,
    gi: 'low',
  },

  {
    id: 'v17',
    name: 'Тыква запеченная',
    category: 'Овощи и бобовые',
    carbsPer100g: 8,
    gi: 'high',
  },

  {
    id: 'v18',
    name: 'Фасоль стручковая (зеленая, вареная)',
    category: 'Овощи и бобовые',
    carbsPer100g: 4.5,
    gi: 'low',
  },

  {
    id: 'v19',
    name: 'Нут (вареный)',
    category: 'Овощи и бобовые',
    carbsPer100g: 27,
    gi: 'low',
  },

  {
    id: 's15',
    name: 'Халва подсолнечная',
    category: 'Сладости',
    carbsPer100g: 54,
    gi: 'medium',
  },

  {
    id: 's16',
    name: 'Нутелла (шоколадная паста)',
    category: 'Сладости',
    carbsPer100g: 58,
    gi: 'high',
  },

  {
    id: 's17',
    name: 'Чак-чак с медом',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
  },

  {
    id: 's18',
    name: 'Сникерс / Марс (батончик)',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
  },

  {
    id: 's19',
    name: 'Варенье клубничное / малиновое',
    category: 'Сладости',
    carbsPer100g: 70,
    gi: 'high',
  },

  {
    id: 's20',
    name: 'Безе (меренга)',
    category: 'Сладости',
    carbsPer100g: 90,
    gi: 'high',
  },

  {
    id: 's21',
    name: 'Чизкейк (классический Нью-Йорк)',
    category: 'Сладости',
    carbsPer100g: 26,
    gi: 'medium',
  },

  {
    id: 'd10',
    name: 'Ряженка 4%',
    category: 'Молочные продукты',
    carbsPer100g: 4.2,
    gi: 'low',
  },

  {
    id: 'd11',
    name: 'Молоко сгущенное без сахара (концентрированное)',
    category: 'Молочные продукты',
    carbsPer100g: 9.5,
    gi: 'low',
  },

  {
    id: 'd12',
    name: 'Сливки 10%',
    category: 'Молочные продукты',
    carbsPer100g: 4.0,
    gi: 'low',
  },

  {
    id: 'd13',
    name: 'Сливки 20-33%',
    category: 'Молочные продукты',
    carbsPer100g: 3.5,
    gi: 'low',
  },

  {
    id: 'd14',
    name: 'Молоко безлактозное',
    category: 'Молочные продукты',
    carbsPer100g: 4.8,
    gi: 'medium',
  },

  {
    id: 'dr9',
    name: 'Капучино (без сахара, ~200мл порция = 100г молока)',
    category: 'Напитки',
    carbsPer100g: 4.0,
    gi: 'low',
  },

  {
    id: 'dr10',
    name: 'Латте (без сахара, ~300мл порция)',
    category: 'Напитки',
    carbsPer100g: 4.5,
    gi: 'low',
  },

  {
    id: 'dr11',
    name: 'Энергетик (Red Bull / Monster с сахаром)',
    category: 'Напитки',
    carbsPer100g: 11,
    gi: 'high',
  },

  {
    id: 'dr12',
    name: 'Энергетик Zero / Sugar Free',
    category: 'Напитки',
    carbsPer100g: 0,
    gi: 'low',
  },

  {
    id: 'dr13',
    name: 'Комбуча (чайный гриб классика)',
    category: 'Напитки',
    carbsPer100g: 5,
    gi: 'medium',
  },

  {
    id: 'dr14',
    name: 'Томатный сок',
    category: 'Напитки',
    carbsPer100g: 3.8,
    gi: 'low',
  },

  {
    id: 'dr15',
    name: 'Кофе с молоком (покупной, без сахара)',
    category: 'Напитки',
    carbsPer100g: 3.0,
    gi: 'low',
  },

  {
    id: 'ff9',
    name: 'Картофель по-деревенски (с кожурой, фастфуд)',
    category: 'Фастфуд',
    carbsPer100g: 26,
    gi: 'high',
  },

  {
    id: 'ff10',
    name: 'Кесадилья с курицей и сыром',
    category: 'Фастфуд',
    carbsPer100g: 24,
    gi: 'medium',
  },

  {
    id: 'ff11',
    name: 'Хот-дог в булке с соусами',
    category: 'Фастфуд',
    carbsPer100g: 26,
    gi: 'high',
  },

  {
    id: 'ff12',
    name: 'Пельмени (вареные)',
    category: 'Фастфуд',
    carbsPer100g: 23,
    gi: 'medium',
  },

  {
    id: 'ff13',
    name: 'Вареники с картошкой',
    category: 'Фастфуд',
    carbsPer100g: 32,
    gi: 'high',
  },

  {
    id: 'ff14',
    name: 'Вареники с творогом сладкие',
    category: 'Фастфуд',
    carbsPer100g: 28,
    gi: 'medium',
  },

  {
    id: 'ff15',
    name: 'Лазанья с мясом',
    category: 'Фастфуд',
    carbsPer100g: 15,
    gi: 'medium',
  },

  {
    id: 'z10',
    name: 'Грибы (шампиньоны/лесные, вареные или жареные)',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0.5,
    gi: 'low',
  },

  {
    id: 'z11',
    name: 'Бекон / Грудинка свиная',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0,
    gi: 'low',
  },

  {
    id: 'z12',
    name: 'Креветки / Кальмары / Морепродукты',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 0,
    gi: 'low',
  },

  {
    id: 'z13',
    name: 'Творожный сыр (Филадельфия / Альметте)',
    category: 'Сыр',
    carbsPer100g: 3.5,
    gi: 'low',
  },

  {
    id: 'z14',
    name: 'Сыр Моцарелла / Сулугуни',
    category: 'Сыр',
    carbsPer100g: 1.0,
    gi: 'low',
  },

  {
    id: 'z15',
    name: 'Оливки / Маслины консервированные',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 3.0,
    gi: 'low',
  },

  {
    id: 'z16',
    name: 'Арахис / Миндаль / Фундук',
    category: 'Орехи',
    carbsPer100g: 10,
    gi: 'low',
  },

  {
    id: 'z17',
    name: 'Семечки подсолнечные (очищенные)',
    category: 'Орехи',
    carbsPer100g: 8,
    gi: 'low',
  },

  {
    id: 'z18',
    name: 'Тофу (соевый сыр)',
    category: 'Мясо и рыба (0 ХЕ)',
    carbsPer100g: 2.0,
    gi: 'low',
  },

  {
    id: 'g25',
    name: 'Овсяная каша (на воде)',
    category: 'Гарниры',
    carbsPer100g: 11,
    gi: 'low',
  },

  {
    id: 's22',
    name: 'Сникерс (стандарт, 1 палочка = 50.5г)',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
    defaultAmount: 50.5,
  },
  {
    id: 's23',
    name: 'Сникерс Супер (2 палочки = 75г)',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
    defaultAmount: 75,
  },
  {
    id: 's24',
    name: 'Сникерс Трио (3 палочки = 112.5г)',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
    defaultAmount: 112.5,
  },
  {
    id: 's25',
    name: 'Баунти (стандарт, 2 палочки = 57г)',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
    defaultAmount: 57,
  },
  {
    id: 's26',
    name: 'Баунти Трио (3 палочки = 85.5г)',
    category: 'Сладости',
    carbsPer100g: 60,
    gi: 'high',
    defaultAmount: 85.5,
  },
  {
    id: 's27',
    name: 'Твикс (стандарт, 2 палочки = 50г)',
    category: 'Сладости',
    carbsPer100g: 65,
    gi: 'high',
    defaultAmount: 50,
  },
  {
    id: 's28',
    name: 'Твикс Экстра (Xtra, 2 палочки = 75г)',
    category: 'Сладости',
    carbsPer100g: 65,
    gi: 'high',
    defaultAmount: 75,
  },
  {
    id: 's29',
    name: 'Milky Way (стандарт, 1 палочка = 26г)',
    category: 'Сладости',
    carbsPer100g: 70,
    gi: 'high',
    defaultAmount: 26,
  },
  {
    id: 's30',
    name: 'Мармелад Roshen "Шалена Бджілка" (1 шт = ~7г)',
    category: 'Сладости',
    carbsPer100g: 80,
    gi: 'high',
    defaultAmount: 7,
  },
  {
    id: 's31',
    name: 'Шоколад Roshen Lacmi (молочный с начинкой)',
    category: 'Сладости',
    carbsPer100g: 58,
    gi: 'high',
    defaultAmount: 100,
  },
  {
    id: 'misc1',
    name: 'Кетчуп',
    category: 'Разное',
    carbsPer100g: 25,
    gi: 'medium',
    defaultAmount: 20,
  },
  {
    id: 'misc2',
    name: 'Майонез',
    category: 'Разное',
    carbsPer100g: 3,
    gi: 'low',
    defaultAmount: 20,
  },
  {
    id: 'misc3',
    name: 'Сметана 15-20%',
    category: 'Молочные продукты',
    carbsPer100g: 3.5,
    gi: 'low',
    defaultAmount: 30,
  },
  {
    id: 'misc4',
    name: 'Соевый соус',
    category: 'Разное',
    carbsPer100g: 8,
    unit: 'ml',
    gi: 'low',
    defaultAmount: 15,
  },
  {
    id: 'md1',
    name: 'Пельмени (1 шт = ~3.5г угл)',
    category: 'Основные блюда',
    carbsPer100g: 350,
    unit: 'pcs',
    gi: 'medium',
    defaultAmount: 15,
  },
  {
    id: 'md2',
    name: 'Вареники с картошкой (1 шт = ~6г угл)',
    category: 'Основные блюда',
    carbsPer100g: 600,
    unit: 'pcs',
    gi: 'high',
    defaultAmount: 8,
  },
  {
    id: 'md3',
    name: 'Вареники с капустой (1 шт = ~4г угл)',
    category: 'Основные блюда',
    carbsPer100g: 400,
    unit: 'pcs',
    gi: 'medium',
    defaultAmount: 8,
  },
  {
    id: 'md4',
    name: 'Вареники с мясом (1 шт = ~4г угл)',
    category: 'Основные блюда',
    carbsPer100g: 400,
    unit: 'pcs',
    gi: 'medium',
    defaultAmount: 8,
  },
  {
    id: 'f23',
    name: 'Ананас',
    category: 'Фрукты и ягоды',
    carbsPer100g: 13,
    gi: 'medium',
    defaultAmount: 150,
  },
  {
    id: 'f24',
    name: 'Грейпфрут',
    category: 'Фрукты и ягоды',
    carbsPer100g: 6,
    gi: 'low',
    defaultAmount: 200,
  },
  {
    id: 'f25',
    name: 'Лимон',
    category: 'Фрукты и ягоды',
    carbsPer100g: 9,
    gi: 'low',
    defaultAmount: 50,
  },
  {
    id: 'dr10',
    name: 'Чай черный (без сахара)',
    category: 'Напитки',
    carbsPer100g: 0,
    unit: 'ml',
    gi: 'low',
    defaultAmount: 200,
  },
  {
    id: 'dr11',
    name: 'Чай зеленый (без сахара)',
    category: 'Напитки',
    carbsPer100g: 0,
    unit: 'ml',
    gi: 'low',
    defaultAmount: 200,
  },
  {
    id: 'dr12',
    name: 'Чай травяной / фруктовый (без сахара)',
    category: 'Напитки',
    carbsPer100g: 0,
    unit: 'ml',
    gi: 'low',
    defaultAmount: 200,
  },
  {
    id: 'dr13',
    name: 'Кофе эспрессо / американо (без сахара)',
    category: 'Напитки',
    carbsPer100g: 0,
    unit: 'ml',
    gi: 'low',
    defaultAmount: 150,
  },
];
