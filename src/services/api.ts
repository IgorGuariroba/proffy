import axios from 'axios';
import dotenv from 'dotenv'


const api = axios.create({
  baseURL: process.env.URL_API || "http://localhost:3333",
});


export default api;