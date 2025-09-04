import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:5000', // Change if your backend runs on a different port
	withCredentials: true,
});

export default API;
