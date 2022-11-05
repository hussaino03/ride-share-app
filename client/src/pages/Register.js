import React, { useState } from "react";
import "./Login.css";
import Card from "@mui/material/Card";
import { register } from "../actions/auth";

const Register = ({ history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });

      console.log("REGISTER USER ------>", res);
      history.push("/login");
    } catch (err) {
      if (err.response.status === 400) console.log(err.response.data);
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <Card sx={{ backgroundColor: "lightgray" }} className="login-container">
        <div style={{ width: "50%", height: '150%' }}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/997/551/665/photography-modern-building-skyscraper-wallpaper-preview.jpg"
            alt="login-background"
            style={{ height: 700, width: "100%" }}
          />
        </div>
        <div
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <h1 className="typing">Join ReNew!</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <h2 className="headers" style={{ marginTop: 50}}>Email Address</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="name"
                id="email-input"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h2 className="headers" style={{ marginTop: 30}}>Name</h2>
              <input
                onChange={(e) => setName(e.target.value)}
                type="name"
                name="name"
                id="name-input"
                placeholder="Enter your name"
              />
              <div>
                <div>
                <h2 className="headers" style={{ marginTop: 30}}>Password</h2>
                <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                name="pass"
                id="pass-input"
                placeholder="Enter your password"
              />
                <i
                  style={{ cursor: "pointer", padding: "18px"}}
                  onClick={togglePasswordVisibility}
                >
                  Show Password
                </i>
              </div>
              <div>
                <button onClick={handleSubmit} className="submit-button">
                  Submit
                </button>
              </div>
            </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
