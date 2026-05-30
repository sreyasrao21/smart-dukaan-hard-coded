import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = async (userData: {
    name: string;
    email: string;
    username: string;
    phoneNumber: string;
    password: string;
}) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

export const login = async (userData: {
    username: string;
    password: string;
}) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};

export const getProducts = async (shopKeeperId: string)=>{
    const response = await axios.get(`http://localhost:5000/api/products/${shopKeeperId}`);
    return response.data;
};