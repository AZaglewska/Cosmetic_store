import React from "react";
import Navbar from "../components/navigations/Navbar";
import Cart from "../components/Cart/Cart";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../GlobalStyles/mainTheme";
import Alert from "../components/Alert";
import Poper from "../components/navigations/Poper";
import Footer from "../components/navigations/Footer";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar />
      <Poper />
      <Alert />
      <Cart />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default MainTemplate;
