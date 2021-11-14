import React, { useContext } from "react";
import { FormControlLabel } from "@material-ui/core";
import {
  CheckboxWrapper,
  GreenCheckbox,
} from "./filtersStyles/FreeDeliveryFilterStyles";
import ProductsContext from "../../context/productsContext";

const FreeDeliveryFilter = () => {
  const productsContext = useContext(ProductsContext);
  const { freeDelivery, handleFreeDeliveryChange } = productsContext;

  return (
    <CheckboxWrapper>
      <label htmlFor="freeDelivery">free delivery:</label>

      <FormControlLabel
        control={
          <GreenCheckbox
            checked={freeDelivery}
            onChange={handleFreeDeliveryChange}
            id="freeDelivery"
          />
        }
      />
    </CheckboxWrapper>
  );
};

export default FreeDeliveryFilter;
