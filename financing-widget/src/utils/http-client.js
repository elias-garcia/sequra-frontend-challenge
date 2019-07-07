import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': process.env.REACT_APP_API_CONTENT_TYPE,
  },
});

export default httpClient;
