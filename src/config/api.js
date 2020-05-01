import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const setAuthToken = token => {
  API.defaults.headers.common['Authorization'] = `${token}`;
};
