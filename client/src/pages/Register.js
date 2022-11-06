import React, { useState } from "react";
import "./Login.css";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { register } from "../actions/auth";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = ({ history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });

      console.log("REGISTER USER ------>", res);
      Toast.fire({
        icon: "success",
        title: "Created Account. Please log in.",
      });
      history.push("/login");
    } catch (err) {
      if (err.response.status === 400) console.log(err.response.data);
    }
  };

  return (
    <>
      <div style={{ padding: 50 }}>
        <Card sx={{ backgroundColor: "lightgray" }} className="login-container">
          <div style={{ width: "50%", height: "150%" }}>
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
              width: '50%'
            }}
          >
            <h1 className="typing">Efficient, Free of Cost, Beneficial!</h1>
            <h3 style={{ textAlign: "left" }}>Join ReNew!</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  style={{ marginTop: 30 }}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  name="name"
                  className="input-box"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Enter Email"
                  variant="outlined"
                  style={{ marginTop: 40 }}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="name"
                  className="input-box"
                  placeholder="Enter your email"
                />
                <div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Enter Password"
                      variant="outlined"
                      style={{ marginTop: 50 }}
                      onChange={(e) => setPassword(e.target.value)}
                      type={show ? "text" : "password"}
                      name="pass"
                      className="input-box"
                      placeholder="Enter your password"
                    />
                    <i
                      style={{
                        cursor: "pointer",
                        padding: "18px",
                        display: "flex",
                      }}
                      onClick={togglePasswordVisibility}
                    >
                      Show Password
                    </i>
                  </div>
                  <div>
                    <Button
                      style={{
                        marginLeft: "5%",
                        marginTop: "10px",
                        width: "150px",
                      }}
                      onClick={handleSubmit}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Register;
