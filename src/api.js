import axios from "axios";

const api =  (endpoint, param) => {
    return axios.get(`${endpoint}${param}`);
};

export default api;
