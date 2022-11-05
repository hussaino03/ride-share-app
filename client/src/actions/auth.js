import axios from "axios";

export const register = async (user) =>
  await axios.post(`http://localhost:8080/api/register`, user);

export const login = async (user) =>
  await axios.post(`http://localhost:8080/api/login`, user);

export const driver = async (user) =>
  await axios.post(`http://localhost:8080/api/driver`, user);

export const updateUserInLocalStorage = (user, next) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth"));
    auth.user = user;
    localStorage.setItem("auth", JSON.stringify(auth));
    next();
  }
};
