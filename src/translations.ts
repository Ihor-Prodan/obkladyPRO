import type { Benefit, ContactInfo, Project, Service } from "./types";

import imgCorridorTravertine from "./assets/img/corridor-travertine.webp";
import imgBathroomMarbleFull from "./assets/img/bathroom-marble-full.webp";
import imgBathroomMinimalist from "./assets/img/bathroom-minimalist.webp";
import imgBathroomDoubleVanity from "./assets/img/bathroom-double-vanity.webp";
import imgTerraceSteps from "./assets/img/terrace-steps.webp";
import imgFloorHerringboneBrick from "./assets/img/floor-herringbone-brick.webp";
import imgHero from "./assets/img/hero_renovation_banner_1780595369341.webp";

import imgDrywall1 from "./assets/img/drywall-led-ceiling-moldings.webp";
import imgDrywall2 from "./assets/img/drywall-floating-ceiling-living.webp";
import imgDrywall3 from "./assets/img/drywall-partition-wardrobe-led.webp";
import imgPainting1 from "./assets/img/painting-decorative-plaster-bedroom.webp";
import imgPainting2 from "./assets/img/painting-corridor-white-walls.webp";
import imgPainting3 from "./assets/img/painting-room-white-walls.webp";
import imgPainting4 from "./assets/img/painting-living-room-kitchen.webp";

export const HERO_IMAGE = imgHero;

// Ukrainian full database structures
export const SERVICES_UK: Service[] = [
  {
    id: 'tiles',
    title: 'Укладання плитки',
    description: 'Високоякісне лицювання стін та підлоги будь-яким форматом плитки.',
    iconName: 'Grid',
    detailedWorks: [
      'Укладання великоформатного керамограніту',
      'Запил зовнішніх кутів під 45 градусів (заусовка)',
      'Облаштування душових піддонів з плитки в будівельному виконанні та з правильним ухилом',
      'Облицювання стін кухонних фартухів (мозаїка, кабанчик, ялинка)',
      'Монтаж прихованих ревізійних люків під плитку',
      'Затирання швів епоксидною або цементною сумішшю',
      'Монтаж сантехнічної посуди та змішувачів'
    ]
  },
  {
    id: 'drywall',
    title: 'Гіпсокартонні роботи',
    description: 'Монтаж металевих каркасів та обшивка гіпсокартонними листами для створення геометрії приміщення.',
    iconName: 'Layers',
    detailedWorks: [
      'Влаштування багаторівневих гіпсокартонних стель',
      'Монтаж стель з «парящим» ефектом та тіньовим профілем',
      'Зведення міжкімнатних перегородок з шумоізоляцією',
      'Виготовлення ніш під штори, декоративного підсвічування та ТБ-зон',
      'Мобільний монтаж коробових конструкцій для приховування труб і комунікацій',
      'Армування та закладення стиків стрічками Knauf Kurt або шпаклівками Uniflott'
    ]
  },
  {
    id: 'painting',
    title: 'Малярні та оздоблювальні роботи',
    description: 'Підготовка поверхонь до ідеального стану та нанесення фінішних декоративних матеріалів.',
    iconName: 'Paintbrush',
    detailedWorks: [
      'Штукатурення стін за маяками (під 90 градусів у ванних і кухнях)',
      'Шпаклювання стін та стель під шпалери або високоякісне фарбування',
      'Армування склополотном для запобігання появі мікротріщин',
      'Професійне безповітряне або ручне фарбування стін та стель',
      'Нанесення декоративних штукатурок (отточенто, марморіно, мікроцемент, арт-бетон)'
    ]
  },
  {
    id: 'flooring',
    title: 'Монтаж підлогових покриттів',
    description: 'Професійне влаштування фінішної підлоги для максимальної довговічності.',
    iconName: 'Hammer',
    detailedWorks: [
      'Укладання ламінату (палубний метод, по діагоналі)',
      'Монтаж вінілового покриття (швидкозатискний SPC або клейовий вініл)',
      'Укладання паркетної та інженерної дошки',
      'Монтаж МДФ, дюрополімерових, пластикових та тіньових плінтусів',
      'Попереднє вирівнювання основи (нівелірмаса, самовирівнююча стяжка)'
    ]
  },
  {
    id: 'complex',
    title: 'Ремонт «під ключ»',
    description: 'Координація та виконання повного циклу робіт в окремих приміщеннях або всій квартирі.',
    iconName: 'Wrench',
    detailedWorks: [
      'Ремонт ванних кімнат та санвузлів під ключ',
      'Повне перепланування та оздоблення кухонь',
      'Демонтажні роботи та вивезення будівельного сміття',
      'Попередній підрахунок необхідних чорнових матеріалів',
      'Допомога у виборі та закупівлі якісних оздоблювальних матеріалів і сантехніки'
    ]
  }
];

