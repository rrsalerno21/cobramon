import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (restaurant_name, email, password, table_count) => {
    return axios.post("api/signup", {
      restaurant_name: restaurant_name,
      email: email,
      password: password,
      table_count: table_count,
    });
  },
  sendMessage: (company_id, table_id, message) => {
    return axios.post("api/sendMessage", {
      company_id: company_id,
      table_id: table_id,
      message: message,
    });
  },
  getMessages: (company_id, table_num) => {
    return axios.get(`api/getMessages/${company_id}/${table_num}`);
  },
};
