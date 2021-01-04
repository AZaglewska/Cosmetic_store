import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ProductNameFilter from "./ProductNameFilter";

const ProductsFilterMenu = () => {
  return (
    <>
      <h2>Filter menu:</h2>
      <CategoryFilter />
      <PriceFilter />
      <ProductNameFilter />
    </>
  );
};

export default ProductsFilterMenu;
