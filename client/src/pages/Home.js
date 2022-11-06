import React from "react";
import { Link } from "react-router-dom";
import Variant from "../assets/variant.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section class="header">
        <div>
          <div className="H-content">
            <div className="Hm-content">
              <h1 classname="Hm-heading">Hello</h1>
              <p className="Hm-p">Lorem Ipsum</p>
              <button className="H-button">Signup</button>
            </div>
            <img src={Variant} alt="Hero-image" classname="H-image" />
          </div>
          <hr />
          <div>
            <div>
              <h1 className="Hm-Heading" style={{ color: "#1f2937" }}>
                About us
              </h1>
            </div>
            <div className="Hm-about">
              <div className="Hm-about-content">
                <p>Lorem</p>
              </div>
              <img src="" alt="image" style={{ marginLeft: 30 }}></img>
            </div>
          </div>
          <hr />
          <div style={{ backgroundColor: "#1f2937", color: "white" }}>
            <h1 style={{ fontSize: 60, marginLeft: 20 }}>
              <i>Inspiration</i>
            </h1>
            <h2 style={{ fontSize: 45, paddingTop: 40, paddingBottom: 40 }}>
              <i>
                <center>"Even dead I am the hero"</center>
              </i>
            </h2>
          </div>

          <hr />
          <div style={{ paddingBottom: 40 }}>
            <div className="wrapper">
              <div>
                <img src="" alt="computer-picture" />
              </div>
              <div>
                <h1>
                  <center>Step1</center>
                </h1>
                <p>lorem ipsum</p>
              </div>
              <div>
                <h1>
                  <center>Step2</center>
                </h1>
                <p>lorem ipsum</p>
              </div>
              <div>
                <h1>
                  <center>Step1</center>
                </h1>
                <p>lorem ipsum</p>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Home;
