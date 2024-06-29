import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'http://localhost:3000/educational_podcast', 
  // baseURL: "http://hybrid.srishticampus.in/educational_podcast_api/",

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance