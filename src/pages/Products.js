import React from "react";
import ProductsFilterMenu from "../components/filters/ProductsFilterMenu";
import ProductsList from "../components/ProductsList/ProductsList";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ProductsFilterMenu />

      <ProductsList />
    </>
  );
};

export default Products;
