const searchInput = document.querySelector('.search-location__form');
const backgroundWrapper = document.querySelector('.background-wrapper');
const addToLocalStorageBtn = document.querySelector(
  '.search-location__form-btn',
);
const form = document.querySelector('.search-form');
const listOfButtons = document.querySelector('.search-location__slider-list');
const btnPrev = document.querySelector('.search-location__slider-btnPrev');
const btnNext = document.querySelector('.search-location__slider-btnNext');

export default {
  searchInput,
  backgroundWrapper,
  addToLocalStorageBtn,
  form,
  listOfButtons,
  btnPrev,
  btnNext,
};
