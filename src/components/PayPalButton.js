import React, { useContext } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import CartContext from "../context/cartContext";

const PayPalButton = () => {
  const cartContext = useContext(CartContext);
  const { cartTotal, clearAndCloseCart } = cartContext;

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
