import axios from "axios";

export const createRide = async (user) =>
  await axios.post(`http://localhost:8080/api/create-ride`, user);


export const getRide = async (rideId) => {
    const res = await axios.get(`http://localhost:8080/api/get-ride/` + rideId);
    return res;
};


export const getSuggestedRides = async (driverId) => {
  const res = await axios.get(`http://localhost:8080/api/get-suggested-ride/` + driverId);
  return res;
}