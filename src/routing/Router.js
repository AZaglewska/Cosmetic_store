import React from "react";
import { Route, Switch } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import { routes } from "../routes";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.about} component={About} />
      <Route path={routes.products} component={Products} />
      <Route path={routes.contact} component={Contact} />
      <Route path={routes.singleProduct} component={SingleProduct} />
    </Switch>
  );
};

export default Router;
