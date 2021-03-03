import React, { useContext } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import CosmeticStoreContext from "../context";

const PayPalButton = () => {
  const context = useContext(CosmeticStoreContext);
  const { cartTotal, clearAndCloseCart } = context;

  const onSuccessPayment = (payment) => {
    console.log(payment);
    clearAndCloseCart();
  };

  const onCancel = (res) => {
    console.log(res);
  };

  const onError = (err) => {
    console.log(err);
  };

  const client = {
    sandbox: process.env.REACT_APP_SANDBOX_PAYPALL_ID,
    production: "",
  };

  return (
    <PaypalExpressBtn
      onSuccess={onSuccessPayment}
      onError={onError}
      onCancel={onCancel}
      client={client}
      env="sandbox"
      currency="USD"
      total={cartTotal}
    />
  );
};

export default PayPalButton;
