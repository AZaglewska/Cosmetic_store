import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContextProviderTemplate from "./templates/ContextProviderTemplate";

ReactDOM.render(
  <BrowserRouter>
    <ContextProviderTemplate />
  </BrowserRouter>,
  document.getElementById("root")
);
