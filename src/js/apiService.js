// DOM переменные
const form = document.querySelector('.search-location__form');
const btnToday = document.querySelector('.btn-today-js');
const btnFiveDays = document.querySelector('.btn-5-days-js');
const btnOneDay = document.querySelector('.btn-today-js');
const contentBox = document.querySelector('.content-box');
const btnBox = document.querySelector('.btn-box');
const part2 = document.querySelector('.part2');
const part3 = document.querySelector('.part3');
const part5 = document.querySelector('.five-days-containeer');
const part6 = document.querySelector('.moreInfo');
const dateSunriseTime = document.querySelector('.date__sunrise--time');
const dateSunsetTime = document.querySelector('.date__sunset--time');
const daysFiveListblock = document.querySelector('.days-list');
const moreInfoBlock = document.querySelector('.moreInfo__block');
const part2City = document.querySelector('.part2-city');
const fiveDaysContaineerCityName = document.querySelector(
  '.five-days-containeer__city-name',
);

// Переменные для обработки погоды
let searchName = '';
let req = '';
let oneDayData = {};
let fiveDayData = {};

// Шаблоны
import oneDayTemp from '../template/oneday.hbs';
import fiveDayTemp from '../template/fivedays.hbs';
import moreInfoTemp from '../template/moreInfo.hbs';

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
    part5.style.display = 'none';
    part5.style.borderRadius = '35px';
    part6.style.display = 'none';
    btnBox.style.display = 'block';
    btnToday.style.backgroundColor = '#f7f7f7';
    btnFiveDays.removeAttribute('style');
    part2City.removeAttribute('style');
    part2.classList.add('part2');
    part2.classList.remove('part2-fiveday');
    contentBox.classList.add('content-box');
    contentBox.classList.remove('content-box-fiveday');
    part2City.style.display = 'none';
    part2City.classList.remove('display-block');
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
    btnToday.removeAttribute('style');
    btnFiveDays.style.backgroundColor = '#f7f7f7';
    part2City.removeAttribute('style');
    part2City.classList.add('display-block');
    part2City.textContent = fiveDayData.city + ', ' + fiveDayData.countryCode;
    fiveDaysContaineerCityName.textContent =
      fiveDayData.city + ', ' + fiveDayData.countryCode;
    part2.classList.remove('part2');
    part2.classList.add('part2-fiveday');
    contentBox.classList.remove('content-box');
    contentBox.classList.add('content-box-fiveday');
  }
  const daysListItem = document.querySelectorAll('.days-list__item');
  if (daysListItem) {
    daysListItem.forEach(e => e.remove());
  }
  part3.style.display = 'none';
  part5.style.display = 'block';
  daysFiveListblock.innerHTML += fiveDayTemp(data);
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
const weekDayNow = data => {
  const weekDay = [];
  weekDay[0] = 'Sunday';
  weekDay[1] = 'Monday';
  weekDay[2] = 'Tuesday';
  weekDay[3] = 'Wednesday';
  weekDay[4] = 'Thursday';
  weekDay[5] = 'Friday';
  weekDay[6] = 'Saturday';
  return weekDay[data];
};

const monthNow = data => {
  const month = [];
  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';
  return month[data];
};

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
    fiveDayData.days = [];
    fiveDayData.list.map(e => {
      const dataTime = new Date(e.dt * 1000);
      const arr = fiveDayData.days.map(e => e.DayNum);
      const daysList = {};
      if (arr.indexOf(dataTime.getDate()) == -1) {
        daysList.DayNum = dataTime.getDate();
        daysList.Day = weekDayNow(dataTime.getDay());
        daysList.Month = monthNow(dataTime.getMonth());
        fiveDayData.days.push(daysList);
      }
    });
    fiveDayData.days.map(daysNumber => {
      const arr = fiveDayData.list.filter(e => {
        const dataTime = new Date(e.dt * 1000);
        if (dataTime.getUTCDate() == daysNumber.DayNum) {
          return e;
        }
      });
      if (arr.length == 0) {
        daysNumber.isData = false;
      } else {
        const arrTemp = arr.map(e => Math.floor(e.main.temp - 273.15));
        daysNumber.TempMin = Math.min(...arrTemp);
        daysNumber.TempMax = Math.max(...arrTemp);
        daysNumber.list = arr;
      }
    });
    if (fiveDayData.days[5].isData == false) {
      fiveDayData.days.pop();
    } else {
      fiveDayData.days.shift();
    }
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
// Слушаем кнопку more info
daysFiveListblock.addEventListener('click', handleBtnMIClick);

const renderMoreInfo = target => {
  part5.style.borderRadius = '35px 35px 0 0';
  part6.style.display = 'block';
  const day = Number(target.dataset.day);
  const moreDaysListItem = document.querySelectorAll('.timeWeather');
  if (moreDaysListItem) {
    moreDaysListItem.forEach(e => e.remove());
  }
  fiveDayData.days.forEach(e => {
    if (e.DayNum == day) {
      const moreInfoArr = [];
      e.list.forEach(e => {
        const dataTime = new Date(e.dt * 1000);
        const obj = {};
        obj.time =
          addZero(dataTime.getHours()) + ':' + addZero(dataTime.getMinutes());
        obj.temp = Math.floor(e.main.temp - 273.15);
        obj.humidity = e.main.humidity;
        obj.pressure = e.main.pressure;
        obj.speed = e.wind.speed.toFixed(1);
        moreInfoArr.push(obj);
      });
      moreInfoBlock.innerHTML += moreInfoTemp(moreInfoArr);
    }
  });
};

function handleBtnMIClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName == 'BUTTON') {
    renderMoreInfo(target);
  }
}

// Делаем запрос по умолчанию
const defaultReqWeather = () => {
  searchName = 'Kyiv';

  // Получаем данные за один день и записываем в наш обьект
  req = GetOWM_Request('weather', searchName);
  getWeatherData(req).then(data => dataHandling('one', data));

  // Получаем данные за 5 дней и записываем в наш обьект
  req = GetOWM_Request('forecast', searchName);
  getWeatherData(req).then(data => dataHandling('five', data));
};

defaultReqWeather();
