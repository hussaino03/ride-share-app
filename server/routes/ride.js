import express from "express"
import { acceptRide, createRide, getAllDriverRides, getRide, getSuggestedRides } from "../controllers/ride";

const router = express.Router();

router.post('/create-ride', createRide)
router.post('/accept-ride', acceptRide);
router.get('/get-all-driver-rides', getAllDriverRides);
router.get('/get-ride/:id', getRide);
router.get('/get-suggested-rides/:id', getSuggestedRides);


module.exports = router;