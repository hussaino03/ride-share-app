import axios from "axios";

export const createConnectAccount = async (token) =>
  await axios.post(
    `http://localhost:8080/api/create-connect-account`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAccountStatus = async (token) =>
  await axios.post(
    `http://localhost:8080/api/get-account-status`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAccountBalance = async (token) =>
  await axios.post(
    `http://localhost:8080/api/get-account-balance`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const currencyFormatter = (data) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  });
};

export const payoutSetting = async (token) =>
  await axios.post(
    `http://localhost:8080/api/payout-setting`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getSessionId = async (token, serviceId) =>
  await axios.post(
    `http://localhost:8080/api/stripe-session-id`,
    {
      serviceId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
