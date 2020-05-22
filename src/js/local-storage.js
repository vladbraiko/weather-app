import refs from './refs.js';
import storage from './cityService.js';
import updateButtons from '../template/favorite-cities.hbs';

createButtons(getLocalStorage());

refs.addToLocalStorageBtn.addEventListener('click', () => {
  addToLocalStorage();
  createButtons(getLocalStorage());
});

//
function addToLocalStorage() {
  const city = refs.form.value;

  if (!city) {
    return;
  }

  refs.addToLocalStorageBtn.classList.add('search-location__form-btn-focus');
  storage.favoriteCities.push(city);

  localStorage.setItem('city', JSON.stringify(storage.favoriteCities));
  refs.form.value = '';

  setTimeout(clearClass, 800);
}

//
//
function clearClass() {
  refs.addToLocalStorageBtn.classList.remove('search-location__form-btn-focus');
}

//
//
function createButtons(cities) {
  const markup = updateButtons(cities);

  refs.listOfButtons.innerHTML = markup;
}

//
//
function getLocalStorage() {
  const arrayOfCities = localStorage.getItem('city');

  if (!arrayOfCities) {
    return;
  }

  const parsedCities = JSON.parse(arrayOfCities);
  storage.favoriteCities = parsedCities;

  return parsedCities;
}
