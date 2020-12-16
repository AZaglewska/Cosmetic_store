import React from "react";
import Navbar from "../components/navigations/Navbar";
import Cart from "../components/Cart/Cart";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../GlobalStyles/mainTheme";
import Alert from "../components/Alert";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar />
      <Alert />
      <Cart />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
