// Translations for Russian and Uzbek
export type Language = 'ru' | 'uz';

export interface Translations {
  // Navbar
  nav: {
    home: string;
    services: string;
    portfolio: string;
    calculator: string;
    cabinet: string;
  };
  // HomePage Hero
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    calculateCost: string;
    viewProjects: string;
    projects: string;
    control: string;
    warranty: string;
  };
  // Floating Card
  floatingCard: {
    contract: string;
    protection: string;
  };
  // Brands
  brands: {
    title: string;
  };
  // Process
  process: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  // Services
  services: {
    title: string;
    subtitle: string;
    allServices: string;
    cosmetic: string;
    cosmeticDesc: string;
    capital: string;
    capitalDesc: string;
    designer: string;
    designerDesc: string;
    details: string;
  };
  // Before/After
  beforeAfter: {
    title: string;
    subtitle: string;
    before: string;
    after: string;
  };
  // Social
  social: {
    title: string;
    description: string;
  };
  // FAQ
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  // Final CTA
  cta: {
    title: string;
    description: string;
    schedule: string;
    call: string;
  };
  // Footer
  footer: {
    description: string;
    menu: string;
    projects: string;
    calculator: string;
    services: string;
    contact: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  // Services Page
  servicesPage: {
    title: string;
    subtitle: string;
    perSquareMeter: string;
    packages: string;
    packagesDesc: string;
    individualWorks: string;
    individualDesc: string;
    demolition: string;
    electrical: string;
    finishing: string;
    tiles: string;
    features: {
      cosmetic: string[];
      capital: string[];
      designer: string[];
    };
    works: {
      demolition: Array<{ name: string; price: string }>;
      electrical: Array<{ name: string; price: string }>;
      finishing: Array<{ name: string; price: string }>;
      tiles: Array<{ name: string; price: string }>;
    };
  };
  // Portfolio Page
  portfolioPage: {
    title: string;
    subtitle: string;
    all: string;
    apartments: string;
    houses: string;
    commercial: string;
    area: string;
    duration: string;
    budget: string;
    viewCase: string;
  };
  // Calculator Page
  calculatorPage: {
    title: string;
    subtitle: string;
    step: string;
    next: string;
    back: string;
    calculate: string;
    roomType: string;
    area: string;
    package: string;
    additional: string;
    result: string;
    totalCost: string;
    requestQuote: string;
    apartment: string;
    house: string;
    office: string;
    enterArea: string;
  };
  // Login Page
  loginPage: {
    title: string;
    description: string;
    phone: string;
    password: string;
    login: string;
    noAccount: string;
    register: string;
  };
  // Dashboard
  dashboard: {
    welcome: string;
    myProjects: string;
    documents: string;
    messages: string;
    settings: string;
    logout: string;
    activeProject: string;
    status: string;
    progress: string;
    budget: string;
    timeline: string;
    photos: string;
    contract: string;
    estimate: string;
    acts: string;
    warranty: string;
    noMessages: string;
    newMessage: string;
  };
  // Case Detail Page
  caseDetail: {
    backToPortfolio: string;
    client: string;
    location: string;
    area: string;
    duration: string;
    budget: string;
    scope: string;
    about: string;
    gallery: string;
    estimate: string;
    estimateDesc: string;
    materials: string;
    work: string;
    quantity: string;
    price: string;
    sum: string;
    total: string;
  };
  // Service Detail Page
  serviceDetail: {
    backToServices: string;
    from: string;
    perSquareMeter: string;
    requestQuote: string;
    included: string;
    process: string;
    duration: string;
    guarantee: string;
    whatIncluded: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      portfolio: 'Портфолио',
      calculator: 'Калькулятор',
      cabinet: 'Кабинет',
    },
    hero: {
      badge: 'Premium Renovation',
      title1: 'Ремонт как',
      title2: 'искусство',
      title3: ' жизни.',
      description: 'Создаем интерьеры для комфортной жизни. Без стресса, срывов сроков и скрытых доплат.',
      calculateCost: 'Рассчитать стоимость',
      viewProjects: 'Смотреть работы',
      projects: 'Проектов',
      control: 'Контроль',
      warranty: 'Гарантия',
    },
    floatingCard: {
      contract: 'Официальный договор',
      protection: 'Юридическая защита',
    },
    brands: {
      title: 'Нам доверяют и с нами работают',
    },
    process: {
      title: 'Как мы работаем',
      subtitle: 'Процесс',
      step1Title: 'Заявка',
      step1Desc: 'Вы оставляете заявку, мы перезваниваем и договариваемся о замере.',
      step2Title: 'Смета',
      step2Desc: 'Инженер делает замер, составляем точную смету и подписываем договор.',
      step3Title: 'Ремонт',
      step3Desc: 'Закупаем материалы, выполняем работы. Вы следите через камеры.',
      step4Title: 'Сдача',
      step4Desc: 'Финальный клининг, проверка технадзором и вручение ключей.',
    },
    services: {
      title: 'Пакетные решения',
      subtitle: 'Услуги',
      allServices: 'Все услуги',
      cosmetic: 'Косметический',
      cosmeticDesc: 'Быстрое обновление интерьера для новостроек с предчистовой отделкой.',
      capital: 'Капитальный',
      capitalDesc: 'Полный демонтаж, замена коммуникаций и выравнивание стен под ноль.',
      designer: 'Дизайнерский',
      designerDesc: 'Реализация сложных архитектурных решений по индивидуальному проекту.',
      details: 'Подробнее',
    },
    beforeAfter: {
      title: 'Результат',
      subtitle: 'До и После',
      before: 'До',
      after: 'После',
    },
    social: {
      title: 'Следите за нами',
      description: 'Ежедневные отчеты со строек в Instagram',
    },
    faq: {
      title: 'Вопросы и ответы',
      subtitle: 'FAQ',
      q1: 'Сколько длится ремонт?',
      a1: 'Косметический ремонт занимает от 1 до 2 месяцев. Капитальный — от 3 до 5 месяцев в зависимости от площади и сложности дизайн-проекта.',
      q2: 'Можно ли жить в квартире во время ремонта?',
      a2: 'При капитальном ремонте — нет. При косметическом (покомнатно) — возможно, но мы не рекомендуем из-за пыли и шума.',
      q3: 'Даете ли вы гарантию?',
      a3: 'Да, мы даем официальную гарантию 2 года на ��се виды работ и 1 год на инженерные системы по договору.',
      q4: 'Как происходит оплата?',
      a4: 'Оплата производится поэтапно. Мы делим смету на 3-4 части. Вы платите за следующий этап только после приемки предыдущего.',
    },
    cta: {
      title: 'Готовы начать?',
      description: 'Оставьте заявку на бесплатный замер. Инженер приедет, осмотрит объект и составит точную смету.',
      schedule: 'Записаться на замер',
      call: 'Позвонить',
    },
    footer: {
      description: 'Создаем пространства для жизни, используя современные технологии и честный подход к смете.',
      menu: 'Меню',
      projects: 'Проекты',
      calculator: 'Калькулятор',
      services: 'Услуги',
      contact: 'Связь',
      rights: '© 2026 RemontUz. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    servicesPage: {
      title: 'Наши услуги',
      subtitle: 'Честные цены',
      perSquareMeter: '$/м²',
      packages: 'Готовые пакеты',
      packagesDesc: 'Комплексные решения под ключ с фиксированной ценой за квадратный метр.',
      individualWorks: 'Отдельные работы',
      individualDesc: 'Нужна только часть работ? Выберите необходимые позиции из прайс-листа.',
      demolition: 'Демонтаж',
      electrical: 'Электрика',
      finishing: 'Отделка',
      tiles: 'Плитка',
      features: {
        cosmetic: [
          'Электрика (розетки/выключатели)',
          'Укладка ламината',
          'Покраска стен',
          'Натяжной потолок',
          'Установка сантехники',
        ],
        capital: [
          'Демонтаж и возведение стен',
          'Замена всей проводки',
          'Стяжка и штукатурка по маякам',
          'Плиточные работы',
          'Все из пакета Косметический',
        ],
        designer: [
          'Сложные потолки и свет',
          'Декоративная штукатурка',
          'Звукоизоляция',
          'Система Умный дом',
          'Авторский надзор архитектора',
        ],
      },
      works: {
        demolition: [
          { name: 'Снятие старых обоев', price: '15 000 сум/м²' },
          { name: 'Демонтаж плитки', price: '45 000 сум/м²' },
          { name: 'Снос кирпичных стен', price: '120 000 сум/м²' },
        ],
        electrical: [
          { name: 'Штробление стен', price: '25 000 сум/п.м' },
          { name: 'Укладка кабеля', price: '5 000 сум/п.м' },
          { name: 'Установка точки', price: '35 000 сум/шт' },
        ],
        finishing: [
          { name: 'Грунтовка стен', price: '5 000 сум/м²' },
          { name: 'Шпаклевка (2 слоя)', price: '45 000 сум/м²' },
          { name: 'Покраска стен', price: '35 000 сум/м²' },
        ],
        tiles: [
          { name: 'Укладка кафеля', price: '180 000 сум/м²' },
          { name: 'Затирка швов', price: '15 000 сум/м²' },
          { name: 'Запил под 45 градусов', price: '80 000 сум/п.м' },
        ],
      },
    },
    portfolioPage: {
      title: 'Наши работы',
      subtitle: 'Портфолио',
      all: 'Все',
      apartments: 'Квартиры',
      houses: 'Дома',
      commercial: 'Коммерция',
      area: 'Площадь',
      duration: 'Срок',
      budget: 'Бюджет',
      viewCase: 'Смотреть кейс',
    },
    calculatorPage: {
      title: 'Калькулятор стоимости',
      subtitle: 'Расчет',
      step: 'Шаг',
      next: 'Далее',
      back: 'Назад',
      calculate: 'Рассчитать',
      roomType: 'Тип помещения',
      area: 'Площадь',
      package: 'Пакет ремонта',
      additional: 'Дополнительно',
      result: 'Результат',
      totalCost: 'Итоговая стоимость',
      requestQuote: 'Получить точную смету',
      apartment: 'Квартира',
      house: 'Дом',
      office: 'Офис',
      enterArea: 'Введите площадь в м²',
    },
    loginPage: {
      title: 'Личный кабинет',
      description: 'Войдите чтобы отслеживать проект',
      phone: 'Номер телефона',
      password: 'Пароль',
      login: 'Войти',
      noAccount: 'Нет аккаунта?',
      register: 'Зарегистрироваться',
    },
    dashboard: {
      welcome: 'Добро пожаловать',
      myProjects: 'Мои проекты',
      documents: 'Документы',
      messages: 'Сообщения',
      settings: 'Настройки',
      logout: 'Выйти',
      activeProject: 'Активный проект',
      status: 'Статус',
      progress: 'Прогресс',
      budget: 'Бюджет',
      timeline: 'Сроки',
      photos: 'Фото с объекта',
      contract: 'Договор',
      estimate: 'Смета',
      acts: 'Акты выполненных работ',
      warranty: 'Гарантийный талон',
      noMessages: 'У вас нет новых сообщений',
      newMessage: 'Написать сообщение',
    },
    caseDetail: {
      backToPortfolio: 'Портфолио',
      client: 'Клиент',
      location: 'Локация',
      area: 'Площадь',
      duration: 'Срок',
      budget: 'Бюджет',
      scope: 'Объем',
      about: 'О проекте',
      gallery: 'Галерея',
      estimate: 'Смета проекта',
      estimateDesc: 'Детальная разбивка по категориям и стоимость работ.',
      materials: 'Материалы',
      work: 'Работа',
      quantity: 'Кол-во',
      price: 'Цена',
      sum: 'Сумма',
      total: 'Итого',
    },
    serviceDetail: {
      backToServices: 'Услуги',
      from: 'от',
      perSquareMeter: '$/м²',
      requestQuote: 'Заказать расчет',
      included: 'Что входит',
      process: 'Процесс работы',
      duration: 'Сроки выполнения',
      guarantee: 'Гарантия',
      whatIncluded: 'Что входит в стоимость',
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      services: 'Xizmatlar',
      portfolio: 'Portfolio',
      calculator: 'Kalkulyator',
      cabinet: 'Kabinet',
    },
    hero: {
      badge: 'Premium Ta\'mirlash',
      title1: 'Ta\'mir san\'ati',
      title2: 'kabi',
      title3: ' hayot.',
      description: 'Qulay hayot uchun interyer yaratamiz. Stress, muddat o\'tishi va yashirin to\'lovsiz.',
      calculateCost: 'Narxni hisoblash',
      viewProjects: 'Ishlarni ko\'rish',
      projects: 'Loyihalar',
      control: 'Nazorat',
      warranty: 'Kafolat',
    },
    floatingCard: {
      contract: 'Rasmiy shartnoma',
      protection: 'Yuridik himoya',
    },
    brands: {
      title: 'Bizga ishonishadi va biz bilan ishlashadi',
    },
    process: {
      title: 'Qanday ishlaymiz',
      subtitle: 'Jarayon',
      step1Title: 'Ariza',
      step1Desc: 'Siz ariza qoldirasiz, biz qo\'ng\'iroq qilamiz va o\'lchov haqida kelishamiz.',
      step2Title: 'Smeta',
      step2Desc: 'Muhandis o\'lchov qiladi, aniq smeta tuzamiz va shartnoma imzolaymiz.',
      step3Title: 'Ta\'mirlash',
      step3Desc: 'Materiallar sotib olamiz, ishlarni bajaramiz. Siz kameralar orqali kuzatasiz.',
      step4Title: 'Topshirish',
      step4Desc: 'Yakuniy tozalash, texnazorat tekshiruvi va kalitlarni topshirish.',
    },
    services: {
      title: 'Paket yechimlar',
      subtitle: 'Xizmatlar',
      allServices: 'Barcha xizmatlar',
      cosmetic: 'Kosmetik',
      cosmeticDesc: 'Oldindan tugallangan yangi binolar uchun intererni tez yangilash.',
      capital: 'Kapital',
      capitalDesc: 'To\'liq demontaj, kommunikatsiyalarni almashtirish va devorlarni tekislash.',
      designer: 'Dizaynerlik',
      designerDesc: 'Shaxsiy loyiha bo\'yicha murakkab arxitektura yechimlarini amalga oshirish.',
      details: 'Batafsil',
    },
    beforeAfter: {
      title: 'Natija',
      subtitle: 'Oldin va Keyin',
      before: 'Oldin',
      after: 'Keyin',
    },
    social: {
      title: 'Bizni kuzatib boring',
      description: 'Instagram\'da qurilish maydonidan kunlik hisobotlar',
    },
    faq: {
      title: 'Savollar va javoblar',
      subtitle: 'FAQ',
      q1: 'Ta\'mirlash qancha vaqt davom etadi?',
      a1: 'Kosmetik ta\'mirlash 1 dan 2 oygacha davom etadi. Kapital — 3 dan 5 oygacha, maydoni va dizayn loyihasining murakkabligiga qarab.',
      q2: 'Ta\'mirlash paytida kvartirada yashash mumkinmi?',
      a2: 'Kapital ta\'mirlashda — yo\'q. Kosmetikda (xonama-xona) — mumkin, lekin chang va shovqin tufayli tavsiya etmaymiz.',
      q3: 'Kafolat berasizmi?',
      a3: 'Ha, biz barcha ish turlariga 2 yil va muhandislik tizimlariga 1 yil rasmiy kafolat beramiz.',
      q4: 'To\'lov qanday amalga oshiriladi?',
      a4: 'To\'lov bosqichma-bosqich amalga oshiriladi. Smetani 3-4 qismga bo\'lamiz. Siz keyingi bosqich uchun faqat oldingi bosqich qabul qilingandan keyin to\'laysiz.',
    },
    cta: {
      title: 'Boshlashga tayyormisiz?',
      description: 'Bepul o\'lchov uchun ariza qoldiring. Muhandis keladi, ob\'ektni ko\'rib chiqadi va aniq smeta tuzadi.',
      schedule: 'O\'lchovga yozilish',
      call: 'Qo\'ng\'iroq qilish',
    },
    footer: {
      description: 'Zamonaviy texnologiyalar va smetaga halol yondashuv yordamida hayot uchun bo\'shliqlar yaratamiz.',
      menu: 'Menyu',
      projects: 'Loyihalar',
      calculator: 'Kalkulyator',
      services: 'Xizmatlar',
      contact: 'Aloqa',
      rights: '© 2026 RemontUz. Barcha huquqlar himoyalangan.',
      privacy: 'Maxfiylik siyosati',
      terms: 'Xizmat ko\'rsatish shartlari',
    },
    servicesPage: {
      title: 'Bizning xizmatlar',
      subtitle: 'Halol narxlar',
      perSquareMeter: '$/m²',
      packages: 'Tayyor paketlar',
      packagesDesc: 'Kvadrat metr uchun belgilangan narx bilan kalit ostida kompleks yechimlar.',
      individualWorks: 'Alohida ishlar',
      individualDesc: 'Faqat ishlarning bir qismiga muhtojmisiz? Narx ro\'yxatidan kerakli pozitsiyalarni tanlang.',
      demolition: 'Demontaj',
      electrical: 'Elektr',
      finishing: 'Pardozlash',
      tiles: 'Kafel',
      features: {
        cosmetic: [
          'Elektr (rozetkalar/kalitlar)',
          'Laminat yotqizish',
          'Devorlarni bo\'yash',
          'Cho\'zilgan shift',
          'Santeхnika o\'rnatish',
        ],
        capital: [
          'Devorlarni demontaj va qurish',
          'Barcha simlarni almashtirish',
          'Mayak bo\'yicha styajka va shtukaturka',
          'Kafel ishlari',
          'Kosmetik paketdan hamma narsa',
        ],
        designer: [
          'Murakkab shiftlar va yoritish',
          'Dekorativ shtukaturka',
          'Tovush izolyatsiyasi',
          'Aqlli uy tizimi',
          'Arxitektor mualliflik nazorati',
        ],
      },
      works: {
        demolition: [
          { name: 'Eski oboylarni olib tashlash', price: '15 000 so\'m/m²' },
          { name: 'Kafelni demontaj qilish', price: '45 000 so\'m/m²' },
          { name: 'G\'isht devorlarini buzish', price: '120 000 so\'m/m²' },
        ],
        electrical: [
          { name: 'Devorlarni shtroblovka', price: '25 000 so\'m/cho.m' },
          { name: 'Kabel yotqizish', price: '5 000 so\'m/cho.m' },
          { name: 'Nuqta o\'rnatish', price: '35 000 so\'m/dona' },
        ],
        finishing: [
          { name: 'Devorlarni gruntovka', price: '5 000 so\'m/m²' },
          { name: 'Shpaklevka (2 qavat)', price: '45 000 so\'m/m²' },
          { name: 'Devorlarni bo\'yash', price: '35 000 so\'m/m²' },
        ],
        tiles: [
          { name: 'Kafel yotqizish', price: '180 000 so\'m/m²' },
          { name: 'Choklar zatiratish', price: '15 000 so\'m/m²' },
          { name: '45 gradus ostida kesish', price: '80 000 so\'m/cho.m' },
        ],
      },
    },
    portfolioPage: {
      title: 'Bizning ishlar',
      subtitle: 'Portfolio',
      all: 'Hammasi',
      apartments: 'Kvartiralar',
      houses: 'Uylar',
      commercial: 'Tijorat',
      area: 'Maydon',
      duration: 'Muddat',
      budget: 'Byudjet',
      viewCase: 'Keysni ko\'rish',
    },
    calculatorPage: {
      title: 'Narx kalkulyatori',
      subtitle: 'Hisoblash',
      step: 'Qadam',
      next: 'Keyingi',
      back: 'Orqaga',
      calculate: 'Hisoblash',
      roomType: 'Xona turi',
      area: 'Maydon',
      package: 'Ta\'mirlash paketi',
      additional: 'Qo\'shimcha',
      result: 'Natija',
      totalCost: 'Yakuniy narx',
      requestQuote: 'Aniq smeta olish',
      apartment: 'Kvartira',
      house: 'Uy',
      office: 'Ofis',
      enterArea: 'Maydonni m²da kiriting',
    },
    loginPage: {
      title: 'Shaxsiy kabinet',
      description: 'Loyihani kuzatish uchun kiring',
      phone: 'Telefon raqami',
      password: 'Parol',
      login: 'Kirish',
      noAccount: 'Hisob yo\'qmi?',
      register: 'Ro\'yxatdan o\'tish',
    },
    dashboard: {
      welcome: 'Xush kelibsiz',
      myProjects: 'Mening loyihalarim',
      documents: 'Hujjatlar',
      messages: 'Xabarlar',
      settings: 'Sozlamalar',
      logout: 'Chiqish',
      activeProject: 'Faol loyiha',
      status: 'Holat',
      progress: 'Progress',
      budget: 'Byudjet',
      timeline: 'Muddatlar',
      photos: 'Ob\'ektdan fotosuratlar',
      contract: 'Shartnoma',
      estimate: 'Smeta',
      acts: 'Bajarilgan ishlar aktlari',
      warranty: 'Kafolat taloni',
      noMessages: 'Sizda yangi xabarlar yo\'q',
      newMessage: 'Xabar yozish',
    },
    caseDetail: {
      backToPortfolio: 'Portfolio',
      client: 'Mijoz',
      location: 'Joylashuv',
      area: 'Maydon',
      duration: 'Muddat',
      budget: 'Byudjet',
      scope: 'Hajm',
      about: 'Loyiha haqida',
      gallery: 'Galereya',
      estimate: 'Loyiha smetasi',
      estimateDesc: 'Toifalar va ishlar narxi bo\'yicha batafsil taqsimot.',
      materials: 'Materiallar',
      work: 'Ish',
      quantity: 'Miqdor',
      price: 'Narx',
      sum: 'Summa',
      total: 'Jami',
    },
    serviceDetail: {
      backToServices: 'Xizmatlar',
      from: 'dan',
      perSquareMeter: '$/m²',
      requestQuote: 'Hisoblash buyurtma qilish',
      included: 'Nima kiradi',
      process: 'Ish jarayoni',
      duration: 'Bajarish muddatlari',
      guarantee: 'Kafolat',
      whatIncluded: 'Narxga nima kiradi',
    },
  },
};
