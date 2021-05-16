import axios from "axios";


export const api = axios.create({
    // baseURL: "http://localhost:3200"
    baseURL: "https://secret-be.herokuapp.com"
});

