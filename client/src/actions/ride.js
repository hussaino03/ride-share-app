import axios from "axios";

export const createRide = async (user) =>
  await axios.post(`http://localhost:8080/api/create-ride`, user);
