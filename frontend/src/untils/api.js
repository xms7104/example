import axios from 'axios';

const api = {
    hostname: `http://localhost:3001/api`,
    async registerUser(data) {
      const response = await axios.post(`${this.hostname}/user`, data, {
        headers: {
          'Content-type': 'application/json',
          'if-none-match': '',
        },
      });
      return response.data;
    },
    async getUser() {
      const response = await axios.get(`${this.hostname}/user`, {
        headers: {
          'Content-type': 'application/json',
          'if-none-match': '',
        },
      });
      return response.data;
    },
    async editUser(data) {
      const response = await axios.put(`${this.hostname}/user/${data.id}`, data, {
        headers: {
          'Content-type': 'application/json',
          'if-none-match': '',
        },
      });
      return response.data;
    },
  
    async deleteUser(data) {
      const response = await axios.delete(`${this.hostname}/user/${data.id}`, {
        headers: {
          'Content-type': 'application/json',
          'if-none-match': '',
        },
        data: JSON.stringify(data),
      });
      return response.data;
    },
  };
  export default api;
  