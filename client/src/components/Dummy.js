import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { FromAddressInput, ToAddressInput } from "./AddressInput";
const Dummy = () => {
  const [open, setOpen] = React.useState(false);
  const [fromLocation, setFromLocation] = useState("");
  const [toDestination, setToDestination] = useState("");
  //   const [totalDistance, setTotalDistance] = useState(0);
  //   const [mileage, setMileage] = useState(0);
  //   const [hours, setHours] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Card open={open} onClose={handleClose}>
        <h1>Budget Planner</h1>
        <CardContent>
          <h5>
            Our predictor works 99% of the time. We can 100% guarentee you that
            the data which is entered here would never be revealed to any of the
            sites.
          </h5>
          <div style={{ marginBottom: 20 }}>
            <FromAddressInput fD={fromLocation} setFD={setFromLocation} />
            <ToAddressInput tD={toDestination} setTD={setToDestination} />
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Dummy;
