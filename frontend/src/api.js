import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}api/jobs`,
  // ✅ Removed the extra slash before 'api/jobs'
});

export default API;