export const PROJECTS_UK: Project[] = [
  {
    id: "proj-1",
    title: "Хол з акцентною стіною з травертину та LED-підсвіткою",
    category: "tiles",
    categoryLabel: "Плитка та оздоблення",
    description: "Декоративна акцентна стіна зі справжнього травертину з прихованою LED-підсвіткою та мікроцементна підлога.",
    detailedDescription: "Комплексне оздоблення холу приватного будинку. Центральна акцентна стіна облицьована великоформатним травертином 60×120 см з ретельною затиркою відкритих пор та підсвічуванням прихованою LED-стрічкою у стелі. Підлога вкрита безшовним мікроцементним покриттям у єдиному колірному тоні з каменем, що візуально розширює простір. Стеля підготовлена до рівня Q3 та пофарбована безповітряним методом. Декоративні молдинги на стінах виконані з гіпсової ліпнини і підкреслюють стиль простору.",
    imageUrl: imgCorridorTravertine,
    areaSqM: 16,
    durationDays: 10,
    materialsUsed: [
      "Травертин 60×120 см",
      "Епоксидна фуга Mapei Kerapoxy",
      "LED-стрічка COB 24V",
      "Мікроцемент підлоговий з захисним лаком",
      "Ґрунт глибокого проникнення"
    ],
    stagesOfWork: [
      "Демонтаж старого облицювання та очищення основ",
      "Вирівнювання акцентної стіни штукатуркою по маяках",
      "Ґрунтування та нанесення клею для травертину",
      "Укладання травертину з затиркою відкритих пор та нанесенням фуги",
      "Нанесення мікроцементу на підлогу у 3 шари",
      "Монтаж прихованої LED-стрічки у стелі"
    ]
  },
  {
    id: "proj-2",
    title: "Ванна з повним мармуровим облицюванням душової зони",
    category: "tiles",
    categoryLabel: "Плитка та сантехніка",
    description: "Душова зона повністю облицьована великоформатним керамогранітом під мармур із прихованою LED-підсвіткою.",
    detailedDescription: "Проект передбачав повну реконструкцію санвузла. Стіни та підлога душової зони вкриті великоформатними плитами 90×180 см під крем-мармур із темними прожилками. Всі зовнішні кути виконано заусовкою під 45°. Скляна перегородка без рами встановлена з LED-підсвіткою по периметру. Ухил душового піддону виконано з точністю до 1 мм. Кожна плита підібрана вручну для збереження безперервного малюнку мармуру.",
    imageUrl: imgBathroomMarbleFull,
    areaSqM: 9,
    durationDays: 18,
    materialsUsed: [
      "Керамограніт 90×180 см (marble look)",
      "Клей C2TE S1 Mapei Keraflex Maxi",
      "2-компонентна обмазувальна гідроізоляція",
      "Скляна перегородка без рами 10 мм",
      "LED-стрічка по периметру",
      "Епоксидна затирка Mapei Kerapoxy Design"
    ],
    stagesOfWork: [
      "Демонтаж до бетонної основи, нова розводка",
      "Нанесення 2-шарової гідроізоляції по всій площі",
      "Формування ухилу підлоги (конверт) для трапу",
      "Укладання керамограніту з ручним підбором малюнку",
      "Заусовка зовнішніх кутів під 45°",
      "Затирка епоксидною сумішшю",
      "Монтаж скляної перегородки та LED-підсвічування"
    ]
  },
  {
    id: "proj-3",
    title: "Мінімалістична ванна з мікроцементом та мармуровою стільницею",
    category: "tiles",
    categoryLabel: "Плитка та сантехніка",
    description: "Санвузол у стилі мінімалізм: мікроцементні стіни та підлога, скляна душова та монолітна раковина з мармуру.",
    detailedDescription: "Концептуальний дизайн-проект ванної кімнати з використанням лише двох матеріалів — мікроцементу та мармуру. Стіни та підлога вкриті мікроцементом без жодного шва, що формує чистий та геометрично точний простір. Скляна перегородка душової зони встановлена безрамно на точкових кронштейнах з нержавіючої сталі. Стільниця умивальника — монолітний мармуровий слеб із вбудованими врівень раковинами. Підсвічування реалізовано LED-стрічкою під тумбою.",
    imageUrl: imgBathroomMinimalist,
    areaSqM: 7,
    durationDays: 14,
    materialsUsed: [
      "Мікроцемент стіновий та підлоговий",
      "Захисний поліуретановий лак 2К",
      "Скляна перегородка 10 мм (безрамна)",
      "Мармуровий слеб Calacatta 3 см",
      "Вбудовані раковини врівень зі стільницею",
      "LED-стрічка під тумбою"
    ],
    stagesOfWork: [
      "Вирівнювання стін під нуль та шпаклювання",
      "Нанесення мікроцементу у 3 шари на стіни та підлогу",
      "Шліфування та нанесення захисного поліуретанового лаку",
      "Установка тумби та монолітного мармурового слеба",
      "Монтаж безрамної скляної перегородки",
      "Підключення сантехніки та LED-підсвічування"
    ]
  },
  {
    id: "proj-4",
    title: "Майстер-ванна з подвійним умивальником та мармуром",
    category: "tiles",
    categoryLabel: "Плитка та сантехніка",
    description: "Великий санвузол із двома підвісними тумбами та авторськими стільницями, облицьований великоформатним мармуром.",
    detailedDescription: "Масштабний проект реконструкції майстер-ванної у приватному будинку. Стіни повністю облицьовані плитою 60×120 см під сірий мармур із горизонтальною розкладкою для відчуття ширини простору. Дві підвісні тумби з дерев’яними фасадами та підсвіткою встановлені між металевими колонами, що підкреслюють архітектурну концепцію. Підлога вкрита мікроцементом із прихованою підсвіткою під тумбами. Круглі дзеркала та настінні точкові змішувачі — фінальний акцент проекту.",
    imageUrl: imgBathroomDoubleVanity,
    areaSqM: 14,
    durationDays: 22,
    materialsUsed: [
      "Керамограніт 60×120 см (grey marble)",
      "Підвісні тумби з деревом та LED-підсвіткою",
      "Мікроцемент підлоговий з лаком",
      "Круглі дзеркала LED",
      "Настінні змішувачі з прихованою підводкою"
    ],
    stagesOfWork: [
      "Демонтаж, нові водорозводи та електрика",
      "Укладання великоформатного керамограніту на стіни",
      "Встановлення підвісних тумб та металевих колон",
      "Нанесення мікроцементу на підлогу",
      "Монтаж дзеркал та LED-підсвічування",
      "Підключення настінних змішувачів"
    ]
  },
  {
    id: "proj-5",
    title: "Зовнішня тераса з великоформатним керамогранітом та сходами",
    category: "tiles",
    categoryLabel: "Вуличні роботи",
    description: "Мощення відкритої тераси приватного будинку морозостійким керамогранітом із влаштуванням сходів.",
    detailedDescription: "Роботи з мощення відкритої тераси площею 50 м² та прилеглих сходів у приватному будинку. Використано великоформатний вуличний керамограніт 90×90 см підвищеної морозостійкості R11 із антислизькою текстурою. Ухил тераси витримано 1–2% для відводу дощових вод від будинку. Сходи виконано з аналогічного матеріалу із заусовкою носків ступенів під 45° для безпеки та естетики. Клей та затирка — спеціальні серії для вуличних робіт.",
    imageUrl: imgTerraceSteps,
    areaSqM: 50,
    durationDays: 12,
    materialsUsed: [
      "Морозостійкий керамограніт 90×90 см R11",
      "Вуличний клей Mapei Granifix",
      "Вулична затирка Mapei Ultracolor Plus",
      "Алюмінієвий профіль носка сходинки",
      "Дюбелі-анкери для бордюрів"
    ],
    stagesOfWork: [
      "Підготовка та вирівнювання бетонної основи",
      "Розмітка ухилу та напрямних ліній укладання",
      "Укладання великоформатного керамограніту на терасі",
      "Зведення та мощення ступенів сходів",
      "Заусовка носків ступенів під 45°",
      "Затирка вуличних швів морозостійкою сумішшю"
    ]
  },
  {
    id: "proj-6",
    title: "Підлога «ялинкою» з деревовидної плитки та цегляна акцентна стіна",
    category: "tiles",
    categoryLabel: "Плитка та оздоблення",
    description: "Укладання деревовидної плитки у «ялинку» та облицювання акцентної стіни декоративною цеглою у ретро-стилі.",
    detailedDescription: "Комплексна робота в кімнаті з двома домінуючими матеріалами. Підлога вкрита деревовидним керамогранітом формату 20×120 см укладеним у французьку ялинку (herringbone) із суворим витримуванням кута та рівності рядів. Акцентна стіна облицьована декоративною керамічною цеглою під старовинну кладку — ручний підбір відтінків та хаотичний малюнок для автентичності. Кожна цеглина підрізалась індивідуально на кутах і поблизу вікна. Загальна площа — 22 м².",
    imageUrl: imgFloorHerringboneBrick,
    areaSqM: 22,
    durationDays: 9,
    materialsUsed: [
      "Деревовидний керамограніт 20×120 см",
      "Декоративна цегла під старовину",
      "Білий клей Mapei Keraflex Maxi",
      "Затирка Mapei Ultracolor (пісочний тон)",
      "Хрестики 2 мм та лазерний рівень"
    ],
    stagesOfWork: [
      "Вирівнювання підлоги самонівелюючою стяжкою",
      "Розмітка осьової лінії для укладання ялинкою",
      "Покрокове укладання підлоги з точним підрізанням",
      "Підготовка та ґрунтування акцентної стіни",
      "Укладання декоративної цегли з підбором відтінків",
      "Затирка та чищення всіх поверхонь"
    ]
  },
  {
    id: "proj-dw-1",
    title: "Гіпсокартонна стеля з LED-підсвіткою та декоративними молдингами",
    category: "drywall",
    categoryLabel: "Гіпсокартонні роботи",
    description: "Двоярусна стеля з прихованою LED-стрічкою та гіпсовими молдингами для медичного кабінету.",
    detailedDescription: "Проєкт монтажу підвісної гіпсокартонної стелі в кабінеті стоматологічної клініки. Каркас виконано з оцинкованого профілю Knauf з двошаровою обшивкою ГКЛ для жорсткості. У периметрі стелі змонтовано тіньовий профіль із прихованою LED-стрічкою COB для рівномірного м'якого підсвічування. На стінах встановлено декоративні поліуретанові молдинги з нанесенням ідеального стику, пофарбовані разом зі стінами. Стеля доведена до рівня Q3 та пофарбована безповітряним методом у два шари.",
    imageUrl: imgDrywall1,
    areaSqM: 18,
    durationDays: 8,
    materialsUsed: [
      "Профіль Knauf CD/UD оцинкований",
      "ГКЛ Knauf 12.5 мм (2 шари)",
      "LED-стрічка COB 24V, 10 Вт/м",
      "Тіньовий профіль 10 мм",
      "Поліуретанові молдинги 8 см",
      "Шпаклівка Uniflott + склополотно"
    ],
    stagesOfWork: [
      "Розмітка рівня стелі лазерним нівеліром",
      "Монтаж каркасу з двошаровою обшивкою ГКЛ",
      "Установка тіньового профілю по периметру",
      "Армування стиків, шпаклювання та шліфування до Q3",
      "Монтаж та підключення LED-стрічки",
      "Встановлення молдингів та фінішне фарбування"
    ]
  },
  {
    id: "proj-dw-2",
    title: "Стеля з «парящим» ефектом та тіньовим профілем у вітальні",
    category: "drywall",
    categoryLabel: "Гіпсокартонні роботи",
    description: "Великогабаритна підвісна стеля з ефектом левітації та прихованою системою освітлення в сучасному будинку.",
    detailedDescription: "Монтаж підвісної стелі у відкритій вітальні площею 42 м² приватного будинку. Основна площина стелі опущена на 15 см відносно перекриття. По всьому периметру та уздовж несучих балок влаштований тіньовий профіль завглибшки 10 мм, що візуально відриває стелю від стін та формує 'парящий' ефект. У розрізах передбачена підготовка під вбудовані даунлайти. Вся площина ретельно вишпакльована до Q3 та пофарбована безповітряним методом. Загальна геометрія витримана по лазеру.",
    imageUrl: imgDrywall2,
    areaSqM: 42,
    durationDays: 10,
    materialsUsed: [
      "Профіль Knauf CD/UD 60/27",
      "ГКЛ Knauf 12.5 мм",
      "Тіньовий профіль 10 мм по периметру",
      "Шпаклівка Knauf Finish + скловолокниста сітка",
      "Підвіси прямі та UD-анкери",
      "Шпаклівка Uniflott для стиків"
    ],
    stagesOfWork: [
      "Розмітка рівня та точок кріплення по лазеру",
      "Монтаж каркасу підвісної стелі",
      "Обшивка ГКЛ з точним стикуванням листів",
      "Встановлення тіньового профілю по всьому периметру",
      "Армування стиків, шпаклювання та шліфування",
      "Фарбування безповітряним методом у два шари"
    ]
  },
  {
    id: "proj-dw-3",
    title: "Гардеробна зона та перегородки з прихованими нішами",
    category: "drywall",
    categoryLabel: "Гіпсокартонні роботи",
    description: "Монтаж гіпсокартонних перегородок із нішами для гардеробу та розподілу зон ванної і спальні.",
    detailedDescription: "Комплексне зведення перегородок із гіпсокартону у мансардній квартирі. Виконано перегородку між гардеробною зоною та ванною кімнатою з точним дотриманням прямого кута. У гардеробній монтовано вбудовані ніші з LED-підсвіткою знизу на рівні підлоги для атмосферного ефекту. Прохідний отвір між зонами оформлено прихованою дверною коробкою 'без лиштви'. Всі поверхні доведено до рівня Q2, що є стандартом під натяжну стелю або фарбування без особливих вимог.",
    imageUrl: imgDrywall3,
    areaSqM: 25,
    durationDays: 12,
    materialsUsed: [
      "Профіль CW/UW Knauf 75 мм",
      "ГКЛ Knauf двошаровий",
      "Мінеральна вата Isover (шумоізоляція)",
      "Прихована дверна коробка без лиштви",
      "LED-стрічка COB у ніші підлоги",
      "Шпаклівка Uniflott + стрічка Knauf Kurt"
    ],
    stagesOfWork: [
      "Розмітка осей перегородок по лазеру та кресленню",
      "Монтаж каркасу UW/CW з укосами та дверним прорізом",
      "Укладання мінеральної вати між стійками",
      "Двошарова обшивка ГКЛ з розбіжністю стиків",
      "Армування та шпаклювання всіх стиків і кутів",
      "Монтаж LED-ніші та прихованої дверної коробки"
    ]
  },
  {
    id: "proj-paint-1",
    title: "Спальня з декоративною штукатуркою та тектурованою стіною",
    category: "painting",
    categoryLabel: "Малярні роботи",
    description: "Спальня з акцентною стіною у техніці декоративної штукатурки та ідеально рівними стінами під фарбування.",
    detailedDescription: "Комплексна оздоблювальна робота в спальні приватного будинку. Три стіни підготовлено під фарбування: армування склополотном, шпаклювання у 2 шари, шліфування та нанесення фарби безповітряним методом до рівня Q3. Акцентна стіна за головою ліжка виконана у техніці декоративної штукатурки з ефектом виразної текстури — ручне накладання шпателем із збереженням рельєфного малюнку. Стеля вкрита бетонним покриттям-фарбою для надання фактури архітектурного бетону.",
    imageUrl: imgPainting1,
    areaSqM: 20,
    durationDays: 7,
    materialsUsed: [
      "Ґрунтівка глибокого проникнення",
      "Шпаклівка Knauf Finish (2 шари)",
      "Склополотно для армування",
      "Декоративна штукатурка ручного накладання",
      "Латексна фарба для стін (без розчинників)",
      "Фарба-імітація арт-бетону для стелі"
    ],
    stagesOfWork: [
      "Ґрунтування та армування стін склополотном",
      "Шпаклювання у 2 шари з міжшаровим шліфуванням",
      "Нанесення фінішного шару та доведення до Q3",
      "Фарбування безповітряним методом у 2 шари",
      "Ручне нанесення декоративної штукатурки на акцент-стіну",
      "Нанесення арт-бетонного покриття на стелю"
    ]
  },
  {
    id: "proj-paint-2",
    title: "Коридор з ідеально рівними стінами під фарбування",
    category: "painting",
    categoryLabel: "Малярні роботи",
    description: "Довгий коридор зі стінами, доведеними до рівня Q3 та пофарбованими у два кольори з чіткою лінією переходу.",
    detailedDescription: "Оздоблення коридору в сучасній квартирі. Всі стіни доведено до рівня Q3: штукатурення по маяках, армування склополотном, двошарове шпаклювання та шліфування до дзеркальної рівності. Нижня третина стін (до рівня 90 см) та плінтусна зона пофарбована у темно-графітовий тон — чітка геометрична лінія переходу між кольорами нанесена малярним скотчем із лазерним рівнем. Верхня частина стін та стеля — матова білосніжна фарба. Монтаж тіньових плінтусів 7 см завершив простір.",
    imageUrl: imgPainting2,
    areaSqM: 12,
    durationDays: 5,
    materialsUsed: [
      "Штукатурка Baumit StartContact (по маяках)",
      "Склополотно та клей ПВА-модифікований",
      "Шпаклівка Knauf Finish",
      "Матова латексна фарба (2 кольори)",
      "Тіньовий плінтус МДФ 70 мм",
      "Малярський скотч Tesa + лазерний рівень"
    ],
    stagesOfWork: [
      "Штукатурення стін по маяках до прямого кута",
      "Армування стін склополотном по всій площі",
      "Двошарове шпаклювання та шліфування до Q3",
      "Розмітка лінії переходу кольорів лазером",
      "Фарбування нижньої зони у темний колір",
      "Фарбування верхньої зони та монтаж плінтусів"
    ]
  },
  {
    id: "proj-paint-3",
    title: "Фарбування кімнати безповітряним методом після шпаклювання",
    category: "painting",
    categoryLabel: "Малярні роботи",
    description: "Свіжо пофарбована кімната після повного циклу підготовки: вирівнювання, армування та шпаклювання стін.",
    detailedDescription: "Повний цикл малярних робіт у кімнаті в новобудові. Стіни спочатку вирівняно штукатуркою Baumit по маяках (відхилення не більше 2 мм на 2 м рейці). Після висихання нанесено ґрунтівку та армування склополотном для запобігання мікротріщинам. Шпаклювання у два шари фінішною шпаклівкою з міжшаровим сухим шліфуванням. Фінішне фарбування виконано безповітряним агрегатом Wagner у два шари — результат ідеально рівна матова поверхня без видимих мазків.",
    imageUrl: imgPainting3,
    areaSqM: 15,
    durationDays: 4,
    materialsUsed: [
      "Штукатурка Baumit MPI 25 по маяках",
      "Ґрунтівка Caparol Tiefengrund",
      "Склополотно 50 г/м²",
      "Шпаклівка Knauf Finish (2 шари)",
      "Матова фарба Caparol Indeko-plus",
      "Безповітряний агрегат Wagner"
    ],
    stagesOfWork: [
      "Штукатурення стін по маяках (відхилення ≤2 мм)",
      "Ґрунтування та наклеювання склополотна",
      "Перший шар шпаклівки + сухе шліфування",
      "Другий фінішний шар шпаклівки + шліфування",
      "Фарбування безповітряним методом у 2 шари",
      "Монтаж плінтусів та чищення об'єкту"
    ]
  },
  {
    id: "proj-paint-4",
    title: "Вітальня з кухнею після повного малярного оздоблення",
    category: "painting",
    categoryLabel: "Малярні роботи",
    description: "Вітальня з кухонною зоною — шпаклювання стель і стін, фарбування та підготовка під фінішне оздоблення.",
    detailedDescription: "Комплексне малярне оздоблення об'єднаної вітально-кухонної зони після ремонту. Стеля вирівняна гіпсовою штукатуркою та зашпаклійована у два шари до рівня Q3 — підготовка під безповітряне фарбування. Стіни оздоблені аналогічно з армуванням стиків та ретельним шліфуванням. Особливість проєкту — збереження кутів 90° між стелею та стінами при нестандартній геометрії кімнати завдяки ретельному штукатуренню по маяках. Підлога з паркетної дошки ялинкою була захищена від забруднень під час роботи.",
    imageUrl: imgPainting4,
    areaSqM: 35,
    durationDays: 9,
    materialsUsed: [
      "Гіпсова штукатурка Rotband (стіни та стеля)",
      "Ґрунтівка Knauf Tiefgrund",
      "Шпаклівка Knauf Finish (2 шари)",
      "Армувальна стрічка Knauf Kurt на стики",
      "Матова інтер'єрна фарба (преміум клас)",
      "Захисна плівка для підлоги під час робіт"
    ],
    stagesOfWork: [
      "Штукатурення стін та стелі по маяках",
      "Армування всіх стиків та кутів",
      "Двошарове шпаклювання з шліфуванням між шарами",
      "Ґрунтування перед фарбуванням",
      "Фарбування безповітряним методом у 2 шари",
      "Фінішне чищення та здача об'єкту"
    ]
  }
];

