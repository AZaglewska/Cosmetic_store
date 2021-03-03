import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import { SearchProductWrapper } from "./filtersStyles/ProductNameFilterStyles";

const ProductNameFilter = () => {
  const context = useContext(CosmeticStoreContext);
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
