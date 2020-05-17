// DOM переменные
const form = document.querySelector('.search-location__form');
const btnFiveDays = document.querySelector('.btn-5-days-js');
const btnOneDay = document.querySelector('.btn-today-js');
const btnMoreInfo = document.querySelector('#js-btn-more-info');
const contentBox = document.querySelector('.content-box');
const btnBox = document.querySelector('.btn-box');
const part2 = document.querySelector('.part2');
const part3 = document.querySelector('.part3');
const dateSunriseTime = document.querySelector('.date__sunrise--time');
const dateSunsetTime = document.querySelector('.date__sunset--time');

// Переменные для обработки погоды
let searchName = '';
let req = '';
let oneDayData = {};
let fiveDayData = {};

// Шаблоны
import oneDayTemp from '../template/oneday.hbs';

// Рендер времени заката и восхода
function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
const renderSunTime = (sunrise, sunset) => {
  const sunriseHours = addZero(sunrise.getHours());
  const sunriseMinutes = addZero(sunrise.getMinutes());
  const sunsetHours = addZero(sunset.getHours());
  const sunsetMinutes = addZero(sunset.getMinutes());
  dateSunriseTime.textContent = sunriseHours + ':' + sunriseMinutes;
  dateSunsetTime.textContent = sunsetHours + ':' + sunsetMinutes;
};

// Рендерим погоду на один день
const renderOneDayWeather = data => {
  if (!document.querySelector('.temperature-box')) {
    contentBox.insertAdjacentHTML('afterbegin', oneDayTemp(data));
    renderSunTime(oneDayData.sunrise, oneDayData.sunset);
    part2.style.display = 'flex';
    part3.style.display = 'flex';
    btnBox.style.display = 'block';
  } else {
    document.querySelector('.temperature-box').remove();
    contentBox.insertAdjacentHTML('afterbegin', oneDayTemp(data));
  }
};

// Рендерим погоду на 5 дней
const renderFiveDaysWeather = data => {
  document.querySelector('.temperature-box').remove();
};

// Получаем правильную ссылку
function GetOWM_Request(RequestType, Location) {
  const OWM = 'https://api.openweathermap.org/data/2.5/';
  const apiKey = '48f3906fa74131a752b29b56bb64ec12';
  return OWM + RequestType + '?q=' + Location + '&appid=' + apiKey;
}

// Делаем запрос на сервер и получаем данные
const getWeatherData = async OWM => {
  try {
    const result = await fetch(OWM);
    return result.json();
  } catch (err) {
    throw err;
  }
};

// Обрабатываем данные и записываем в свои локальные
const dataHandling = (days, OWMData) => {
  if (days == 'one') {
    oneDayData.temp = Math.floor(OWMData.main.temp - 273.15);
    oneDayData.tempMin = Math.floor(OWMData.main.temp_min - 273.15);
    oneDayData.tempMax = Math.floor(OWMData.main.temp_max - 273.15);
    oneDayData.city = OWMData.name;
    oneDayData.countryCode = OWMData.sys.country;
    oneDayData.sunrise = new Date(OWMData.sys.sunrise * 1000);
    oneDayData.sunset = new Date(OWMData.sys.sunset * 1000);

    renderOneDayWeather(oneDayData);
    console.log(oneDayData);
  }
  if (days == 'five') {
    fiveDayData.city = OWMData.city.name;
    fiveDayData.countryCode = OWMData.city.country;
    fiveDayData.list = OWMData.list;

    console.log(fiveDayData);
  }
};

// Слушаем submit поля поиска погоды
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  searchName = formData.get('query');

  // Получаем данные за один день и записываем в наш обьект
  req = GetOWM_Request('weather', searchName);
  getWeatherData(req).then(data => dataHandling('one', data));

  // Получаем данные за 5 дней и записываем в наш обьект
  req = GetOWM_Request('forecast', searchName);
  getWeatherData(req).then(data => dataHandling('five', data));
});

// Слушаем кнопку Today
btnOneDay.addEventListener('click', () => renderOneDayWeather(oneDayData));
// Слушаем кнопку 5 Days
btnFiveDays.addEventListener('click', () => renderFiveDaysWeather(fiveDayData));
