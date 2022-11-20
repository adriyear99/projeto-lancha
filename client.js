import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://54.84.178.96:3000',
});