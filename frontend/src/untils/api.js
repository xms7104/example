const api = {
    hostname: `http://localhost:3001/api`,
    async registerUser(data) {
      const response = await fetch(`${this.hostname}/user`, {
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-type": "application/json",
          "if-none-match": "",
        }),
        method: "POST",
      });
      return await response.json();
    },
    async getUser(){
      const response = await fetch(`${this.hostname}/user`, {
        headers: new Headers({
          "Content-type": "application/json",
          "if-none-match": "",
        }),
        method: "GET",
      });
      return await response.json();
    },
    async editUser(data) {
      const response = await fetch(`${this.hostname}/user/${data.id}`, {
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-type": "application/json",
          "if-none-match": "",
        }),
        method: "PUT",
      });
      return await response.json();
    },
    async deleteUser(data) {
      const response = await fetch(`${this.hostname}/user/${data.id}`, {
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-type": "application/json",
          "if-none-match": "",
        }),
        method: "DELETE",
      });
      return await response.json();
    },
  };
  export default api;
  