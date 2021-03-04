import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import { FormControlLabel } from "@material-ui/core";
import {
  CheckboxWrapper,
  GreenCheckbox,
} from "./filtersStyles/FreeDeliveryFilterStyles";

const FreeDeliveryFilter = () => {
  const context = useContext(CosmeticStoreContext);
  const { freeDelivery, handleFreeDeliveryChange } = context;

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
