import React from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { createRide } from "../../../actions/ride";
import { OutlinedInput } from "@mui/material";
import VerticalTabPanel from "../../../components/VerticalTabPanel";
import { createConnectAccount } from '../../../actions/stripe'
// import { TypeAnimation } from 'react-type-animation';

import "./Passenger.css";
import { usePlacesWidget } from "react-google-autocomplete";
import {
  ToAddressInput,
  FromAddressInput,
} from "../../../components/AddressInput";
import { useDispatch } from "react-redux";
import { driver } from "../../../actions/auth";

{
  /* <TypeAnimation
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
  /> */
}

const Passenger = ({ history }) => {
  // const { ref2, autocompleteRef2 } = usePlacesWidget({
  //   apiKey:'AIzaSyC29cXScND5E-qFq8PFc0yblvl-ZL5JGh8',
  //   onPlaceSelected: (place) => {
  //     console.log(place);
  //   }
  // });
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");

  const [age, setAge] = useState(18);
  const email = user?.email;
  const dispatch = useDispatch();

  const handleBecomeDriver = async () => {
    // try {
    //   let res = await driver({ email });

    //   if (res.data) {
    //     console.log("DATA ---->", res.data);

        
    //   }


    //   dispatch({
    //     type: "LOGGED_IN_USER",
    //     payload: res.data,
    //   });
    //   window.localStorage.setItem("auth", JSON.stringify(auth));
    //   console.log("DRIVER SHIT-----> ", auth)

    //   history.push("/driver");
    // } catch (err) {
    //   console.log(err);
    // }

    // setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res);
      window.location.href = res.data;
    } catch (err) {
      // toast.error("Stripe connect failed. Please try again.");
      // setLoading(false);
      console.log(err)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("auth"));
    const userId = items.user._id;
    await createRide({
      passengerId: userId,
      startLocation: fromDestination,
      endLocation: toDestination,
    });
    window.location.reload();
  };

  return (
    <>
      {/* <nav className="navbar bg-dark">
  <div className="container-fluid">
  </div>
</nav> */}

      <div className="passenger">
        <div className="passengerLeft" >
          <div className="fade-in-text">
            <h1
              style={{
                fontSize: 30,
                marginLeft: 10,
                marginTop: 10,
                textAlign: "center",
              }}
            >
              Welcome
            </h1>
          </div>
          <h2 style={{ fontSize: 24, marginLeft: 10, textAlign: "center" }}>
            {auth?.user?.name}
          </h2>

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
              <h1 style={{ fontSize: 18, marginBottom: 20 }}>
                Starting Address
              </h1>
              {/* <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="From"
                  type="location"
                  ref={ref}
                /> */}

              <FromAddressInput
                fD={fromDestination}
                setFD={setFromDestination}
              />

              <h1 style={{ fontSize: 18, marginTop: 30, marginBottom: 20 }}>
                Ending Address
              </h1>
              {/* <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="To"
                  type="location"
                  ref={ref2}
                /> */}
              <div>
                <ToAddressInput tD={toDestination} setTD={setToDestination} />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <button onClick={handleSubmit} className="submitButton">
                Submit
              </button>
            </form>
          </div>
          <div style={{ marginTop: 100 }}>
            <br />
            <h2 style={{ fontSize: 24 }}>
              Want To Become a{" "}
              <span
                onClick={() => handleBecomeDriver()}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Driver?
              </span>
            </h2>
          </div>
        </div>

        <div
          className="d-flex"
          style={{ justifyContent: "space-between", width: "300px" }}
        >
          <VerticalTabPanel tD={toDestination} fD={fromDestination} />
          {/* From: {fromDestination} */}
        </div>
      </div>
    </>
  );
};

export default Passenger;
