import React, { useState } from "react";
import "./Login.css";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

import { login } from "../actions/auth";
import { useDispatch } from "react-redux";

const Login = ({ history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { email, password });
    try {
      let res = await login({ email, password });

      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ------>"
        );
        // console.log(res.data);
        window.localStorage.setItem("auth", JSON.stringify(res.data));

        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        // toast.success("Login Success");
        setTimeout(() => {
          history.push("/driver");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) console.log(err.response.data); //toast shit
    }
  };

  const togglePasswordVisibility = () => {
    setShow(!show);
  };


  return (
    <>
    <nav className="navbar bg-dark" style={{height: "90px"}}>
  <div className="container-fluid">
    <div className="text-light" style={{fontSize: "40px"}}>ReNew</div>
  </div>
</nav>
    <div style={{ padding: 50 }}>
      <Card sx={{ backgroundColor: "lightgray" }} className="login-container">
        <div
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <h1 className="typing">Efficient, Free of Cost, Beneficial!</h1>
          <h3 style={{textAlign: 'left'}}>Already a Member? Sign-in!</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <TextField id="outlined-basic" label="Enter Email" variant="outlined" style={{ marginTop: 30}}

                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="name"
                      placeholder="Enter your email"
                      className="input-box"
              />
            </div>
              <TextField id="outlined-basic" label="Enter Password" variant="outlined" style={{ marginTop: 40}}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                name="pass"
                placeholder="Enter your password"
                className="input-box"
              />
              <div>
                <div>
                <i
                  style={{ cursor: "pointer", padding: "18px", display: "flex"}}
                  onClick={togglePasswordVisibility}
                >
                  Show Password
                </i>
              </div>
              <div>
              <Button style = {{marginLeft: "5%", marginTop: "10px", width: "150px"}}onClick={handleSubmit}variant="contained">Submit</Button>

              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "50%", height: '150%' }}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/642/688/6/buildings-skyscrapers-bw-night-hd-worm-s-view-grayscale-photography-wallpaper-preview.jpg"
            alt="login-background"
            style={{ height: 700, width: "100%", marginLeft: "30%"}}
          />
        </div>
      </Card>
    </div>
    </>
  );
};

export default Login;
