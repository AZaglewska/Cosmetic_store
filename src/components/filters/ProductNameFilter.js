import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";

const ProductNameFilter = () => {
  const context = useContext(CosmeticStoreContext);
  const { searchProductName, handleSearchNameChange } = context;

  return (
    <div>
      <label htmlFor="nameSearch">Search product:</label>
      <input
        type="search"
        id="nameSearch"
        placeholder="product name..."
        value={searchProductName}
        onChange={handleSearchNameChange}
      />
    </div>
  );
};

export default ProductNameFilter;
