import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { routes } from "./routes";
import MainTemplate from "./templates/MainTemplate";
import { localData } from "./localData";
import CosmeticStoreContext from "./context";

const Root = () => {
  const [products, setProducts] = useState([...localData]);
  const 
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };


  const filterProducts = () => {

  }
  return (
    <>
      <GlobalStyle />
      <CosmeticStoreContext.Provider
        value={{ products, category, handleCategoryChange }}
      >
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.products} component={Products} />
              <Route path={routes.contact} component={Contact} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </CosmeticStoreContext.Provider>
    </>
  );
};

export default Root;
