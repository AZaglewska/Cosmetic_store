import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import ProductsContext from "../../context/productsContext";
import { SearchProductWrapper } from "./filtersStyles/ProductNameFilterStyles";

const ProductNameFilter = () => {
  const context = useContext(ProductsContext);
  const { searchProductName, handleSearchNameChange } = context;

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
