const debounce = require('lodash.debounce');
import cityList from '../json/city.list.json';
const searchInput = document.querySelector('#js-search');

// Слушаем поиск и даем подсказку по названию города
const inputСorrection = value => {
  const arr = cityList.map(e => e.name).filter(e => e.indexOf(value) !== -1);
  if (arr.length <= 5) {
    console.log(arr);
  }
};

searchInput.addEventListener(
  'input',
  debounce(() => inputСorrection(searchInput.value), 500),
);
