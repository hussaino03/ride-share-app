import React, { useState } from "react";
import "./Login.css";
import Card from "@mui/material/Card";
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
    <div style={{ padding: 50 }}>
      <Card sx={{ backgroundColor: "lightgray" }} className="login-container">
        <div style={{ width: "50%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcmrXJy8NiZnwe2qfBEg44NS96_1cvgwcjQ&usqp=CAU"
            alt="login-background"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <h1>Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <h2 className="headers">Email address</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="name"
                id="name-input"
                placeholder="Enter your email"
                className="input-box"
              />
            </div>
            <div>
              <h2 className="headers">Password</h2>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                name="pass"
                id="pass-input"
                placeholder="Enter your password"
                className="input-box"
              />
              <div>
                <i
                  style={{ cursor: "pointer" }}
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
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
