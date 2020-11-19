import React from "react";
import Navbar from "../components/navigations/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainTemplate;
