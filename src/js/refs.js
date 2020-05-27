const searchInput = document.querySelector('.search-location__form');
const backgroundWrapper = document.querySelector('.background-wrapper');
const addToLocalStorageBtn = document.querySelector(
  '.search-location__form-btn',
);
const form = document.querySelector('.search-form');
const listOfButtons = document.querySelector('.search-location__slider-list');
const btnPrev = document.querySelector('.search-location__slider-btnPrev');
const btnNext = document.querySelector('.search-location__slider-btnNext');
const btnShowChart = document.querySelector('.show-chart-btn-js');
const btnHideChart = document.querySelector('.hide-chart-btn-js');
const headerOfShowChart = document.querySelector('.show-chart-header-js');
const headerOfHideChart = document.querySelector('.hide-chart-header-js');
const boxOfShowChart = document.querySelector('.show-chart-box');
const chartBox = document.querySelector('.chart-box');

export default {
  searchInput,
  backgroundWrapper,
  addToLocalStorageBtn,
  form,
  listOfButtons,
  btnPrev,
  btnNext,
  btnShowChart,
  btnHideChart,
  headerOfShowChart,
  headerOfHideChart,
  boxOfShowChart,
  chartBox,
};
