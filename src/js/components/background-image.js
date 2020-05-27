import refs from '../refs';
import backgroundImageService from '../services/background-image-service';

backgroundImageService.makeQuery().then(setBackgroundImage); // Установка дефолтного фона при первой загрузке

refs.searchInput.addEventListener('submit', changeBackgroundImage);

function changeBackgroundImage(event) {
  event.preventDefault();

  const form = event.currentTarget;
  backgroundImageService.query = form.elements.query.value;

  backgroundImageService.makeQuery().then(setBackgroundImage);
}

function setBackgroundImage(backgroundImages) {
  if (backgroundImages.length === 0) {
    backgroundImageService.query = 'cloudy';
    backgroundImageService.makeQuery().then(setBackgroundImage);
  } else {
    refs.backgroundWrapper.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${backgroundImages[3].largeImageURL}') center fixed; background-size: cover;`;
  }
}

export { setBackgroundImage };
