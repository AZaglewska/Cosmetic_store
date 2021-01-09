import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";

const FreeDeliveryFilter = () => {
  const context = useContext(CosmeticStoreContext);
  const { freeDelivery, handleFreeDeliveryChange } = context;

  return (
    <div>
      <label htmlFor="freeDelivery">free delivery:</label>
      <input
        type="checkbox"
        id="freeDelivery"
        onChange={handleFreeDeliveryChange}
        checked={freeDelivery}
      />
    </div>
  );
};

export default FreeDeliveryFilter;
