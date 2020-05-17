import axios from 'axios';
import refs from '../refs';

export default {
  searchQuery: 'kiev',

  makeQuery() {
    const apiKey = '16192319-9ae9d95026dacaeb88e2fcf6c';
    const url = `https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=${this.query}&per_page=7&key=${apiKey}`;

    return axios.get(url).then(({ data: { hits } }) => {
      return hits;
    });
  },

  setReserveImage() {
    refs.backgroundWrapper.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url('../../img/clouds.jpg') center; background-size: cover;`;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
