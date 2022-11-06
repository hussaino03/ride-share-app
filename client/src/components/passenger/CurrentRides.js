import React, { useState, useEffect } from "react";
import { getUser } from "../../actions/auth";

const CurrentRides = () => {
  const [rideState, setRideState] = useState("noRide");
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("auth"));
    const userId = items.user._id;

    async function fetchUser() {
      let user = await getUser(userId);
      // if(user.)
    }
  }, []);

  return <div>CurrentRides</div>;
};

export default CurrentRides;