export const BENEFITS_UK: Benefit[] = [
  {
    id: 'ben-1',
    title: 'Професійний інструмент',
    description: 'Використовую сучасний професійний інструмент (лазерні 3D рівні, плиткорізи-водяники, безповітряні фарбувальні станції, пилососи з класом очистки М), що гарантує якісний результат без пилу.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'ben-2',
    title: 'Точне дотримання технологій',
    description: 'Ніколи не пропускаю обов’язкові технологічні етапи: ґрунтування кожної стіни, гідроізоляція та силікон у ванній, армування стиків гіпсокартону склополотном для запобігання тріщинам.',
    iconName: 'TrendingUp'
  },
  {
    id: 'ben-3',
    title: 'Досвід понад 9 років',
    description: 'Спеціалізуюсь на внутрішніх роботах з 2017 року. Маю десятки успішно зданих квартир, санвузлів під ключ та дизайнерських стель. Знаю всі особливості поведінки сучасних матеріалів.',
    iconName: 'Award'
  },
  {
    id: 'ben-4',
    title: 'Прозорий кошторис та звітність',
    description: 'Точна кількість матеріалів прораховується завчасно. Надаю консультацію на етапі закупівлі чорнової та чистової сировини. Робота здається точно в обговорені терміни.',
    iconName: 'CheckSquare'
  },
  {
    id: 'ben-5',
    title: 'Чистота після роботи',
    description: 'Робота виконується охайно. Всі процеси шліфування проходять з підключеним будівельним пилососом. Після закінчення робіт об’єкт здається у повній чистоті.',
    iconName: 'Sparkles'
  }
];

