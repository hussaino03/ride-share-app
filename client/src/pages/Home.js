import React from "react";

import { Link } from "react-router-dom";
// import Variant from "../assets/variant.png";
import "./Home.css";


const Home = ({ history }) => {
  return (
    <>
    <div className="containeruse">
      <section style={{paddingLeft:"10px", marginRight: "1vh"}}>
        <div>
          <div className="H-content">
            <div className="Hm-content">
              <h1 classname="Hm-heading">ReNew</h1>
              <p className="Hm-p">Ride-Share Made Efficient</p>
              <button onClick={() => history.push("/register")}
              className="signUp-btn2">
                Join Us</button>
            </div>
            <img src='https://o.remove.bg/downloads/473e5f45-24b5-4b6e-bc55-026437762a52/3-horizontes-inovacao-2-removebg-preview.png' alt="Hero-image" classname="H-image" style={{width:"65%", paddingLeft:"90px", marginLeft:"70px"}} />
          </div>
          <hr />
          <div>
            <div>
              <h1 className="Hm-Heading" style={{ color: "#1f2937" }}>
                About us
              </h1>
            </div>
            <div className="Hm-about">
              <div className="Hm-about-content" style={{fontSize: "18px"}}>
                <p>An app that allows the user to calculate their trip budget, and also displays a customized dashboard for the driver and passenger. A passenger is prompted to enter their details such as location, and a map gets displayed which shows the total distance and other features for ease of accessibility. Moreover, the driver dashboard is there to make the process of collecting payments more efficient and easy. The driver can simply login to their account and see the passengers they currently need to pick-up or see the total fares as well.<br></br><br></br>The app can display the required information for both the passenger and driver with a simple click, while also giving them more utilities such as budget planning. </p>
              </div>
              <img src="https://www.signiflow.com/wp-content/uploads/2021/08/SigniFlow-Procurement-Portfolios-500-800.png" alt="image" style={{ marginLeft: 30 }}></img>
            </div>
          </div>
          <hr />
          <div style={{ backgroundColor: "#080031", color: "white" }}>
            <h1 style={{ fontSize: 40, marginLeft: 20 }}>
              <i>Inspiration</i>
            </h1>
            <h2 style={{ fontSize: 35, paddingTop: 40, paddingBottom: 40 }}>
              <i style={{overflowX:"hidden"}}>
                <center>"Efficiency is doing things right; effectiveness is doing the right things"</center>
              </i>
            </h2>
          </div>

          <hr />
        </div>
        <hr />

        {/* <div class="container">
            <div class="hero">
                <div class="hero-content">
                    <div class="hero-header">This is website is awesome</div>
                    <p class="hero-desc">
                        This website has some subtext that goes here under the main title. It's a smaller font and the color is lower
                    </p>
                    <button class="btn">Sign up</button>
                </div>
                <div class="hero-img">
                    <img src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>
            </div>
        </div> */}
      </section>
      </div>
    </>
  );
};

export default Home;
