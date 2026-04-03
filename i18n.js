// i18n.js
const translations = {
  // ── РУССКИЙ ──
  ru: {
    // Header
    nav_home: "Главная",
    nav_about: "Актуальность",
    nav_gallery: "Эндемики",
    nav_guide: "Как это работает",
    btn_start_scanner: "Запустить сканер",
    nav_back: "Назад",

    // Home Hero
    badge_project: "Научно-краеведческий проект",
    hero_title: "Интерактивная VR-карта:<br> <span class='text-gradient'>Сокровища Хамира</span>",
    hero_subtitle: "Исследуйте уникальную флору и фауну Восточного Казахстана через призму дополненной реальности и 3D-моделирования.",
    btn_hero_start: "Начать AR-путешествие",

    // Home About
    about_title: "Актуальность & Новизна",
    about_subtitle: "Наша цель — сохранение биоразнообразия региона путём объединения науки и современных визуальных технологий.",
    about_card1_title: "Цифровой двойник",
    about_card1_text: "Революционный переход от привычных плоских карт к объемному интерактивному анализу местности и объектов флоры.",
    about_card2_title: "Доступность",
    about_card2_text: "Полноценное изучение редких эндемичных видов прямо со смартфона, без физического вреда для хрупкой экосистемы.",
    about_card3_title: "Эко-мышление",
    about_card3_text: "Формирование бережного отношения к природному наследию Восточно-Казахстанской области у нового поколения.",

    // Home Gallery
    gallery_title: "Объекты исследования",
    gallery_subtitle: "Галерея уникальных 3D-моделей эндемиков. Отсканируйте их в AR, чтобы увидеть в естественной среде.",
    sp1_name: "Сибирка алтайская",
    sp1_desc: "Редкий кустарник с поразительной адаптацией к скалистой местности. Плотные кожистые листья позволяют удерживать влагу на горных склонах.",
    sp2_name: "Кандык сибирский",
    sp2_desc: "Весенний травянистый эфемероид с уникальной морфологией цветка. Символ пробуждения весенней тайги, нуждающийся в строгой охране.",
    sp3_name: "Алтайский осман",
    sp3_desc: "Рыба чистейших горных рек с ярко выраженной гидродинамической формой. Эндемичный вид водоемов Центральной Азии.",

    // Home Guide
    guide_title: "Как использовать AR-сканер?",
    guide_subtitle: "Простое приложение, работающее прямо в браузере без установки.",
    g_step1_title: "Запуск",
    g_step1_text: "Нажмите розовую кнопку «Запустить сканер» на этом сайте. Разрешите доступ к камере.",
    g_step2_title: "Наведение",
    g_step2_text: "Наведите камеру смартфона на маркер или иллюстрацию эндемика из галереи.",
    g_step3_title: "Магия AR",
    g_step3_text: "Увидьте, как природа оживает в формате видео и 3D прямо на вашем экране.",

    // Home Footer
    foot_desc: "Научно-краеведческое исследование и оцифровка биологического наследия устья реки Хамир.",
    foot_tech: "Технологии",
    foot_data: "Данные",
    foot_contact: "✉ Связаться с авторами",
    foot_copy: "© 2026 Проект Хамир.VR. Все права защищены.",

    // Index (AR)
    splash_title: "AR Сканер",
    splash_desc: "Нажмите кнопку, чтобы открыть камеру и оживить иллюстрации со звуком",
    splash_warn_title: "⚠️ Важно:",
    splash_warn_text: 'Сканируйте <strong class="text-white">весь плакат</strong> целиком, а не QR-код!',
    splash_btn: "🎥 Начать AR-сеанс",
    hud_scan: "Наведите камеру на плакат",
    hud_found: "Найдено",
    err_title: "Файлы не найдены",
    err_desc: 'Положите <strong class="text-white">target.mind</strong> и <strong class="text-white">target.png</strong> в <code class="bg-slate-800 px-1 rounded">ar-site/markers/</code><br>и <strong class="text-white">video.mp4</strong> в <code class="bg-slate-800 px-1 rounded">ar-site/videos/</code>'
  },

  // ── КАЗАХСКИЙ ──
  kk: {
    nav_home: "Басты бет",
    nav_about: "Өзектілігі",
    nav_gallery: "Эндемиктер",
    nav_guide: "Қалай жұмыс істейді",
    btn_start_scanner: "Сканерді іске қосу",
    nav_back: "Артқа",

    badge_project: "Ғылыми-өлкетану жобасы",
    hero_title: "Интерактивті VR-карта:<br> <span class='text-gradient'>Хамир қазынасы</span>",
    hero_subtitle: "Шығыс Қазақстанның бірегей флорасы мен фаунасын толықтырылған шынайылық және 3D-модельдеу арқылы зерттеңіз.",
    btn_hero_start: "AR-саяхатты бастау",

    about_title: "Өзектілігі мен жаңалығы",
    about_subtitle: "Біздің мақсатымыз — ғылым мен заманауи визуалды технологияларды біріктіру арқылы аймақтың биоәртүрлілігін сақтау.",
    about_card1_title: "Цифрлық егіз",
    about_card1_text: "Қарапайым жазық карталардан ландшафт пен флора нысандарын көлемді интерактивті талдауға революциялық көшу.",
    about_card2_title: "Қолжетімділік",
    about_card2_text: "Сирек кездесетін эндемикалық түрлерді нәзік экожүйеге физикалық зиян келтірместен, тікелей смартфоннан толыққанды зерттеу.",
    about_card3_title: "Эко-сана",
    about_card3_text: "Жаңа ұрпақта Шығыс Қазақстан облысының табиғи мұрасына ұқыпты қарауды қалыптастыру.",

    gallery_title: "Зерттеу нысандары",
    gallery_subtitle: "Эндемиктердің бірегей 3D-модельдерінің галереясы. Оларды табиғи ортада көру үшін AR арқылы сканерлеңіз.",
    sp1_name: "Алтай сібіркісі",
    sp1_desc: "Жартасты жерлерге таңғажайып бейімделген сирек бұта. Қалың былғары жапырақтар тау бөктеріндегі ылғалды сақтауға мүмкіндік береді.",
    sp2_name: "Сібір қандығы",
    sp2_desc: "Гүлі бірегей морфологияға ие жазғы шөптесін эфемероид. Қатаң қорғауды қажет ететін жазғы тайганың ояну символы.",
    sp3_name: "Алтай османы",
    sp3_desc: "Айқын гидродинамикалық пішіні бар таза тау өзендерінің балығы. Орталық Азия су қоймаларының эндемиялық түрі.",

    guide_title: "AR-сканерді қалай қолдану керек?",
    guide_subtitle: "Ешқандай орнатусыз тікелей браузерде жұмыс істейтін қарапайым қосымша.",
    g_step1_title: "Іске қосу",
    g_step1_text: "Осы сайттағы қызғылт «Сканерді іске қосу» түймесін басыңыз. Камераға рұқсат беріңіз.",
    g_step2_title: "Бағыттау",
    g_step2_text: "Смартфон камерасын маркерге немесе галереядағы эндемик суретіне бағыттаңыз.",
    g_step3_title: "AR сиқыры",
    g_step3_text: "Табиғаттың экранда бейне және 3D форматында тірілгенін көріңіз.",

    foot_desc: "Гылыми-өлкетану зерттеуі және Хамир өзені сағасының биологиялық мұрасын цифрландыру.",
    foot_tech: "Технологиялар",
    foot_data: "Деректер",
    foot_contact: "✉ Авторлармен байланысу",
    foot_copy: "© 2026 Хамир.VR жобасы. Барлық құқықтар қорғалған.",

    splash_title: "AR Сканер",
    splash_desc: "Камераны ашып, суреттерді дыбыспен жандандыру үшін түймені басыңыз",
    splash_warn_title: "⚠️ Маңызды:",
    splash_warn_text: 'QR-кодты емес, <strong class="text-white">бүкіл плакат суретін</strong> толық сканерлеңіз!',
    splash_btn: "🎥 AR-сеансты бастау",
    hud_scan: "Камераны плакатқа бағыттаңыз",
    hud_found: "Табылды",
    err_title: "Файлдар табылмады",
    err_desc: '<strong class="text-white">target.mind</strong> және <strong class="text-white">target.png</strong> файлдарын <code class="bg-slate-800 px-1 rounded">ar-site/markers/</code> папкасына<br>ал <strong class="text-white">video.mp4</strong> файлын <code class="bg-slate-800 px-1 rounded">ar-site/videos/</code> папкасына салыңыз'
  },

  // ── АНГЛИЙСКИЙ ──
  en: {
    nav_home: "Home",
    nav_about: "Relevance",
    nav_gallery: "Endemics",
    nav_guide: "How It Works",
    btn_start_scanner: "Start Scanner",
    nav_back: "Back",

    badge_project: "Scientific-local history project",
    hero_title: "Interactive VR Map:<br> <span class='text-gradient'>Treasures of Khamir</span>",
    hero_subtitle: "Explore the unique flora and fauna of Eastern Kazakhstan through the lens of augmented reality and 3D modeling.",
    btn_hero_start: "Start AR Journey",

    about_title: "Relevance & Novelty",
    about_subtitle: "Our goal is the preservation of biodiversity in the region by uniting science and modern visual technologies.",
    about_card1_title: "Digital Twin",
    about_card1_text: "A revolutionary transition from familiar flat maps to volumetric interactive analysis of the terrain and flora objects.",
    about_card2_title: "Accessibility",
    about_card2_text: "Comprehensive study of rare endemic species directly from a smartphone, without physical harm to the fragile ecosystem.",
    about_card3_title: "Eco-Mindset",
    about_card3_text: "Fostering a careful attitude towards the natural heritage of the East Kazakhstan region in the new generation.",

    gallery_title: "Research Objects",
    gallery_subtitle: "A gallery of unique 3D models of endemics. Scan them in AR to see them in their natural habitat.",
    sp1_name: "Altai Sibiraea",
    sp1_desc: "A rare shrub with striking adaptation to rocky terrain. Dense leathery leaves help retain moisture on mountain slopes.",
    sp2_name: "Siberian Fawn Lily",
    sp2_desc: "A spring herbaceous ephemeroid with unique flower morphology. A symbol of the spring taiga awakening, requiring strict protection.",
    sp3_name: "Altai Osman",
    sp3_desc: "A fish of the purest mountain rivers with a pronounced hydrodynamic shape. An endemic species of Central Asian reservoirs.",

    guide_title: "How to use the AR scanner?",
    guide_subtitle: "A simple app that works directly in your browser without installation.",
    g_step1_title: "Launch",
    g_step1_text: "Click the pink «Start Scanner» button on this site. Allow camera access.",
    g_step2_title: "Point",
    g_step2_text: "Point your smartphone camera at the marker or the illustration of the endemic from the gallery.",
    g_step3_title: "AR Magic",
    g_step3_text: "See nature come to life in video and 3D directly on your screen.",

    foot_desc: "Scientific research and digitization of the biological heritage of the Khamir river mouth.",
    foot_tech: "Technologies",
    foot_data: "Data",
    foot_contact: "✉ Contact Authors",
    foot_copy: "© 2026 Khamir.VR Project. All rights reserved.",

    splash_title: "AR Scanner",
    splash_desc: "Click the button to open the camera and bring illustrations to life with sound",
    splash_warn_title: "⚠️ Important:",
    splash_warn_text: 'Scan the <strong class="text-white">entire poster image</strong> as a whole, not just a QR code!',
    splash_btn: "🎥 Start AR Session",
    hud_scan: "Point camera at poster",
    hud_found: "Found",
    err_title: "Files not found",
    err_desc: 'Place <strong class="text-white">target.mind</strong> and <strong class="text-white">target.png</strong> in <code class="bg-slate-800 px-1 rounded">ar-site/markers/</code><br>and <strong class="text-white">video.mp4</strong> in <code class="bg-slate-800 px-1 rounded">ar-site/videos/</code>'
  }
};

// Application Language Initializer
let currentLang = localStorage.getItem('site_lang') || 'ru';

function applyTranslations(lang) {
  if (!translations[lang]) return;
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key]; 
    }
  });

  // Also update UI select element if present
  const langSelects = document.querySelectorAll('.lang-select');
  langSelects.forEach(select => {
    select.value = lang;
  });
}

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    applyTranslations(lang);
    
    // Dispatch a custom event so other scripts (like AR HUD text) know it changed
    window.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
  }
}

// Translate text directly
function t(key) {
  return translations[currentLang][key] || key;
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  
  document.querySelectorAll('.lang-select').forEach(select => {
    select.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  });
});
