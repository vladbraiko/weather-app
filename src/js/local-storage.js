import refs from './refs.js';
const favoriteSities = [];

refs.addToLocalStorageBtn.addEventListener('click', addToLocalStorage);

function addToLocalStorage() {
  const city = refs.form.value;
  refs.addToLocalStorageBtn.classList.add('search-location__form-btn-focus');

  favoriteSities.push(city);
  localStorage.setItem('city', JSON.stringify(favoriteSities));
  refs.form.value = '';

  setTimeout(clearClass, 800);
}

function clearClass() {
  refs.addToLocalStorageBtn.classList.remove('search-location__form-btn-focus');
}