export const CONTACT_INFO_UK: ContactInfo = {
  phone: '+380671234567',
  phoneDisplay: '+380 67 123 45 67',
  viberLink: 'viber://chat?number=%2B380671234567',
  telegramLink: 'https://t.me/oleg_remont_pro',
  instagramDisplay: '@oleg.remont.pro_ua',
  instagramLink: 'https://instagram.com/',
  email: 'prodanigor0@gmail.com',
  workingHours: 'Пн - Сб: 08:30 - 19:30 (Неділя — вихідний)',
  coverageArea: 'Братислава, Пезінок, Сенець та навколишні райони'
};

// Slovak (sk) full database structures
export const SERVICES_SK: Service[] = [
  {
    id: 'tiles',
    title: 'Pokládka obkladov a dlažieb',
    description: 'Vysokokvalitné obkladanie stien a pokládka dlažby akéhokoľvek formátu.',
    iconName: 'Grid',
    detailedWorks: [
      'Pokládka veľkoformátového gresu',
      'Zrezávanie vonkajších rohov pod 45 stupňov (kamenársky spoj - jolly hrany)',
      'Realizácia sprchových kútov z dlažby v stavebnom vyhotovení so správnym spádom',
      'Obkladanie kuchynských zásten (mozaika, metro obklady, rybia kosť)',
      'Montáž neviditeľných revíznych dvierok pod obklad',
      'Špárovanie epoxidovou alebo cementovou zmesou',
      'Montáž sanity, závesných modulov a vodovodných batérií'
    ]
  },
  {
    id: 'drywall',
    title: 'Sadrokartonárske práce',
    description: 'Montáž kovových konštrukcií a sadrokartónových dosiek pre vytvorenie presnej geometrie priestoru.',
    iconName: 'Layers',
    detailedWorks: [
      'Realizácia viacúrovňových sadrokartónových stropov',
      'Montáž stropov s "plávajúcim" efektom a tieňovým profilom',
      'Stavba sadrokartónových akustických priečok s hlukovou izoláciou',
      'Zhotovenie výklenkov pre závesy, ozdobného LED osvetlenia a TV stien',
      'Montáž sadrokartónových boxov pre skrytie potrubí a stúpačiek',
      'Bandážovanie a tmelenie spojov páskami Knauf Kurt alebo tmelom Uniflott'
    ]
  },
  {
    id: 'painting',
    title: 'Maliarske a ozdobné stierky',
    description: 'Príprava povrchov do perfektného stavu a umelecká aplikácia finálnych ozdobných omietok.',
    iconName: 'Paintbrush',
    detailedWorks: [
      'Omietanie stien podľa omietnikov (do pravého uhla 90° v kúpeľniach a kuchyniach)',
      'Stierkovanie stien a stropov pod tapety alebo prémiové bezchybné maľovanie',
      'Spevnenie sklotextilnou mriežkou alebo rúnom (flísom) proti vlasovým trhlinám',
      'Profesionálne bezvzduchové (airless) alebo ručné maľovanie stien a stropov',
      'Nanášanie dekoratívnych omietok (ottocento, marmorino, mikrocement, pohľadový betón)'
    ]
  },
  {
    id: 'flooring',
    title: 'Pokládka podlahových krytín',
    description: 'Profesionálna montáž finálnych podláh pre maximálnu životnosť interiéru.',
    iconName: 'Hammer',
    detailedWorks: [
      'Pokládka laminátových podláh (klasický vzor, diagonálne)',
      'Pokládka vinylových podláh (SPC click, kompozitný vinyl alebo lepené podlahy)',
      'Pokládka parketových a inžinierskych drevených dosiek',
      'Montáž MDF, duropolymerových, plastových a hliníkových líšt',
      'Dokonalé vyrovnanie podkladu samonivelačnou stierkou'
    ]
  },
  {
    id: 'complex',
    title: 'Rekonštrukcie na kľúč',
    description: 'Koordinácia a realizácia kompletného cyklu prác v jednotlivých izbách alebo celom byte.',
    iconName: 'Wrench',
    detailedWorks: [
      'Kompletná rekonštrukcia kúpeľní a toaliet na kľúč',
      'Kompletná prestavba a renovácia kuchýň vrátane inštalácií',
      'Demolačné práce, búranie kachličiek a odvoz stavebného odpadu',
      'Orientačný podrobný výpočet spotreby stavebných materiálov vopred',
      'Pomoc pri výbere a nákupe kvalitných obkladov, sanity, ventilov a stavebnej chémie'
    ]
  }
];

