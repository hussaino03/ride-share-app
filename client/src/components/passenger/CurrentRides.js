import React, { useState, useEffect } from "react";
import Map from "../Map";
import { getRide } from "../../actions/ride";
import {getUser} from '../../actions/auth'

const CurrentRides = ({ tD, fD}) => {

  const [rideState, setRideState] = useState("");
  const [rideDetails, setRideDetails] = useState({});
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("auth"));

  //   async function fetchUser() {
  //     let user = await getUser(userId);
  //     user = user.data;
  //     console.log("Fetch user: " , user);
  //     if(!user.rideId){
  //       console.log("No ride");
  //       setRideState("noRide");
  //       return;
  //     }

  //     let ride = await getRide(user.rideId);
  //     console.log("Ride details ", ride.data);
  //     setRideDetails(ride.data);

  //     if(!ride?.data?.driverId){
  //       setRideState("waiting");
  //       return;
  //     }
      
  //     setRideState("confirmed");
     
      
  //   }
  //   setTimeout(() => {
  //     // fetchUser();
  //   }, 5000);

  // }, []);

  return (
    rideState == "noRide" ? <div><h3>No ride currently</h3></div> 
: 
    rideState == "waiting" ? (
        <div>
          <h3>Waiting for driver</h3>
          <Map tD={tD} fD={fD} />

        </div>
    ) : 
    rideState == "confirmed" ? (
      <div>
        <h3>Ride confirmed</h3>
      </div>
    ) : (
      <div>
          {tD !== null && fD !== null && <Map tD={tD} fD={fD} />  }

      </div>

    )

  )
};

export default CurrentRides;





