import express from "express"
import { acceptRide, createRide, getAllRides } from "../controllers/ride";

const router = express.Router();

router.post('/create-ride', createRide)
router.post('/accept-ride', acceptRide);
router.get('/get-all-rides', getAllRides);

module.exports = router;