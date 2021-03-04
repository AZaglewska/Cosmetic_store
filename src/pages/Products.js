import React from "react";
import ProductsFilterMenu from "../components/filters/ProductsFilterMenu";
import ProductsList from "../components/ProductsList/ProductsList";
import { StyledWrapper, ProductWrapper } from "./stylesPages/ProductsStyles";
import navbarImage from "../assets/navbarImages/navbarImage2.jpg";

const Products = () => {
  return (
    <>
      <StyledWrapper navbarImage={navbarImage}></StyledWrapper>
      <ProductWrapper>
        <ProductsFilterMenu />
        <h1>Our Products</h1>
        <ProductsList />
      </ProductWrapper>
    </>
  );
};

export default Products;
