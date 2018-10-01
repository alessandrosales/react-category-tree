import axios from 'axios';

export const fetchCategories = () => axios.get('http://localhost:3000/categories');
export const postCategory = (data) => axios.post('http://localhost:3000/categories', data);