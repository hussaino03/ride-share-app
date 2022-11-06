import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UpcomingRides from "./UpcomingRides";
import RequestingRides from "./RequestingRides.js";
import CurrentRides from "./passenger/CurrentRides";
import PastRides from './passenger/PastRides'
import Map from "./Map";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "150%",
        padding: 5,
        marginRight: 0,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Current Rides" {...a11yProps(0)} />
          <Tab label="Past Rides" {...a11yProps(1)} />
          {/* <Tab label="Requested Rides" {...a11yProps(2)} /> */}
          {/* <Tab label="Map" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      <div style={{ width: "175%" }}>
        <TabPanel value={value} index={0}>
          <CurrentRides />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PastRides />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RequestingRides />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Map />
        </TabPanel>
      </div>
    </Box>
  );
}
