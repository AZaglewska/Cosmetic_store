import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";

const PriceFilter = () => {
  const context = useContext(CosmeticStoreContext);
  const { price, maxPrice, handlePriceChange } = context;
  return (
    <div>
      <label htmlFor="priceFilter">product price: {price}$</label>
      <input
        type="range"
        name="priceFilter"
        id="priceFilter"
        min={0}
        value={price}
        max={maxPrice}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default PriceFilter;
