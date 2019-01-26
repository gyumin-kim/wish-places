import axios from 'axios';

const API_SERVER = 'http://panleeee.me';

export const fetchSearchPlace = (keyword, coords) => {
  return axios.post(`${API_SERVER}/search`, {
    keyword, coords,
  });
};