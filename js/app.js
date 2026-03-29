// ========================
// Конфигурация
// ========================
const CONFIG = {
  // CORS-прокси для обхода ограничений браузера
  corsProxy: 'https://api.allorigins.win/raw?url=',
  // API для определения оператора и региона
  voxlinkApi: 'https://num.voxlink.ru/get/?num=',
  // Максимум записей в истории
  historyMax: 10,
};

// ========================
// База данных кодов операторов (DEF-коды)
// ========================
const PHONE_DATABASE = {
  operators: {
    // МТС
    910: 'МТС', 911: 'МТС', 912: 'МТС', 913: 'МТС', 914: 'МТС',
    915: 'МТС', 916: 'МТС', 917: 'МТС', 918: 'МТС', 919: 'МТС',
    980: 'МТС', 981: 'МТС', 982: 'МТС', 983: 'МТС', 984: 'МТС',
    985: 'МТС', 986: 'МТС', 987: 'МТС', 988: 'МТС', 989: 'МТС',
    // МегаФон
    920: 'МегаФон', 921: 'МегаФон', 922: 'МегаФон', 923: 'МегаФон', 924: 'МегаФон',
    925: 'МегаФон', 926: 'МегаФон', 927: 'МегаФон', 928: 'МегаФон', 929: 'МегаФон',
    930: 'МегаФон', 931: 'МегаФон', 932: 'МегаФон', 933: 'МегаФон', 934: 'МегаФон',
    936: 'МегаФон', 937: 'МегаФон', 938: 'МегаФон', 939: 'МегаФон',
    906: 'МегаФон', 908: 'МегаФон',
    // Билайн
    900: 'Билайн', 901: 'Билайн', 902: 'Билайн', 903: 'Билайн', 904: 'Билайн',
    905: 'Билайн', 907: 'Билайн', 909: 'Билайн',
    960: 'Билайн', 961: 'Билайн', 962: 'Билайн', 963: 'Билайн', 964: 'Билайн',
    965: 'Билайн', 966: 'Билайн', 967: 'Билайн', 968: 'Билайн', 969: 'Билайн',
    // Теле2
    950: 'Теле2', 951: 'Теле2', 952: 'Теле2', 953: 'Теле2', 958: 'Теле2',
    // Ростелеком
    800: 'Ростелеком', 801: 'Ростелеком', 802: 'Ростелеком', 803: 'Ростелеком',
    // YOTA
    999: 'YOTA',
    // Tinkoff Mobile
    997: 'Tinkoff Mobile',
    // Сбербанк
    996: 'СберМобайл',
    // ВТБ Мобайл
    995: 'ВТБ Мобайл',
  },

  // Коды городов → регион/город
  cities: {
    // Москва и область
    495: 'Москва', 499: 'Москва', 498: 'Московская область',
    496: 'Московская область', 497: 'Московская область',
    // Санкт-Петербург и область
    812: 'Санкт-Петербург', 813: 'Ленинградская область',
    // Центральный федеральный округ
    4722: 'Белгород', 4712: 'Белгородская область',
    4732: 'Воронеж', 473: 'Воронеж',
    4742: 'Липецк', 4752: 'Тамбов',
    4822: 'Тверь', 4832: 'Брянск',
    4852: 'Ярославль', 4862: 'Орёл',
    4872: 'Тула', 4910: 'Рязань',
    4912: 'Рязань', 4922: 'Владимир',
    4932: 'Иваново', 4942: 'Кострома',
    // Северо-Западный федеральный округ
    8112: 'Псков', 8152: 'Мурманск',
    8162: 'Великий Новгород', 8172: 'Вологда',
    8182: 'Архангельск', 8212: 'Сыктывкар',
    8142: 'Петрозаводск',
    // Южный федеральный округ
    861: 'Краснодар', 8617: 'Новороссийск',
    8622: 'Сочи', 863: 'Ростов-на-Дону',
    8635: 'Таганрог', 8442: 'Волгоград',
    8452: 'Саратов', 8462: 'Самара',
    8512: 'Астрахань', 8722: 'Махачкала',
    8652: 'Ставрополь', 8662: 'Нальчик',
    // Приволжский федеральный округ
    831: 'Нижний Новгород', 8313: 'Нижний Новгород',
    843: 'Казань', 846: 'Самара',
    8482: 'Тольятти', 8552: 'Набережные Челны',
    347: 'Уфа', 3412: 'Ижевск',
    342: 'Пермь', 8352: 'Чебоксары',
    8362: 'Йошкар-Ола', 8412: 'Пенза',
    8422: 'Ульяновск', 8332: 'Киров',
    8342: 'Саранск',
    // Уральский федеральный округ
    343: 'Екатеринбург', 351: 'Челябинск',
    3513: 'Магнитогорск', 3452: 'Тюмень',
    3467: 'Сургут', 3466: 'Нижневартовск',
    3462: 'Сургут', 3519: 'Миасс',
    3435: 'Нижний Тагил', 3532: 'Оренбург',
    // Сибирский федеральный округ
    383: 'Новосибирск', 391: 'Красноярск',
    3812: 'Омск', 3822: 'Томск',
    3952: 'Иркутск', 3902: 'Абакан',
    3912: 'Красноярск', 3919: 'Норильск',
    385: 'Барнаул', 3854: 'Барнаул',
    3532: 'Оренбург', 3842: 'Кемерово',
    3843: 'Новокузнецк', 3852: 'Барнаул',
    // Дальневосточный федеральный округ
    423: 'Владивосток', 4232: 'Владивосток',
    4212: 'Хабаровск', 4152: 'Петропавловск-Камчатский',
    4112: 'Якутск', 4162: 'Благовещенск',
    4132: 'Магадан', 4242: 'Южно-Сахалинск',
    // Калининград
    4012: 'Калининград',
  },
};

