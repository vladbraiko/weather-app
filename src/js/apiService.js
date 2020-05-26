// Переменные для пагинов
const moment = require('moment-timezone');

// DOM переменные
const form = document.querySelector('.search-location__form');
const btnFiveDays = document.querySelectorAll('.btn-5-days-js');
const btnOneDay = document.querySelectorAll('.btn-today-js');
const contentBox = document.querySelector('.today-box');
const part6 = document.querySelector('.moreInfo');
const dateSunriseTime = document.querySelector('.date__sunrise--time');
const dateSunsetTime = document.querySelector('.date__sunset--time');
const daysFiveListblock = document.querySelector('.days-list');
const moreInfoBlock = document.querySelector('.moreInfo__block');
const part2City = document.querySelector('.today-city');
const fiveDaysContaineerCityName = document.querySelector(
  '.five-days-containeer__city-name',
);
const todayContainer = document.querySelector('.today-container');
const fiveDaysContainer = document.querySelector('.five-days-container');

// Переменные для обработки погоды
let location = '';
let req = '';
let oneDayData = {};
let fiveDayData = {};
let moreInfoData = {};

// Шаблоны
import oneDayTemp from '../template/oneday.hbs';
import fiveDayTemp from '../template/fivedays.hbs';
import moreInfoTemp from '../template/moreInfo.hbs';

// Переменные для api
const OWM = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '48f3906fa74131a752b29b56bb64ec12';

// Получаем правильную ссылку
const GetOWM_Request = RequestType =>
  OWM + RequestType + '?q=' + location + '&appid=' + apiKey;

// Делаем запрос на сервер и получаем данные
const getWeatherData = async OWM => {
  try {
    const result = await fetch(OWM);
    return result.json();
  } catch (err) {
    throw err;
  }
};

// Рендер времени заката и восхода
function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
const renderSunTime = (sunrise, sunset) => {
  sunrise = moment(sunrise).utcOffset(oneDayData.timezone / 60);
  sunset = moment(sunset).utcOffset(oneDayData.timezone / 60);
  const sunriseHours = addZero(sunrise.hours());
  const sunriseMinutes = addZero(sunrise.minutes());
  const sunsetHours = addZero(sunset.hours());
  const sunsetMinutes = addZero(sunset.minutes());
  dateSunriseTime.textContent = sunriseHours + ':' + sunriseMinutes;
  dateSunsetTime.textContent = sunsetHours + ':' + sunsetMinutes;
};

// Рендерим погоду на один день
const renderOneDayWeather = data => {
  if (!document.querySelector('.temperature-box')) {
    part6.classList.add('isHiden');
    contentBox.insertAdjacentHTML('afterbegin', oneDayTemp(data));
    renderSunTime(oneDayData.sunrise, oneDayData.sunset);
    todayContainer.classList.remove('isHiden');
    fiveDaysContainer.classList.add('isHiden');
  } else {
    document.querySelector('.temperature-box').remove();
    contentBox.insertAdjacentHTML('afterbegin', oneDayTemp(data));
    renderSunTime(oneDayData.sunrise, oneDayData.sunset);
  }
};

// Рендерим погоду на 5 дней
const renderFiveDaysWeather = data => {
  if (document.querySelector('.temperature-box')) {
    document.querySelector('.temperature-box').remove();
    todayContainer.classList.add('isHiden');
    fiveDaysContainer.classList.remove('isHiden');
    part2City.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
    fiveDaysContaineerCityName.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
  }
  const daysListItem = document.querySelectorAll('.days-list__item');
  if (daysListItem) {
    daysListItem.forEach(e => e.remove());
  }
  daysFiveListblock.innerHTML += fiveDayTemp(data);
};

// Рендерим more info
const renderMoreInfo = target => {
  part6.classList.remove('isHiden');
  const day = Number(target.dataset.day);
  const moreDaysListItem = document.querySelectorAll('.timeWeather');
  if (moreDaysListItem) {
    moreDaysListItem.forEach(e => e.remove());
  }
  const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);
  moreInfoBlock.innerHTML += moreInfoTemp(currentMoreInfo.forecast);
  console.log(currentMoreInfo);
};

// Получаем день недели
const weekDayNow = data => {
  const date = new Date(data * 1000).getDay();
  const weekDay = new Intl.DateTimeFormat('en', {weekday: 'long' }).format(date);
  return weekDay;
};

// Получаем месяц
const monthNow = data => {
  const date = new Date(data * 1000).getMonth();
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  return month;
};

