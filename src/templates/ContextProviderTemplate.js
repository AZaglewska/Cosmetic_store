import React from "react";
import CartContextProvider from "../context/CartContextProvider";
import NotificationContextProvider from "../context/NotificationContextProvider";
import ProductsContextProvider from "../context/ProductsContextProvider";
import Root from "../Root";

const ContextProviderTemplate = () => {
  return (
    <ProductsContextProvider>
      <NotificationContextProvider>
        <CartContextProvider>
          <Root />
        </CartContextProvider>
      </NotificationContextProvider>
    </ProductsContextProvider>
  );
};

export default ContextProviderTemplate;
