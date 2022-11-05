import React from "react";
import { useState,useRef } from "react";
import { useSelector } from "react-redux";
import { createRide } from "../../../actions/ride";
import { OutlinedInput } from "@mui/material";
import VerticalTabPanel from "../../../components/VerticalTabPanel";
import { TypeAnimation } from 'react-type-animation';
import AddressInput from '../../../components/AddressInput'
import "./Passenger.css";

{/* <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  /> */}
  
const Passenger = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [age, setAge] = useState(18);
  const handleSubmit = () => {
    alert({ fromDestination } + " " + { toDestination } + " " + { age });
  };
  return (
    <>
{/* <nav className="navbar bg-dark">
  <div className="container-fluid">
  </div>
</nav> */}

      <div className="passenger">
        <div className="passengerLeft">
        <div class="fade-in-text">
    

          <h1 style={{ fontSize: 30, marginLeft: 10, marginTop: 10 }}>
            Welcome
          </h1>
          </div>
          <h2 style={{ fontSize: 24, marginLeft: 10 }}>{auth?.user?.name}</h2>

          <div style={{ marginTop: 40 }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <h1 style={{ fontSize: 24 }}>From destination</h1>
                <input
                  onChange={(e) => setFromDestination(e.target.value)}
                  placeholder="From"
                  type="location"
                />

              </div>
              <div>
                <h1 style={{ fontSize: 24 }}>To destination</h1>
                <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="To"
                  type="location"
                />

              </div>
              <div>
                <h1 style={{ fontSize: 24 }}>Age</h1>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  type="number"
                />
              </div>
              <button onClick={handleSubmit} className="submitButton">
                Submit
              </button>
            </form>
          </div>
        </div>
        

      <div className="d-flex" style={{ justifyContent: 'space-between'}}>
          {/* <VerticalTabPanel /> */}
          <AddressInput/>
      </div>
      </div>
      </>
  );
};

export default Passenger;
