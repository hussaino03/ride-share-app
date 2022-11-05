import React from "react";
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

const Driver = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <div className="ridesContainer">
      <div className="driverLeft">
        <img
          src="https://d29fhpw069ctt2.cloudfront.net/clipart/90673/preview/iOS_7_Icon_Template_preview_4ffa.png"
          style={{ marginTop: 10, width: 200 }}
        />
        <h1 className="driverWelcome">Welcome</h1>
        <h1>{auth?.user?.name}</h1>

        <div className="moneyDriver">
          <h5>Money Balance: $0.00</h5>
          <button className="button">Collect Payouts</button>
        </div>
      </div>
      <TabPanel />
    </div>
  );
};

export default Driver;
