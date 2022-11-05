import React, { useState } from "react";
import "./Register.css";
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
    <div className="login-container">
      <Card>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&usqp=CAU"
            alt="login-background"
          />
        </div>
        <div>
          <h1>Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <h2>Email address</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="name"
                id="email-input"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h2>Name</h2>
              <input
                onChange={(e) => setName(e.target.value)}
                type="name"
                name="name"
                id="name-input"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <h2>Password</h2>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                name="pass"
                id="pass-input"
                placeholder="Enter your password"
              />

              <h1 onClick={togglePasswordVisibility}>Show Password</h1>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
