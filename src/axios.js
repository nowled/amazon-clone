import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-igotfiveonit-87979.cloudfunctions.net/api',
});

export default instance;

// http://localhost:5001/igotfiveonit-87979/us-central1/api
