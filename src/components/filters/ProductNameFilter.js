import React, { useContext } from "react";
import ProductsContext from "../../context/productsContext";
import { SearchProductWrapper } from "./filtersStyles/ProductNameFilterStyles";

const ProductNameFilter = () => {
  const productsContext = useContext(ProductsContext);
  const { searchProductName, handleSearchNameChange } = productsContext;

  return (
    <SearchProductWrapper>
      <label htmlFor="nameSearch">search products</label>
      <input
        type="search"
        id="nameSearch"
        placeholder="product name..."
        value={searchProductName}
        onChange={handleSearchNameChange}
      />
    </SearchProductWrapper>
  );
};

export default ProductNameFilter;
