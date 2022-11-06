import "./Header.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../assets/ReNewLogo.png'

const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();
  return (
    <>
      <div className="header">
        <div className="header_left">
          <img src={logo} className='logo-img' />
        </div>
        <div className="pages">
          <NavMenu>
            <a onClick={() => history.push("/")}>
              <span>Home</span>
            </a>
            <a onClick={() => history.push("/budget")}>
              <span>Trip Budget Calculator</span>
            </a>
          </NavMenu>
        </div>
        <div className="header_right">
          {auth && auth.token ? (
            //signed in
            <>
              <NavMenu>

                {auth.user &&
                auth.user.isDriver ? (
                  <a onClick={() => history.push("/seller/dashboard")}>
                    <span>Driver Dashboard</span>
                  </a>
                ) : (
                  <a onClick={() => history.push("/passenger")}>
                    <span>Dashboard</span>
                  </a>
                )}
              </NavMenu>
              <button
                onClick={() => history.push("/Register")}
                className="btn signUp-btn"
              >
                <b>My Account</b>
              </button>{" "}
            </>
          ) : (
            //not signed in
            <>
              <NavMenu>
                <a onClick={() => history.push("/login")}>
                  <span>Login</span>
                </a>
              </NavMenu>
              <button
                onClick={() => history.push("/register")}
                className="btn signUp-btn"
              >
                <b>Start for Free</b>
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  //   flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: black;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(179, 12, 120);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

export default Header;
