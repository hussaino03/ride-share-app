import express from "express";
import { requireSignin } from "../middlewares";

const router = express.Router();

import {
  createConnectAccount,
  getAccountStatus,
  getAccountBalance,
  payoutSetting,
  stripeSessionId
} from "../controllers/stripe";

router.post("/create-connect-account", requireSignin, createConnectAccount);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.post("/get-account-balance", requireSignin, getAccountBalance);
router.post('/payout-setting', requireSignin, payoutSetting)
router.post('/stripe-session-id', requireSignin, stripeSessionId)

module.exports = router;