export const PROJECTS_SK: Project[] = [
  {
    id: "proj-1",
    title: "Chodba s travertínovou akcentovou stenou a LED podsvietením",
    category: "tiles",
    categoryLabel: "Obklady a povrchy",
    description: "Dekoratívna akcentová stena z prírodného travertínu s LED podsvietením a mikrocementová podlaha.",
    detailedDescription: "Komplexná úprava chodby v rodinnom dome. Stredová akcentová stena je obložená veľkoformátovým travertínom 60×120 cm s dôkladnou výplňou otvorených pórov a podsvietením skrytým LED pásom v strope. Podlaha je pokrytá bezšvovým mikrocementovým povrchom v jednom farebnom tóne s kameňom, čo opticky zväčšuje priestor. Strop bol pripravený na štandard Q3 a natieraný bezvzduchovou metódou. Dekoratívne sadrové lišty na stenách zdôrazňujú štýl priestoru.",
    imageUrl: imgCorridorTravertine,
    areaSqM: 16,
    durationDays: 10,
    materialsUsed: [
      "Travertín 60×120 cm",
      "Epoxidová špárovacia hmota Mapei Kerapoxy",
      "LED pás COB 24V",
      "Mikrocementová podlaha s ochranným lakom",
      "Hĺbkový penetračný základ"
    ],
    stagesOfWork: [
      "Demolácia starého obkladu a čistenie podkladov",
      "Vyrovnanie akcentovej steny omietkou podľa omietnikov",
      "Penetrácia a nanesenie lepidla pre travertín",
      "Pokládka travertínu s výplňou otvorených pórov a epoxidovou škárou",
      "Nanesenie mikrocementu na podlahu v 3 vrstvách",
      "Montáž skrytého LED pásu v strope"
    ]
  },
  {
    id: "proj-2",
    title: "Kúpeľňa s kompletným mramorovým obkladom sprchovej zóny",
    category: "tiles",
    categoryLabel: "Obklady a sanita",
    description: "Sprchová zóna kompletne obložená veľkoformátovým gresom imitujúcim mramor so skrytým LED podsvietením.",
    detailedDescription: "Projekt zahŕňal kompletnú rekonštrukciu kúpeľne. Steny a podlaha sprchovej zóny sú pokryté veľkoformátovými doskami 90×180 cm imitáciou krémového mramoru s tmavými žilkami. Všetky vonkajšie rohy sú realizované kamenárskym rezom pod 45° (jolly hrany). Bezrámová sklená zástena je inštalovaná s LED podsvietením po obvode. Spád sprchovej podlahy je vyhotovený s presnosťou na 1 mm. Každá platňa bola kladená ručne pre zachovanie nepretržitého vzoru mramoru.",
    imageUrl: imgBathroomMarbleFull,
    areaSqM: 9,
    durationDays: 18,
    materialsUsed: [
      "Veľkoformátový gres 90×180 cm (marble look)",
      "Lepidlo C2TE S1 Mapei Keraflex Maxi",
      "Dvojzložková hydroizolačná stierka",
      "Bezrámová sklená zástena 10 mm",
      "LED pás po obvode",
      "Epoxidová špárovacia hmota Mapei Kerapoxy Design"
    ],
    stagesOfWork: [
      "Demolácia do betónového podkladu, nové rozvody",
      "Nanesenie 2-vrstvovej hydroizolácie po celej ploche",
      "Tvorba spádu podlahy (konverkt) pre sprchový žľab",
      "Pokládka gresu s ručným výberom vzoru platní",
      "Kamenárske rohy pod 45°",
      "Špárovanie epoxidovou zmesou",
      "Montáž sklenej zásteny a LED podsvietenia"
    ]
  },
  {
    id: "proj-3",
    title: "Minimalistická kúpeľňa s mikrocementom a mramorovým umývadlom",
    category: "tiles",
    categoryLabel: "Obklady a sanita",
    description: "Kúpeľňa v minimalistickom štýle: mikrocementové steny a podlaha, sklená zástena a monolitické umývadlo z mramoru.",
    detailedDescription: "Konceptuálny dizajn-projekt kúpeľne s použitím iba dvoch materiálov — mikrocementu a mramoru. Steny a podlaha sú pokryté mikrocementom bez akejkoľvek škáry, čo vytvára čistý a geometricky presný priestor. Bezrámová sklená priečka sprchového kúta je upevnená bodovými nerezovými konzolami. Pult umývadla je monolitická mramorová doska so zapustenými umývadlami. Osvetlenie je realizované iba LED pásom pod skrinkou.",
    imageUrl: imgBathroomMinimalist,
    areaSqM: 7,
    durationDays: 14,
    materialsUsed: [
      "Mikrocementová stierka na steny a podlahy",
      "Dvojzložkový polyuretánový ochranný lak",
      "Sklená zástena 10 mm (bezrámová)",
      "Mramorový slab Calacatta hr. 3 cm",
      "Zabudované umývadlá v rovine s pultom",
      "LED pás pod skrinkou"
    ],
    stagesOfWork: [
      "Vyrovnanie stien do nuly a stierkovanie",
      "Nanesenie mikrocementu v 3 vrstvách na steny a podlahu",
      "Brúsenie a nanesenie ochranného polyuretánového laku",
      "Inštalácia skrinky a monolitickej mramorovej dosky",
      "Montáž bezrámovej sklenej zásteny",
      "Zapojenie sanity a LED podsvietenia"
    ]
  },
  {
    id: "proj-4",
    title: "Master kúpeľňa s dvojumývadlovým pultom a mramorovým obkladom",
    category: "tiles",
    categoryLabel: "Obklady a sanita",
    description: "Priestranná kúpeľňa s dvoma závesnými skrinkami a autorskými pultami, obložená veľkoformátovým mramorovým gresom.",
    detailedDescription: "Rozsiahly projekt rekonštrukcie master kúpeľne v rodinnom dome. Steny sú kompletne obložené gresom 60×120 cm imitáciou sivého mramoru v horizontálnom kladení pre pocit šírky priestoru. Dve závesné skrinky s drevenými frontmi a podsvietením sú inštalované medzi kovovými stĺpmi, zdôrazňujúcimi architektonickú koncepciu. Podlaha je pokrytá mikrocementom so skrytým podsvietením pod skrinkami. Okrúhle zrkadlá a nástenné batérie sú finálnym akcentom projektu.",
    imageUrl: imgBathroomDoubleVanity,
    areaSqM: 14,
    durationDays: 22,
    materialsUsed: [
      "Veľkoformátový gres 60×120 cm (sivý mramor)",
      "Závesné kúpeľňové skrinky s drevenými frontmi",
      "Mikrocementová podlaha s lakom",
      "Okrúhle LED zrkadlá",
      "Nástenné batérie s podomietkovou inštaláciou"
    ],
    stagesOfWork: [
      "Demolácia, nová elektroinštalácia a rozvody vody",
      "Pokládka veľkoformátového gresu na steny",
      "Osadenie závesných skriniek a kovových stĺpov",
      "Nanesenie mikrocementu na podlahu",
      "Montáž zrkadiel a LED podsvietenia",
      "Zapojenie podomietkových batérií"
    ]
  },
  {
    id: "proj-5",
    title: "Vonkajšia terasa s veľkoformátovým mrazuvzdorným gresom a schodmi",
    category: "tiles",
    categoryLabel: "Vonkajšie práce",
    description: "Dlažba otvorenej terasy rodinného domu veľkoformátovým mrazuvzdorným gresom vrátane realizácie schodov.",
    detailedDescription: "Dlažobné práce na otvorenej terase s rozlohou 50 m² a priľahlých schodoch rodinného domu. Použitý bol veľkoformátový vonkajší gres 90×90 cm so zvýšenou mrazuvzdornosťou R11 a protišmykovou textúrou. Sklon terasy je dodržaný na 1–2 % pre odtok dažďovej vody od domu. Schody sú vyhotovené z rovnakého materiálu s kamenárskym rezom nosákov schodníc pod 45° pre bezpečnosť a estetiku. Lepidlo aj špárovacia hmota sú špeciálnych vonkajších sérií s vysokou mrazuvzdornosťou.",
    imageUrl: imgTerraceSteps,
    areaSqM: 50,
    durationDays: 12,
    materialsUsed: [
      "Mrazuvzdorný porcelánový gres 90×90 cm R11",
      "Vonkajšie lepidlo Mapei Granifix",
      "Vonkajšia špárovacia hmota Mapei Ultracolor Plus",
      "Hliníkový schodnicový profil",
      "Kotvy pre uchytenie obrubníkov"
    ],
    stagesOfWork: [
      "Príprava a vyrovnanie betónového podkladu terasy",
      "Vymeranie sklonu a smerov pokládky",
      "Pokládka veľkoformátového gresu na terase",
      "Realizácia a dlažba schodníc",
      "Kamenárske rohy nosákov schodníc pod 45°",
      "Špárovanie vonkajšou mrazuvzdornou zmesou"
    ]
  },
  {
    id: "proj-6",
    title: "Podlaha v rybej kosti z drevodekorovej dlažby a tehlová akcentová stena",
    category: "tiles",
    categoryLabel: "Obklady a povrchy",
    description: "Pokládka drevodekorovej dlažby vo vzore rybej kosti a obklad akcentovej steny dekoratívnou tehlou v retro štýle.",
    detailedDescription: "Komplexná práca na úprave izby s dvoma dominantnými materiálmi. Podlaha je pokrytá drevodekorovou dlažbou formátu 20×120 cm uloženou vo vzore rybej kosti (herringbone) s presným dodržaním uhla a rovnosti radov. Akcentová stena je obložená dekoratívnou keramickou tehlou imitujúcou starú omietku — ručný výber farebnosti a pokládka s náhodným vzorom pre autenticitu. Každá tehla bola rezaná individuálne v rohoch a pri okne. Celková plocha — 22 m².",
    imageUrl: imgFloorHerringboneBrick,
    areaSqM: 22,
    durationDays: 9,
    materialsUsed: [
      "Drevodekorová dlažba 20×120 cm",
      "Dekoratívna retro tehla",
      "Biele lepidlo Mapei Keraflex Maxi",
      "Pieskavá špárovacia hmota Mapei Ultracolor",
      "Dištančné krížiky 2 mm a 3D laser"
    ],
    stagesOfWork: [
      "Vyrovnanie podlahy samonivelačnou stierkou",
      "Vymeranie osovej línie pre vzor rybej kosti",
      "Postupná pokládka celej podlahy s presným rezaním",
      "Príprava a penetrácia akcentovej steny",
      "Pokládka dekoratívnej tehly s náhodným výberom odtieňov",
      "Špárovanie a čistenie všetkých povrchov"
    ]
  },
  {
    id: "proj-dw-1",
    title: "Sadrokartónový strop s LED podsvietením a dekoratívnymi lištami",
    category: "drywall",
    categoryLabel: "Sadrokartónárske práce",
    description: "Dvojúrovňový strop so skrytým LED pásom a sadrovými lištami pre zdravotnícke pracovisko.",
    detailedDescription: "Projekt montáže zavesného sadrokartónového stropu v stomatologickej ambulancii. Kostra je zhotovená z pozinkovaného profilu Knauf s dvojvrstvovým obložením SDK pre tuhosť. Po celom obvode stropu je namontovaný tieňový profil hĺbky 10 mm so skrytým LED pásom COB pre rovnomerné, mäkké osvetlenie. Na stenách sú inštalované dekoratívne polyuretánové lišty s dokonalým spojom a spoločným náterom so stenami. Strop bol dotiahnutý na úroveň Q3 a namaľovaný bezvzduchovou metódou v dvoch vrstvách.",
    imageUrl: imgDrywall1,
    areaSqM: 18,
    durationDays: 8,
    materialsUsed: [
      "Profil Knauf CD/UD pozinkovaný",
      "SDK Knauf 12.5 mm (2 vrstvy)",
      "LED pás COB 24V, 10 W/m",
      "Tieňový profil 10 mm",
      "Polyuretánové lišty 8 cm",
      "Tmel Uniflott + sklotextilná mriežka"
    ],
    stagesOfWork: [
      "Vymeranie úrovne stropu 3D laserom",
      "Montáž kostra s dvojvrstvovým obložením SDK",
      "Inštalácia tieňového profilu po obvode",
      "Bandážovanie spojov, tmelenie a brúsenie na Q3",
      "Montáž a zapojenie LED pásu",
      "Inštalácia lišt a finálny náter"
    ]
  },
  {
    id: "proj-dw-2",
    title: "Strop s plávajúcim efektom a tieňovým profilom v obývacej izbe",
    category: "drywall",
    categoryLabel: "Sadrokartónárske práce",
    description: "Veľkoplošný zavesný strop s efektom levitácie a skrytou svetelnou líniou v modernom rodinnom dome.",
    detailedDescription: "Montáž zavesného stropu v otvorenej obývacej miestnosti s rozlohou 42 m² rodinného domu. Hlavná plocha stropu je spustená 15 cm pod nosnou konštrukciou. Po celom obvode a pozdĺž nosných trámov je zabudovaný tieňový profil hĺbky 10 mm, ktorý opticky oddeľuje strop od stien a vytvára 'plávajúci' efekt. V rezoch je predpravená príprava pre zapustené downlighty. Celá plocha bola starostlivo vytmelená na Q3 a natieraná bezvzduchovou metódou. Celková geometria bola dodržaná pomocou lasera.",
    imageUrl: imgDrywall2,
    areaSqM: 42,
    durationDays: 10,
    materialsUsed: [
      "Profil Knauf CD/UD 60/27",
      "SDK Knauf 12.5 mm",
      "Tieňový profil 10 mm po obvode",
      "Tmel Knauf Finish + sklotextilná mriežka",
      "Priame závesy a UD-kotvy",
      "Tmel Uniflott pre spoje"
    ],
    stagesOfWork: [
      "Vymeranie úrovne a kotevných bodov laserom",
      "Montáž kostra zavesného stropu",
      "Obloženie SDK s presným spájaním platní",
      "Inštalácia tieňového profilu po celom obvode",
      "Bandážovanie spojov, tmelenie a brúsenie",
      "Náter bezvzduchovou metódou v dvoch vrstvách"
    ]
  },
  {
    id: "proj-dw-3",
    title: "Šatník a priečky so skrytými výklenkami",
    category: "drywall",
    categoryLabel: "Sadrokartónárske práce",
    description: "Montáž sadrokartónových priečok s výklenkami pre oddelenie šatníka a kúpeľne v podkrovnom byte.",
    detailedDescription: "Komplexná stavba priečok zo sadrokartónu v podkrovnom byte. Realizovaná bola priečka medzi šatníkovou zónou a kúpeľňou s presným dodržaním pravého uhla. V šatníku sú zabudované výklenky s LED podsvietením pri podlahe pre atmosferický efekt. Prechod medzi zónami je riešený skrytou zárubnňou 'bez obložky'. Všetky povrchy boli dotiahnuté na úroveň Q2, čo je štandardom pre napínaný strop alebo maľovanie bez prémiových požiadaviek.",
    imageUrl: imgDrywall3,
    areaSqM: 25,
    durationDays: 12,
    materialsUsed: [
      "Profil CW/UW Knauf 75 mm",
      "SDK Knauf dvojvrstvový",
      "Minerálna vata Isover (zvuková izolácia)",
      "Skrytá zárubeň bez obložky",
      "LED pás COB vo výklenku pri podlahe",
      "Tmel Uniflott + páska Knauf Kurt"
    ],
    stagesOfWork: [
      "Vymeranie osí priečok laserom podľa projektu",
      "Montáž kostra UW/CW s rohmi a dverovým otvorom",
      "Vloženie minerálnej vaty medzi stojky",
      "Dvojvrstvové obloženie SDK s rozfázovaním spojov",
      "Bandážovanie a tmelenie spojov a rohov",
      "Montáž LED výklenku a skrytej zárubn"
    ]
  },
  {
    id: "proj-paint-1",
    title: "Spálňa s dekoratívnou omietkou a textúrovanou stenou",
    category: "painting",
    categoryLabel: "Maliarske práce",
    description: "Spálňa s akcentovou stenou v technike dekoratívnej omietky a dokonale vyrovnanými stenami na maľovanie.",
    detailedDescription: "Komplexná dokončovacia práca v spálni rodinného domu. Tri steny boli pripravené na maľovanie: spevnenie sklotextilnou mriežkou, stierkovanie v 2 vrstvách, brúsenie a nanesenie farby bezvzduchovou metódou na úroveň Q3. Akcentová stena za hlavou postele je zhotovená v technike dekoratívnej omietky s výraznou textúrou — ručná aplikácia stierkou so zachovaním reliéfneho vzoru. Strop je pokrytý betónovým povrchovým náterom pre imitáciu pohľadového betónu.",
    imageUrl: imgPainting1,
    areaSqM: 20,
    durationDays: 7,
    materialsUsed: [
      "Penetračný základ hlbokej penetrácie",
      "Tmel Knauf Finish (2 vrstvy)",
      "Sklotextilná mriežka pre spevnenie",
      "Dekoratívna omietka ručnej aplikácie",
      "Latexová farba pre steny (bez rozpúšťadiel)",
      "Náter — imitácia pohľadového betónu pre strop"
    ],
    stagesOfWork: [
      "Penetrácia a spevnenie stien sklotextilnou mriežkou",
      "Stierkovanie v 2 vrstvách s medzivrstvovým brúsením",
      "Nanesenie finálnej vrstvy a dosiahnutie Q3",
      "Maľovanie bezvzduchovou metódou v 2 vrstvách",
      "Ručné nanášanie dekoratívnej omietky na akcentovú stenu",
      "Náter imitácie betónu na strop"
    ]
  },
  {
    id: "proj-paint-2",
    title: "Chodba s dokonale vyrovnanými stenami na maľovanie",
    category: "painting",
    categoryLabel: "Maliarske práce",
    description: "Dlhá chodba so stenami dotiahnute na Q3 a natieranými v dvoch farbách s čistou prechodovou líniou.",
    detailedDescription: "Dokončovacie práce na chodbe v modernom byte. Všetky steny boli dotiahnuté na úroveň Q3: omietanie podľa omietnikov, spevnenie sklotextilnou mriežkou, dvojvrstvové stierkovanie a brúsenie do zrkadlovej rovnosti. Spodná tretina stien (do výšky 90 cm) a soklová zóna bola natieraná tmavografitovým odtieňom — čistá geometrická prechodová línia bola nanesená maliarskou páskou s laserovým meradlom. Horná časť stien a strop — matná bielobiela farba. Montáž tieňových líšt 7 cm zavŕšila priestor.",
    imageUrl: imgPainting2,
    areaSqM: 12,
    durationDays: 5,
    materialsUsed: [
      "Omietka Baumit StartContact (podľa omietnikov)",
      "Sklotextilná mriežka a modifikovaný PVA lep",
      "Tmel Knauf Finish",
      "Matná latexová farba (2 farby)",
      "Tieňová lišta MDF 70 mm",
      "Maliarska páska Tesa + laserové meradlo"
    ],
    stagesOfWork: [
      "Omietanie stien podľa omietnikov do pravého uhla",
      "Spevnenie stien sklotextilnou mriežkou po celej ploche",
      "Dvojvrstvové stierkovanie a brúsenie na Q3",
      "Vymeranie prechodovej línie farieb laserom",
      "Maľovanie spodnej zóny tmavou farbou",
      "Maľovanie hornej zóny a montáž líšt"
    ]
  },
  {
    id: "proj-paint-3",
    title: "Maľovanie izby bezvzduchovou metódou po stárkovaní",
    category: "painting",
    categoryLabel: "Maliarske práce",
    description: "Čerstvo natieraná izba po kompletnom prípravnom cykle: vyrovnanie, spevnenie a stierkovanie stien.",
    detailedDescription: "Kompletný cyklus maliarskych prác v izbe v novostavbe. Steny boli najprv vyrovnané omietkou Baumit podľa omietnikov (odchýlka max. 2 mm na 2 m lati). Po zaschnutí bola nanesená penetrácia a spevnenie sklotextilnou mriežkou pre zamedzenie mikrotrhlinám. Stierkovanie v dvoch vrstvách finálnym tmelom s medzivrstvovým suchým brúsením. Finálny náter bol realizovaný bezvzduchovým agregátom Wagner v dvoch vrstvách — výsledkom je dokonalo rovný matný povrch bez viditeľných štetcových stôp.",
    imageUrl: imgPainting3,
    areaSqM: 15,
    durationDays: 4,
    materialsUsed: [
      "Omietka Baumit MPI 25 podľa omietnikov",
      "Penetrácia Caparol Tiefengrund",
      "Sklotextilná mriežka 50 g/m²",
      "Tmel Knauf Finish (2 vrstvy)",
      "Matná farba Caparol Indeko-plus",
      "Bezvzduchový agregát Wagner"
    ],
    stagesOfWork: [
      "Omietanie stien podľa omietnikov (odchýlka ≤2 mm)",
      "Penetrácia a nalepenie sklotextilnej mriežky",
      "Prvá vrstva tmelu + suché brúsenie",
      "Druhá finálna vrstva tmelu + brúsenie",
      "Maľovanie bezvzduchovou metódou v 2 vrstvách",
      "Montáž líšt a upratanie staveniska"
    ]
  },
  {
    id: "proj-paint-4",
    title: "Obývacia izba s kuchyňou po kompletnom maliarskom dokončení",
    category: "painting",
    categoryLabel: "Maliarske práce",
    description: "Prepojená obývacia izba s kuchynskou zónou — stierkovanie stropov a stien, maľovanie a finálna úprava.",
    detailedDescription: "Komplexné maliarske dokončenie otvorenej obývačky s kuchynskou zónou po rekonštrukcii. Strop bol vyrovnaný sadrovitou omietkou a vytmelovaný v dvoch vrstvách na úroveň Q3 — príprava pre bezvzduchové maľovanie. Steny sú dokončené rovnako so spevnením spojov a starostlivým brúsením. Špecifikum projektu — zachovanie rohov 90° medzi stropom a stenami pri nestandardnej geometrii miestnosti vďaka presnému omietaniu podľa omietnikov. Parketová podlaha v rybej kosti bola počas prác chránená ochrannou fóliou.",
    imageUrl: imgPainting4,
    areaSqM: 35,
    durationDays: 9,
    materialsUsed: [
      "Sadrová omietka Rotband (steny a strop)",
      "Penetrácia Knauf Tiefgrund",
      "Tmel Knauf Finish (2 vrstvy)",
      "Armovacia páska Knauf Kurt na spoje",
      "Matná interiérová farba (prémiová trieda)",
      "Ochranná fólia pre podlahu počas prác"
    ],
    stagesOfWork: [
      "Omietanie stien a stropu podľa omietnikov",
      "Bandážovanie všetkých spojov a rohov",
      "Dvojvrstvové stierkovanie s brúsením medzi vrstvami",
      "Penetrácia pred maľovaním",
      "Maľovanie bezvzduchovou metódou v 2 vrstvách",
      "Finálne upratanie a odovzdanie diela"
    ]
  }
];