// ========================
// Нормализация номера телефона
// ========================
function normalizePhone(input) {
  // Убираем все кроме цифр и +
  let digits = input.replace(/\D/g, '');
  if (digits.startsWith('8') && digits.length === 11) {
    digits = '7' + digits.slice(1);
  }
  if (digits.startsWith('7') && digits.length === 11) {
    return '+7' + digits.slice(1);
  }
  if (digits.length === 10) {
    return '+7' + digits;
  }
  return null;
}

// ========================
// Форматирование номера для отображения
// ========================
function formatPhone(normalized) {
  // +7XXXXXXXXXX → +7 (XXX) XXX-XX-XX
  const d = normalized.replace('+7', '');
  return `+7 (${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6,8)}-${d.slice(8,10)}`;
}

// ========================
// Определение типа номера
// ========================
function getPhoneType(tenDigits) {
  const prefix3 = parseInt(tenDigits.slice(0, 3));
  const prefix4 = parseInt(tenDigits.slice(0, 4));
  if (prefix3 === 800) return 'Бесплатный федеральный';
  if (prefix3 === 804) return 'Платный федеральный';
  if (prefix3 === 809) return 'Контент-номер (платный)';
  if (prefix3 >= 900 && prefix3 <= 999) return 'Мобильный';
  return 'Городской';
}

// ========================
// Поиск в встроенной базе
// ========================
function lookupInLocalDB(tenDigits) {
  const def3 = parseInt(tenDigits.slice(0, 3));
  const def4 = parseInt(tenDigits.slice(0, 4));

  const operator = PHONE_DATABASE.operators[def3] || 'Неизвестный оператор';

  // Поиск города: сначала 4 цифры, потом 3
  let region = PHONE_DATABASE.cities[def4] || PHONE_DATABASE.cities[def3] || 'Регион не определён';

  return { operator, region, source: 'Встроенная база' };
}

// ========================
// Запрос к API voxlink
// ========================
async function fetchFromVoxlink(tenDigits) {
  const url = CONFIG.corsProxy + encodeURIComponent(CONFIG.voxlinkApi + tenDigits);
  const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
  if (!response.ok) throw new Error('Ошибка сети');
  const data = await response.json();
  if (!data || !data.operator) throw new Error('Нет данных');
  return {
    operator: data.operator || 'Неизвестно',
    region: data.region || 'Регион не определён',
    code: data.code || tenDigits.slice(0, 3),
    source: 'num.voxlink.ru (Минцифры РФ)',
  };
}

// ========================
// Основная функция поиска
// ========================
async function lookupPhone(normalized) {
  const tenDigits = normalized.replace('+7', '');
  const phoneType = getPhoneType(tenDigits);
  let result = { operator: '—', region: '—', source: '—', code: tenDigits.slice(0, 3) };

  try {
    // Пробуем API
    const apiData = await fetchFromVoxlink(tenDigits);
    result = { ...result, ...apiData, type: phoneType };
  } catch (e) {
    // Fallback: встроенная база
    const localData = lookupInLocalDB(tenDigits);
    result = { ...result, ...localData, type: phoneType };
  }

  return result;
}

// ========================
// История поиска (localStorage)
// ========================
function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem('phoneHistory') || '[]');
  } catch {
    return [];
  }
}

