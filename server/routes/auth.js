import express from "express";

const router = express.Router();

import { register, login, makeDriver, getUser} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.post('/driver', makeDriver);
router.get('/getUser/:id', getUser)


module.exports = router;