export const BENEFITS_SK: Benefit[] = [
  {
    id: 'ben-1',
    title: 'Profesionálne vybavenie',
    description: 'Používam špičkové profesionálne nástroje (3D lasery, vodné rezačky, bezvzduchové airless zariadenia, vysávače triedy M s automatickým oklepom), čo zaručuje bezprašnú, presnú prácu s minimom stavebného odpadu.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'ben-2',
    title: 'Presné dodržiavanie technológií',
    description: 'Nikdy nepreskakujem technologické kroky: penetrácia pred každou fázou, hydroizolačný systém a silikón v kúpeľni, bandážovanie každého spoja sadrokartónu vliesom pre dokonalé spoje bez trhlín.',
    iconName: 'TrendingUp'
  },
  {
    id: 'ben-3',
    title: 'Práca s tradíciou 9+ rokov',
    description: 'Špecializujem sa na interiérové dokončovacie práce od roku 2017. Mám za sebou desiatky úspešných realizácií kúpeľní na kľúč, sadrokartónov a dizajnových stierok. Poznám správanie moderných materiálov.',
    iconName: 'Award'
  },
  {
    id: 'ben-4',
    title: 'Prehľadný rozpočet a zmluvnosť',
    description: 'Presnú spotrebu materiálov určíme pred samotným štartom. Ponúkam sprevádzanie a konzultácie pri nákupe stavebnej chémie aj finálneho tovaru (obklad, batérie). Odovzdanie v presnom termíne.',
    iconName: 'CheckSquare'
  },
  {
    id: 'ben-5',
    title: 'Čistota po práci',
    description: 'Prácu preberáte v úplnom poriadku. Všetky brúsne procesy robíme s pripojeným priemyselným vysávačom. Po dokončení odovzdávam stavenisko kompletne upratané.',
    iconName: 'Sparkles'
  }
];

export const CONTACT_INFO_SK: ContactInfo = {
  phone: '+380671234567', // Keep actual phone number but localized display
  phoneDisplay: '+380 67 123 45 67',
  viberLink: 'viber://chat?number=%2B380671234567',
  telegramLink: 'https://t.me/oleg_remont_pro',
  instagramDisplay: '@oleg.remont.pro_ua',
  instagramLink: 'https://instagram.com/',
  email: 'prodanigor0@gmail.com',
  workingHours: 'Po - So: 08:30 - 19:30 (Nedeľa — zatvorené)',
  coverageArea: 'Bratislava, Pezinok, Senec a okolité okresy'
};
