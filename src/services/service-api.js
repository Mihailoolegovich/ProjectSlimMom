import axios from 'axios';
axios.defaults.baseURL = ``;

const apiService = {
  getCurrentUser() {
    return axios.get(`/users/current`);
  },

  getnotAllowedProducts(bloodGroup) {
    return axios.get(`/products/recommendation?bloodGroup=${bloodGroup}`);
  },

  logInUser(credentials) {
    return axios.post(`/users/login`, credentials);
  },

  registerUser(credentials) {
    return axios.post(`/users/registration`, credentials);
  },

  logOutUser() {
    return axios.post(`/users/logout`);
  },
};

export default apiService;
