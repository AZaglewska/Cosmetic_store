import React, { useEffect, useContext } from "react";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import MainTemplate from "./templates/MainTemplate";
import { client } from "./contentful/contentfulConfig";
import Router from "./routing/Router";
import ProductsContext from "./context/productsContext";

const Root = () => {
  const productsContext = useContext(ProductsContext);

  const { setContentfulData } = productsContext;

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "products",
      })
      .then((res) => {
        setContentfulData(res.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContentfulData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainTemplate>
        <Router />
      </MainTemplate>
    </>
  );
};

export default Root;
