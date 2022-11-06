import React, {useState, useEffect} from "react";
import "./Driver.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { DataGrid } from '@mui/x-data-grid';
import TabPanel from "../../../components/TabPanel";
import { useSelector } from "react-redux";
import {
  ToAddressInput,
  FromAddressInput,
} from "../../../components/AddressInput";
import {driverAddress} from '../../../actions/auth'
import {getAccountBalance, currencyFormatter, payoutSetting } from '../../../actions/stripe'
const Driver = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [to, setTo] = useState(null)
  const [balance, setBalance] = useState(0.00);
  const [from, setFrom] = useState(null)
  const [starting, setStarting] = useState(null)
  const [ending, setEnding] = useState(null)

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = auth.user.email
    try {
      let res = await driverAddress({ to, from, email})

      if (res.data) {
        console.log("RESSSS ----->", res.data)
      }

      window.localStorage.setItem("auth", JSON.stringify(res.data));
      setStarting(res.data.driverStartingAddress)
      setEnding(res.data.driverEndingAddress)

    } catch (err) {
      console.log(err)
    }
  }

  const handlePayoutSettings = async () => {

    try {
      const res = await payoutSetting(auth.token);
      console.log("RES FOR PAYOUT SETTING LINK", res);
      window.location.href = res.data.url;
    } catch (err) {
      console.log(err);
      // toast.error("Unable to access settings. Please try again.");
    }
  };


  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      // console.log(res.data)
      setBalance(res.data);
    });
  }, []);

  return (
    <div className="ridesContainer">
      <div className="driverLeft">
        <img
          src="https://d29fhpw069ctt2.cloudfront.net/clipart/90673/preview/iOS_7_Icon_Template_preview_4ffa.png"
          style={{ marginTop: 10, width: 150, alignSelf: 'center' }}
        />
        <h1 style={{marginTop:5}} className="driverWelcome">Welcome Driver</h1>
        <h1 style={{fontSize:20}} className="driverWelcome">{auth?.user?.name}</h1>
        <div>
              <h3 style={{ marginTop: 50 }}>
                Set Your Locations
              </h3>

              <h5 style={{ fontSize: 15}}>This is so that we can suggest you passengers on your route, to make life easier.</h5>
              {/* <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="From"
                  type="location"
                  ref={ref}
                /> */}

              <FromAddressInput
                fD={from}
                setFD={setFrom}
              />

             
              {/* <input
                  onChange={(e) => setToDestination(e.target.value)}
                  placeholder="To"
                  type="location"
                  ref={ref2}
                /> */}
              <div style={{marginTop: 20,}}>
                <ToAddressInput tD={to} setTD={setTo} />
              </div>

              <button className="submit-button" style={{ marginTop: 10}} onClick={handleSubmit}>Submit</button>
            </div>
        <div className="moneyDriver">
        {balance &&
                  balance.pending &&
                  balance.pending.map((bp, i) => (
                    <h5 key={i} className="lead">
                      Balance: {currencyFormatter(bp)}
                    </h5>
                  ))}
          <button className="button" onClick={handlePayoutSettings}>Collect Payouts</button>
        </div>
      </div>
      <TabPanel />
    </div>

  );
};

export default Driver;

