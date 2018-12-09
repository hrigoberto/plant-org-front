import axios from 'axios';

require('dotenv').config();
const prodURL = process.env.REACT_APP_PROD_URL
const localURL = 'http://localhost:4000/api/plants'

export default axios.create({
  baseURL: prodURL
});
