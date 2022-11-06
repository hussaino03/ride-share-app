import React from "react";
import { useState,useRef } from "react";
import { useSelector } from "react-redux";
import { createRide } from "../../../actions/ride";
import { OutlinedInput } from "@mui/material";
import VerticalTabPanel from "../../../components/VerticalTabPanel";
import { TypeAnimation } from 'react-type-animation';
import AddressInput from '../../../components/AddressInput'
import "./Passenger.css";
import { usePlacesWidget } from "react-google-autocomplete";
import {ToAddressInput, FromAddressInput } from '../../../components/AddressInput'

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

  

  // const { ref2, autocompleteRef2 } = usePlacesWidget({
  //   apiKey:'AIzaSyC29cXScND5E-qFq8PFc0yblvl-ZL5JGh8',
  //   onPlaceSelected: (place) => {
  //     console.log(place);
  //   }
  // });
  const { auth } = useSelector((state) => ({ ...state }));
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [age, setAge] = useState(18);
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("UIH")
    console.log("TO", toDestination)
    console.log("FROM", fromDestination)
  };
  return (
    <>
{/* <nav className="navbar bg-dark">
  <div className="container-fluid">
  </div>
</nav> */}

      <div className="passenger">
        <div className="passengerLeft">
        <div className="fade-in-text">
    

          <h1 style={{ fontSize: 30, marginLeft: 10, marginTop: 10 }}>
            Welcome
          </h1>
          </div>
          <h2 style={{ fontSize: 24, marginLeft: 10 }}>{auth?.user?.name}</h2>

          <div style={{ marginTop: 40 }}>

              <div>
                {/* <h1 style={{ fontSize: 24 }}>From destination</h1>
                <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="To"
                  type="location"
                  ref={ref}
                /> */}

              </div>
              <div>
                <h1 style={{ fontSize: 24 }}>Starting Address</h1>
                {/* <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="From"
                  type="location"
                  ref={ref}
                /> */}

                <FromAddressInput fD={fromDestination} setFD={setFromDestination}  />



 <h1 style={{ fontSize: 24 }}>Ending Address</h1>
                {/* <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="To"
                  type="location"
                  ref={ref2}
                /> */}
                <ToAddressInput tD={toDestination} setTD={setToDestination} />

              </div><form onSubmit={handleSubmit}>
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
          <VerticalTabPanel />

          {/* From: {fromDestination} */}
      </div>
      </div>
      </>
  );
};

export default Passenger;
