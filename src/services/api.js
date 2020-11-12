import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8090/http://localhost:8080/',
  // baseURL: 'https://cors-anywhere.herokuapp.com/https://remotecontroller.herokuapp.com/',
});

export default api;
