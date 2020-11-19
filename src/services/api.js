import axios from 'axios';

const api = axios.create({
  baseURL: 'https://remotecontroller.herokuapp.com/',
});

export default api;
