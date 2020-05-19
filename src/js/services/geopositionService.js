import axios from 'axios';

navigator.geolocation.getCurrentPosition(success);

function success(position) {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const coordinates = position.coords;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude}+${coordinates.longitude}&key=${apiKey}`;

  return axios.get(url).then(data => console.log(data));
}