function saveToHistory(phone, result) {
  let history = loadHistory();
  // Удаляем дубликат если есть
  history = history.filter(h => h.phone !== phone);
  history.unshift({
    phone,
    operator: result.operator,
    region: result.region,
    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }),
  });
  if (history.length > CONFIG.historyMax) history = history.slice(0, CONFIG.historyMax);
  localStorage.setItem('phoneHistory', JSON.stringify(history));
}

function renderHistory() {
  const history = loadHistory();
  const section = document.getElementById('historySection');
  const list = document.getElementById('historyList');

  if (history.length === 0) {
    section.classList.remove('active');
    return;
  }

  section.classList.add('active');
  list.innerHTML = history.map(item => `
    <li class="history-item" onclick="searchFromHistory('${item.phone}')">
      <span class="history-phone">📞 ${item.phone}</span>
      <span class="history-meta">${item.operator}<br/>${item.date} ${item.time}</span>
    </li>
  `).join('');
}

function searchFromHistory(phone) {
  document.getElementById('phoneInput').value = phone;
  handleSearch();
}

// ========================
// UI функции
// ========================
function showLoading(show) {
  document.getElementById('loading').classList.toggle('active', show);
  document.getElementById('resultCard').classList.toggle('active', !show && document.getElementById('resultCard').dataset.hasResult === 'true');
}

function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  setTimeout(() => { el.textContent = ''; }, 4000);
}

function showResult(normalized, data) {
  const card = document.getElementById('resultCard');
  card.dataset.hasResult = 'true';
  card.classList.add('active');

  document.getElementById('resultNumber').textContent = formatPhone(normalized);
  document.getElementById('resultOperator').textContent = data.operator || '—';
  document.getElementById('resultRegion').textContent = data.region || '—';
  document.getElementById('resultType').textContent = data.type || '—';
  document.getElementById('resultCode').textContent = '+7' + data.code;
  document.getElementById('resultSource').textContent = data.source || '—';
}

function copyResult() {
  const number = document.getElementById('resultNumber').textContent;
  const operator = document.getElementById('resultOperator').textContent;
  const region = document.getElementById('resultRegion').textContent;
  const type = document.getElementById('resultType').textContent;
  const text = `Номер: ${number}\nОператор: ${operator}\nРегион: ${region}\nТип: ${type}`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✅ Скопировано';
    setTimeout(() => { btn.textContent = '📋 Копировать'; }, 2000);
  });
}

// ========================
// Автоформатирование ввода
// ========================
function formatInput(e) {
  let val = e.target.value.replace(/\D/g, '');
  if (val.startsWith('8')) val = '7' + val.slice(1);
  if (val.startsWith('7')) {
    val = val.slice(0, 11);
    let fmt = '+7';
    if (val.length > 1) fmt += ' (' + val.slice(1, 4);
    if (val.length >= 4) fmt += ') ' + val.slice(4, 7);
    if (val.length >= 7) fmt += '-' + val.slice(7, 9);
    if (val.length >= 9) fmt += '-' + val.slice(9, 11);
    e.target.value = fmt;
  }
}

// ========================
// Основной обработчик поиска
// ========================
async function handleSearch() {
  const input = document.getElementById('phoneInput').value.trim();
  const normalized = normalizePhone(input);

  if (!normalized) {
    showError('Введите корректный российский номер телефона (+7 или 8, 11 цифр)');
    return;
  }

  document.getElementById('errorMsg').textContent = '';
  document.getElementById('resultCard').classList.remove('active');
  document.getElementById('resultCard').dataset.hasResult = 'false';
  showLoading(true);

  try {
    const result = await lookupPhone(normalized);
    showLoading(false);
    showResult(normalized, result);
    saveToHistory(formatPhone(normalized), result);
    renderHistory();
  } catch (e) {
    showLoading(false);
    showError('Ошибка при поиске. Проверьте интернет-соединение.');
  }
}

// ========================
// Тёмная / светлая тема
// ========================
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  document.getElementById('themeToggle').textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
}

// ========================
// Инициализация приложения
// ========================
function init() {
  // Восстановить тему
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('themeToggle').textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // Навесить обработчики
  document.getElementById('searchBtn').addEventListener('click', handleSearch);
  document.getElementById('phoneInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
  });
  document.getElementById('phoneInput').addEventListener('input', formatInput);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('copyBtn').addEventListener('click', copyResult);
  document.getElementById('clearHistory').addEventListener('click', () => {
    localStorage.removeItem('phoneHistory');
    renderHistory();
  });

  // Загрузить историю
  renderHistory();
}

// Запуск
document.addEventListener('DOMContentLoaded', init);