// Получаем обьект icon data
const getIconData = data => {
  const date = new Date(data[0].dt * 1000);
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(12);
  const getTimeObj = data.find(e => e.dt == date.getTime() / 1000);
  const iconInfo = {};
  if (getTimeObj) {
    const weather = getTimeObj.weather[0];
    const icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    iconInfo.icon = icon;
    iconInfo.iconDescription = weather.description;
    return iconInfo;
  } else {
    let weather = {};
    if (data[3]) {
      weather = data[3].weather[0];
    } else {
      weather = data[0].weather[0];
    }
    const icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    iconInfo.icon = icon;
    iconInfo.iconDescription = weather.description;
    return iconInfo;
  }
};

// Расчет мин/макс температуры
const mathTemp = data => {
  data = data.map(e => Math.floor(e.main.temp - 273.15));
  const temp = {
    TempMin: Math.min(...data),
    TempMax: Math.max(...data),
  };
  return temp;
};

// Маппинг данных на 5 дней
const getDate = data => new Date(data.dt * 1000).getDate();
const mappingData = response => {
  const dates = response.list
    .map(element => getDate(element))
    .filter((el, idx, arr) => arr.indexOf(el) === idx);
  const list = dates
    .map(el => response.list.filter(elem => getDate(elem) === el))
    .map(element => ({
      DayNum: getDate(element[0]),
      Day: weekDayNow(element[0].dt),
      Month: monthNow(element[0].dt),
      date: element[0].dt,
      icon: getIconData(element),
      forecast: element,
      temp: mathTemp(element),
    }));
  if (list[5]) {
    list.shift();
  }
  const changedData = {
    ...response,
    list,
  };
  return changedData;
};

// Конвертация в цельсий
const conToCel = data => Math.floor(data - 273.15);
// Получить текущее время
const getCurrentTime = data => {
  const dataTime = new Date(data * 1000);
  return addZero(dataTime.getHours()) + ':' + addZero(dataTime.getMinutes());
};
// Обработка и запись данных в локальные переменные
const dataHandling = async (days, OWMData) => {
  if (days == 'one') {
    const main = OWMData.main;
    const sys = OWMData.sys;
    const weather = OWMData.weather[0];
    oneDayData.city = OWMData.name;
    oneDayData.countryCode = OWMData.sys.country;
    oneDayData.temp = conToCel(main.temp);
    oneDayData.tempMin = conToCel(main.temp_min);
    oneDayData.tempMax = conToCel(main.temp_max);
    oneDayData.sunrise = new Date(sys.sunrise * 1000);
    oneDayData.sunset = new Date(sys.sunset * 1000);
    oneDayData.icon =
      'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    oneDayData.iconDescription = weather.description;
    oneDayData.timezone = OWMData.timezone;

    renderOneDayWeather(oneDayData);
  }
  if (days == 'five') {
    fiveDayData = mappingData(OWMData);
    moreInfoData = fiveDayData.list.map(e => ({
      DayNum: e.DayNum,
      forecast: e.forecast.map(e => ({
        time: getCurrentTime(e.dt),
        temp: Math.floor(e.main.temp - 273.15),
        humidity: e.main.humidity,
        pressure: e.main.pressure,
        speed: e.wind.speed.toFixed(1),
        icon: 'http://openweathermap.org/img/wn/' + e.weather[0].icon + '.png',
        iconDescription: e.weather[0].description,
      })),
    }));
  }
};

// Слушаем submit поля поиска погоды
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Получаем данные с формы
  const formData = new FormData(this);
  location = formData.get('query');

  // Получаем данные за один день
  req = GetOWM_Request('weather');
  getWeatherData(req).then(data => dataHandling('one', data));

  // Получаем данные за 5 дней
  req = GetOWM_Request('forecast');
  getWeatherData(req).then(data => dataHandling('five', data));
});

// Слушаем кнопки Today
btnOneDay[0].addEventListener('click', () => renderOneDayWeather(oneDayData));
btnOneDay[1].addEventListener('click', () => renderOneDayWeather(oneDayData));
// Слушаем кнопки 5 Days
btnFiveDays[0].addEventListener('click', () =>
  renderFiveDaysWeather(fiveDayData),
);
btnFiveDays[1].addEventListener('click', () =>
  renderFiveDaysWeather(fiveDayData),
);
// Слушаем кнопку more info
daysFiveListblock.addEventListener('click', handleBtnMIClick);

function handleBtnMIClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName == 'BUTTON') {
    renderMoreInfo(target);
  }
}

const defaultReqWeather = searchName => {
  location = searchName || 'Kyiv';

  // Получаем данные за один день и записываем в наш обьект
  req = GetOWM_Request('weather');
  getWeatherData(req).then(data => dataHandling('one', data));

  // Получаем данные за 5 дней и записываем в наш обьект
  req = GetOWM_Request('forecast');
  getWeatherData(req).then(data => dataHandling('five', data));
};

defaultReqWeather();

export { defaultReqWeather, oneDayData };
