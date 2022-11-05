import express from "express"
import { createRide } from "../controllers/ride";
import { requestRide } from "../controllers/ride";

const router = express.Router();

router.post('/create-ride', createRide)
router.post('/request-ride', requestRide);

module.exports = router;