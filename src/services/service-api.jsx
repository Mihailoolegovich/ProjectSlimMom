import axios from 'axios';
axios.defaults.baseURL = `https://weightbusters-api.herokuapp.com`;

const apiService = {
  logInUser(credentials) {
    return axios.post(`/auth/login`, credentials);
  },

  registerUser(credentials) {
    return axios.post(`/auth/registration`, credentials);
  },

  logOutUser() {
    return axios.post(`/auth/logout`);
  },
};

export default apiService;
