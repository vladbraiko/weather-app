import refs from './refs.js';
import storage from './cityService.js';
import updateButtons from '../template/favorite-cities.hbs';
import addCity from '../template/oneCity.hbs';
import Siema from 'siema';

createButtons(getLocalStorage());

refs.addToLocalStorageBtn.addEventListener('click', () => {
  addToLocalStorage();
});

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

  const addNewButton = addCity(city);
  const newElement = document.createElement('div');

  newElement.innerHTML = addNewButton;

  mySiema.append(newElement);
}

refs.listOfButtons.addEventListener('click', event => {
  if (event.target.nodeName === 'path') {
    const textContent = event.path[3].childNodes[1].textContent;
    const indexForRemove = storage.favoriteCities.indexOf(textContent);

    mySiema.remove(indexForRemove);

    storage.favoriteCities.splice(indexForRemove, 1);

    localStorage.setItem('city', JSON.stringify(storage.favoriteCities));
  }

  
});

const mySiema = new Siema({
  selector: refs.listOfButtons,
  perPage: {
    279: 2,
    767: 4,
    1119: 4,
  },
  duration: 200,
  draggable: false,
  multipleDrag: false,
  threshold: 20,
  loop: false,
});

refs.btnPrev.addEventListener('click', () => mySiema.prev());
refs.btnNext.addEventListener('click', () => mySiema.next());

function clearClass() {
  refs.addToLocalStorageBtn.classList.remove('search-location__form-btn-focus');
}

function getLocalStorage() {
  const arrayOfCities = localStorage.getItem('city');

  if (!arrayOfCities) {
    return;
  }

  const parsedCities = JSON.parse(arrayOfCities);
  storage.favoriteCities = parsedCities;

  return parsedCities;
}

function createButtons(cities) {
  const markup = updateButtons(cities);

  refs.listOfButtons.insertAdjacentHTML('beforeend', markup);
}
