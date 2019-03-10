import axios from "axios";


export default {
//gets all users
  getUsers: function (userData) {
    return axios.get("/api/users", userData);
  },
  //gets a user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },

  saveUser: function (userData) {
    return axios.post("/api/users", userData)
    
      }
};