import axios from 'axios';

const API = axios.create({
    baseURL: 'https://student-job-tracker-0u2i.onrender.com/'
  });  

export default API;
