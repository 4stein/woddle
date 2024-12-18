import axios from 'axios';
import {API_URL} from '../constants';

export const API = async (url: string) => {
  try {
    const response = await axios.get(`${API_URL}${url}`);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error; // show error message
  }
};
