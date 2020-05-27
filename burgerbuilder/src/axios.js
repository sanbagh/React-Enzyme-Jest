import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://burgerbuilder-7ed99.firebaseio.com/',
});
export default instance;
