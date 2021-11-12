import axios from "axios";

const api =  (endpoint, param) => {
    console.log(`${endpoint}${param}`);
    return axios.get(`${endpoint}${param}`);
};

export default api;
