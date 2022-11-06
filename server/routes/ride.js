import express from "express"
import { acceptRide, createRide, getAllDriverRides } from "../controllers/ride";

const router = express.Router();

router.post('/create-ride', createRide)
router.post('/accept-ride', acceptRide);
router.get('/get-all-driverj-rides', getAllDriverRides);

module.exports = router;