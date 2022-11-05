import express from "express";

const router = express.Router();

import { register, login, makeDriver } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.post('/driver', makeDriver)


module.exports = router;
