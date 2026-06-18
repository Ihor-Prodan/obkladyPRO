import { useState, type ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";

type Language = "uk" | "sk";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "sk";
    const saved = localStorage.getItem("ObkladyLanguage");
    if (saved === "sk" || saved === "uk") return saved;
    return "sk";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("ObkladyLanguage", lang);
    }
  };

  // Import translations statically here to prevent circular dependencies
  const t = (key: string): string => {
    const dictionary =
      language === "sk" ? slovakTranslation : ukrainianTranslation;
    return dictionary[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Inline lightweight translation maps for UI-level labels to ensure instant loads
const ukrainianTranslation: Record<string, string> = {
  // Navigation
  "nav.works": "Перелік робіт",
  "nav.portfolio": "Портфоліо",
  "nav.advantages": "Переваги",
  "nav.contact": "Контакти",
  "nav.callBtn": "Зателефонувати",

  // Hero
  "hero.subtitle": "Професійний ремонт квартир та санвузлів",
  "hero.titleMain": "Якісне внутрішнє оздоблення та",
  "hero.titleAccent": "ремонт під ключ",
  "hero.desc":
    "Професійне укладання плитки, монтаж складних гіпсокартонних систем та бездоганне оздоблення стін у Братиславі та передмісті. Гарантія геометричної точності, чистоти на об’єкті та дотримання домовленостей.",
  "hero.statExp": "9+ років",
  "hero.statExpLabel": "досвіду у сфері",
  "hero.statQual": "100% якість",
  "hero.statQualLabel": "за договором",
  "hero.statLoc": "Братислава",
  "hero.statLocLabel": "виїзд на об'єкт",
  "hero.btnContact": "Зв’язатися з майстром",
  "hero.btnPortfolio": "Дивитися портфоліо",

  // Services
  "services.badge": "Чим я займаюсь",
  "services.title": "Перелік професійних внутрішніх робіт",
  "services.desc":
    "Виконую оздоблювальні послуги з суворим дотриманням технологічних норм та ДБН. Кожна деталь процесу узгоджується, щоб забезпечити бездоганний термін служби ремонту.",
  "services.detailsBadge": "Деталі послуги",
  "services.detailsTitle": "Які конкретно роботи виконуються:",
  "services.expandedEmpty":
    "Оберіть послугу ліворуч, щоб переглянути детальний список робіт.",
  "services.btnSelect": "Оберіть послугу",
  "services.visitLabel": "Терміни виїзду",
  "services.visitDesc": "Безкоштовний огляд об’єкта за домовленістю",
  "services.ctaCalc": "Замовити розрахунок робіт",

  // Portfolio
  "portfolio.badge": "Галерея робіт",
  "portfolio.title": "Наші виконані проекти",
  "portfolio.desc":
    "Ознайомтесь з реальними фотографіями готових об’єктів. Кожен проект супроводжується детальним описом виконаних етапів та обраних матеріалів.",
  "portfolio.allFilter": "Всі виконані роботи",
  "portfolio.tilesFilter": "Укладання плитки",
  "portfolio.drywallFilter": "Гіпсокартонні каркаси",
  "portfolio.paintingFilter": "Малярні роботи та декор",
  "portfolio.area": "Площа",
  "portfolio.duration": "Термін",
  "portfolio.daysUnit": "дн.",
  "portfolio.moreDetails": "Переглянути подробиці проекту →",
  "portfolio.modalStages": "Етапи виконання робіт:",
  "portfolio.modalArea": "Площа монтажу:",
  "portfolio.modalDuration": "Термін виконання:",
  "portfolio.modalDaysUnit": "днів",
  "portfolio.modalDescTitle": "Про виконання:",
  "portfolio.modalMaterials": "Використані матеріали:",
  "portfolio.modalPitch":
    "Вам подобається якість деталізації та акуратність робіт? Зв'яжіться зі мною у контактах нижче для узгодження вашого об’єкту.",
  "portfolio.modalCta": "Обговорити схожий проект",

  // Advantages
  "advantages.badge": "Чому обирають нас",
  "advantages.title": "Стандарти та переваги роботи з майстром",
  "advantages.desc":
    "Суворе дотримання технологічного процесу — це єдиний шлях отримати довговічний, естетичний ремонт та зекономити ваші нерви і кошти.",
  "advantages.bannerTitle":
    "Потрібна попередня консультація щодо вибору плитки чи фарби?",
  "advantages.bannerDesc":
    "Не соромтеся звертатися! Допомагаю обрати правильні чорнові будівельні суміші Knauf/Mapei/Semin та оздоблювальні матеріали, щоб уникнути помилок розбіжності форматів ще до початку монтажних робіт.",
  "advantages.bannerCta": "Отримати консультацію",

  // Contact
  "contact.badge": "Зворотний зв’язок",
  "contact.title": "Почніть свій ремонт вже сьогодні",
  "contact.desc":
    "Напишіть нам або зателефонуйте. Ми детально проконсультуємо, розрахуємо орієнтовні закупки чорнових матеріалів та домовимось про заміри приміщення.",
  "contact.leftHeader": "Контактна інформація",
  "contact.phoneLabel": "Номер телефону для зв'язку",
  "contact.phoneStatus": "● Вільно для дзвінків, Viber, Telegram",
  "contact.hoursLabel": "Графік прийому дзвінків",
  "contact.hoursDesc": "Неділя — виділена для сімейного відпочинку",
  "contact.coverageLabel": "Територія виїзду на об'єкти",
  "contact.emailLabel": "Електронна пошта для креслень",
  "contact.emailDesc": "Приймаємо надіслані дизайн-проекти сюди",
  "contact.socialLabel": "Соціальні мережі та месенджери",
  "contact.formHeader": "Швидкий запит майстру",
  "contact.formHistoryBtn": "Мої запити",
  "contact.formHistoryHide": "Приховати історію",
  "contact.formHistoryClear": "Очистити історію",
  "contact.historyEmpty": "Історія запитів чиста.",
  "contact.historySuccessTip":
    "Запит успішно збережено в браузері. Очікуйте дзвінка протягом години!",
  "contact.formBackToFill": "Повернутися до заповнення форми",
  "contact.submitting": "Надсилаємо заявку...",
  "contact.submitBtn": "Записатись на безкоштовні заміри",
  "contact.formFooterConsent":
    "* Натискаючи кнопку, ви даєте згоду на зв’язок за вказаним номером телефону. Ми гарантуємо конфіденційність.",
  "contact.successHeader": "Заявка надіслана успішно!",
  "contact.successDesc":
    "Дякуємо за звернення. Заявку збережено. Я зателефоную вам найближчим часом, щоб обговорити деталі ремонту вашого об'єкту.",
  "contact.successNewBtn": "Надіслати нову заявку",
  "contact.successViewBtn": "Переглянути мої запити",
  "contact.labelName": "Ваше ім’я *",
  "contact.placeholderName": "Наприклад, Олександр",
  "contact.labelPhone": "Контактний телефон *",
  "contact.placeholderPhone": "+380 (__) ___-__-__",
  "contact.labelWorkType": "Які роботи потрібно виконати?",
  "contact.optionTiles": "Укладання плитки та сантехніка",
  "contact.optionDrywall": "Монтаж гіпсокартонних систем",
  "contact.optionPainting": "Малярка (шпаклівка, фарбування, декор)",
  "contact.optionFlooring": "Влаштування підлогового покриття",
  "contact.optionComplex": "Комплексний ремонт під ключ",
  "contact.optionOther": "Інше / Консультація на об'єкті",
  "contact.labelDesc": "Короткий опис об'єкта (необов'язково)",
  "contact.placeholderDesc":
    "Опишіть ваше приміщення: площа, обсяг необхідних робіт, висота стелі...",
  "contact.errorName": "Будь ласка, вкажіть ваше ім'я.",
  "contact.errorPhone": "Будь ласка, впишіть номер телефону.",
  "contact.errorPhoneFormat": "Неправильний формат телефону (мінімум 9 цифр).",
  "contact.historyConfirm":
    "Ви впевнені, що хочете очистити історію ваших надісланих запитів?",
  "contact.visitBannerTip":
    "Швидкий виїзд замірника по Братиславі та околиці протягом 24 годин.",

  // Footer / Brand
  "footer.subtext": "Внутрішні роботи будь-якої складності",
  "footer.brandLoc": "Братислава та околиця",
  "footer.copyright": "Всі права захищені.",
  "footer.bottomDesc":
    "Професійний ремонт, лицювання плиткою та оздоблення стін під ключ.",
  "footer.up": "Вгору",
};

const slovakTranslation: Record<string, string> = {
  // Navigation
  "nav.works": "Zoznam prác",
  "nav.portfolio": "Portfólio",
  "nav.advantages": "Výhody",
  "nav.contact": "Kontakty",
  "nav.callBtn": "Zavolať",

  // Hero
  "hero.subtitle": "Profesionálna rekonštrukcia bytov a kúpeľní",
  "hero.titleMain": "Prvotriedne interiérové práce a",
  "hero.titleAccent": "rekonštrukcie na kľúč",
  "hero.desc":
    "Profesionálne obkladačské práce, montáž sadrokartónu a bezchybné maliarske stierky v Bratislave a okolí. Garancia presnej geometrie, čistoty a prísneho plnenia dohôd.",
  "hero.statExp": "9+ rokov",
  "hero.statExpLabel": "stavebných skúseností",
  "hero.statQual": "100% kvalita",
  "hero.statQualLabel": "podľa zmluvy",
  "hero.statLoc": "Bratislava a okolie",
  "hero.statLocLabel": "obhliadka priamo u Vás",
  "hero.btnContact": "Kontaktovať majstra",
  "hero.btnPortfolio": "Zobraziť portfólio",

  // Services
  "services.badge": "Čo ponúkame",
  "services.title": "Zoznam odborných interiérových prác",
  "services.desc":
    "Dokončovacie a rekonštrukčné práce realizujeme v súlade so stavebnými normami. Každý detail konzultujeme na dosiahnutie maximálne trvácneho výsledku.",
  "services.detailsBadge": "Detaily práce",
  "services.detailsTitle": "Konkrétne vykonávané úkony:",
  "services.expandedEmpty":
    "Kliknite na službu vľavo pre zobrazenie podrobného popisu prác.",
  "services.btnSelect": "Zvoľte službu",
  "services.visitLabel": "Obhliadka u klienta",
  "services.visitDesc": "Bezplatné zameranie a obhliadka po vzájomnej dohode",
  "services.ctaCalc": "Požiadať o nacenenie prác",

  // Portfolio
  "portfolio.badge": "Galéria realizácií",
  "portfolio.title": "Naše dokončené projekty",
  "portfolio.desc":
    "Prezrite si reálne fotografie hotových interiérov. Každá realizácia obsahuje detailný popis prác, zoznam použitých materiálov a dĺžku montáže.",
  "portfolio.allFilter": "Všetky realizácie",
  "portfolio.tilesFilter": "Pokládka obkladov a dlažieb",
  "portfolio.drywallFilter": "Sadrokartónové systémy",
  "portfolio.paintingFilter": "Maliarske práce a dekory",
  "portfolio.area": "Plocha",
  "portfolio.duration": "Čas",
  "portfolio.daysUnit": "dní",
  "portfolio.moreDetails": "Zobraziť detaily projektu →",
  "portfolio.modalStages": "Postup prác a realizácia:",
  "portfolio.modalArea": "Plocha realizácie:",
  "portfolio.modalDuration": "Dĺžka prác:",
  "portfolio.modalDaysUnit": "dní",
  "portfolio.modalDescTitle": "O projekte:",
  "portfolio.modalMaterials": "Použitý materiál:",
  "portfolio.modalPitch":
    "Páči sa vám zmysel pre detail a čistota našej práce? Kontaktujte ma nižšie pre nacenenie alebo dohodnutie obhliadky Vášho priestoru.",
  "portfolio.modalCta": "Konzultovať podobný projekt",

  // Advantages
  "advantages.badge": "Prečo spolupracovať s nami",
  "advantages.title": "Naše štandardy a profesijné výhody",
  "advantages.desc":
    "Dôsledné dodržiavanie technologických predpisov je jedinou zárukou dlhej životnosti interiéru, s ušetrením vášho času a prostriedkov.",
  "advantages.bannerTitle":
    "Potrebujete pomôcť s nákupom lepidla, omietok, či farby?",
  "advantages.bannerDesc":
    "Neváhajte sa opýtať! Poradím vám vhodné stavebné zmesi (Knauf/Mapei/Semin) a správnu špecifikáciu materiálov pre predchádzanie chybám ešte pred samotným obkladaním.",
  "advantages.bannerCta": "Získať bezplatnú konzultáciu",

  // Contact
  "contact.badge": "Napíšte nám",
  "contact.title": "Začnite s rekonštrukciou ešte dnes",
  "contact.desc":
    "Zanechajte nám správu alebo nám rovno zavolajte. Navrhneme ideálny postup, spravíme predbežný výpočet spotreby materiálov a naplánujeme termín merania.",
  "contact.leftHeader": "Kontaktné údaje",
  "contact.phoneLabel": "Telefónne číslo pre hovory",
  "contact.phoneStatus": "● K dispozícii pre hovory, Viber a Telegram",
  "contact.hoursLabel": "Pracovná doba na telefóne",
  "contact.hoursDesc": "Nedeľa — venovaná rodinnému pokoju a odpočinku",
  "contact.coverageLabel": "Lokality obhliadok a realizácií",
  "contact.emailLabel": "E-mail pre zasielanie projektov",
  "contact.emailDesc": "Sem nám zašlite vaše dizajnové projekty",
  "contact.socialLabel": "Sociálne siete a rýche správy",
  "contact.formHeader": "Rýchly dopyt pre majstra",
  "contact.formHistoryBtn": "Moje dopyty",
  "contact.formHistoryHide": "Skryť históriu",
  "contact.formHistoryClear": "Vymazať históriu",
  "contact.historyEmpty": "História dopytov je prázdna.",
  "contact.historySuccessTip":
    "Dopyt bol úspešne uložený v prehliadači. Očakávajte spätný telefonát čo najskôr!",
  "contact.formBackToFill": "Späť k vyplneniu formulára",
  "contact.submitting": "Odosielam dopyt...",
  "contact.submitBtn": "Objednať bezplatné meranie",
  "contact.formFooterConsent":
    "* Odoslaním formulára súhlasíte s telefonickým kontaktovaním za účelom prerokovania dopytu. Garantujeme súkromie.",
  "contact.successHeader": "Dopyt bol úspešne odoslaný!",
  "contact.successDesc":
    "Ďakujeme za dôveru. Vaše údaje boli uložené. Čoskoro sa vám ozvem telefonicky, aby sme prebrali detaily obhliadky.",
  "contact.successNewBtn": "Odoslať nový dopyt",
  "contact.successViewBtn": "Zobraziť moje správy",
  "contact.labelName": "Vaše meno *",
  "contact.placeholderName": "Napr. Michal",
  "contact.labelPhone": "Kontaktný telefón *",
  "contact.placeholderPhone": "+421 (__) ___-___",
  "contact.labelWorkType": "Ktoré stavebné práce požadujete?",
  "contact.optionTiles": "Obkladačské práce a sanita",
  "contact.optionDrywall": "Montáž sadrokartónových systémov",
  "contact.optionPainting": "Maliarske práce (stierky, nátery, dekor)",
  "contact.optionFlooring": "Pokládka podlahových krytín",
  "contact.optionComplex": "Kompletná rekonštrukcia na kľúč",
  "contact.optionOther": "Iné / Odborné poradenstvo",
  "contact.labelDesc": "Stručný popis priestoru (nepovinné)",
  "contact.placeholderDesc":
    "Popíšte váš priestor: úžitková plocha, rozsah prác, výška stropov, špeciálne požiadavky...",
  "contact.errorName": "Meno je povinný údaj, prosím vyplňte ho.",
  "contact.errorPhone": "Telefónne číslo je povinné, prosím zadajte ho.",
  "contact.errorPhoneFormat": "Nesprávny formát čísla (minimálne 9 číslic).",
  "contact.historyConfirm": "Naozaj vymazať celú históriu odoslaných dopytov?",
  "contact.visitBannerTip":
    "Rýchly výjazd na obhliadku a spracovanie cenovej ponuky do 24-48 hodín.",

  // Footer / Brand
  "footer.subtext": "Interiérové stavebné práce najvyššej kvality",
  "footer.brandLoc": "Bratislava, Pezinok a okolie",
  "footer.copyright": "Všetky práva vyhradené.",
  "footer.bottomDesc":
    "Profesionálna rekonštrukcia obkladov a kompletná obnova stien na kľúč.",
  "footer.up": "Nahor",
};
