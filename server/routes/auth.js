import express from "express";

const router = express.Router();

import { register, login, makeDriver, getAllRides } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.post('/driver', makeDriver);
router.get('/getALlRides', )


module.exports = router;
