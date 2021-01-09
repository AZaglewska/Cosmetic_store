import React from "react";
import CategoryFilter from "./CategoryFilter";
import FreeDeliveryFilter from "./FreeDeliveryFilter";
import PriceFilter from "./PriceFilter";
import ProductNameFilter from "./ProductNameFilter";

const ProductsFilterMenu = () => {
  return (
    <>
      <h2>Filter menu:</h2>
      <CategoryFilter />
      <PriceFilter />
      <ProductNameFilter />
      <FreeDeliveryFilter />
    </>
  );
};

export default ProductsFilterMenu;
