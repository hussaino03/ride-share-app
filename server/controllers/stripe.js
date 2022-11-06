import User from "../models/user";
import service from "../models/service";
import Stripe from "stripe";
import queryString from "query-string";

// const stripe = Stripe(process.env.STRIPE_SECRET);
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  console.log(req);
  const user = await User.findById(req.auth._id).exec();
  // console.log(user)
  console.log("STRIPE ---->", user.stripe_account_id);

  if (user.stripe_account_id == "" || !user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: "express",
    });

    // console.log("ACCOUNT", account);
    user.stripe_account_id = account.id;
    console.log(user.stripe_account_id);
    user.save();
    // console.log("STRIPE ---->", user.stripe_account_id);
  }

  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL,
    type: "account_onboarding",
  });

  accountLink = Object.assign(accountLink, {
    "stripe_user[email]": user.email || undefined,
  });
  let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
  console.log("LINK----->", link);
  res.send(link);
};

const updateDelayDays = async (accountId) => {
  const account = await stripe.accounts.update(accountId, {
    settings: {
      payouts: {
        schedule: {
          delay_days: 7,
        },
      },
    },
  });
  return account;
};

export const getAccountStatus = async (req, res) => {
  console.log(req);
  // console.log('GET ACC STATUS')
  const user = await User.findById(req.auth._id).exec();
  const account = await stripe.accounts.retrieve(user.stripe_account_id);
  // console.log('USER ACC RETRIEVE --->', account)

  const updatedAccount = await updateDelayDays(account.id);

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      stripe_seller: updatedAccount,
    },
    { new: true }
  )
    .select("-password")
    .exec();
  // console.log(updatedUser)
  res.json(updatedUser);
};

export const getAccountBalance = async (req, res) => {
  console.log(req);
  const user = await User.findById(req.auth._id).exec();

  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    });
    // console.log('BALLAANCE ---->', balance)
    res.json(balance);
  } catch (err) {
    console.log(err);
  }
};

export const payoutSetting = async (req, res) => {
  console.log(req);
  try {
    const user = await User.findById(req.auth._id).exec();

    const loginLink = await stripe.accounts.createLoginLink(
      user.stripe_account_id,
      {
        redirect_url: process.env.STRIPE_SETTING_REDIRECT_URL,
      }
    );

    // console.log("LOGIN LINK FOR PAYOUT SETTING ----.", loginLink);
    res.json(loginLink);
  } catch (err) {
    console.log("STRIPE PAYOUT ERR ---->", err);
  }
};

export const stripeSessionId = async (req, res) => {
  // console.log('session id', req.body.serviceId)
  const { serviceId } = req.body;

  const item = await service.findById(serviceId).populate("postedBy").exec();
  console.log(item)
  const fee = (item.price * 20) / 100;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: item.title,
        amount: item.price * 100,
        currency: "usd",
        quantity: 1,
      },
    ],
    payment_intent_data: {
      application_fee_amount: fee * 100,
      transfer_data: {
        destination: item.postedBy.stripe_account_id,
      },
    },
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
  });

  await User.findByIdAndUpdate(req.auth._id, { stripeSession: session }).exec();

  res.send({
    sessionId: session.id,
  });
};
