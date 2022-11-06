import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { FromAddressInput, ToAddressInput } from "./AddressInput";
const Dummy = () => {
  const [open, setOpen] = React.useState(false);
  const [fromLocation, setFromLocation] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [totalDistance, setTotalDistance] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const TotalPrice = () => {
    const tp = ((totalDistance / mileage) * price + hours * 2).toFixed(2);
    setTotal(tp);
    handleClickOpen();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div>
      <Card open={open} onClose={handleClose} style={{ marginTop: "50px" }}>
        <h1 style={{ marginTop: "20px" }}>
          <center>Budget Planner</center>
        </h1>
        <CardContent>
          <h5 style={{ fontSize: "11px" }}>
            <i>
              Our predictor works 99% of the time. We can 100% guarentee you
              that the data which is entered here would never be revealed to any
              of the sites.
            </i>
          </h5>
          <div style={{ marginTop: "30px" }}>
            <FromAddressInput
              fD={fromLocation}
              setFD={setFromLocation}
              required
            />

            <div style={{ marginTop: "20px" }}></div>
            <div>
              <ToAddressInput
                tD={toDestination}
                setTD={setToDestination}
                required
              />
            </div>
            <TextField
              placeholder="Distance"
              type="number"
              onChange={(e) => setTotalDistance(e.target.value)}
              sx={{ marginTop: "30px" }}
              required
            />
            <TextField
              placeholder="Mileage"
              type="number"
              onChange={(e) => setMileage(e.target.value)}
              sx={{ marginTop: "30px" }}
              required
            />
            <TextField
              placeholder="Price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              sx={{ marginTop: "30px" }}
              required
            />

            <TextField
              placeholder="Hours"
              type="number"
              onChange={(e) => setHours(e.target.value)}
              sx={{ marginTop: "30px" }}
              required
            />
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={TotalPrice}>Generate</Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <center>Total Amount</center>
        </DialogTitle>
        <DialogContent>The total money it will require is </DialogContent>
        <h1>
          <center>${total}</center>
        </h1>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dummy;
