import React from "react";
import CategoryFilter from "./CategoryFilter";
import FreeDeliveryFilter from "./FreeDeliveryFilter";
import PriceFilter from "./PriceFilter";
import ProductNameFilter from "./ProductNameFilter";
import { FilterWrapper } from "./filtersStyles/ProductFilterMenuStyles";

const ProductsFilterMenu = () => {
  return (
    <>
      <FilterWrapper>
        <h2>Filter menu:</h2>
        <CategoryFilter />
        <PriceFilter />
        <ProductNameFilter />
        <FreeDeliveryFilter />
      </FilterWrapper>
    </>
  );
};

export default ProductsFilterMenu;
