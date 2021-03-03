import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import styled from "styled-components";
import { FormControlLabel } from "@material-ui/core";
import { GreenCheckbox } from "./filtersStyles/FreeDeliveryFilterStyles";

const CheckboxWrapper = styled.div`
  @media (max-width: 990px) {
    margin-top: 22px;
  }
  label {
    color: ${({ theme }) => theme.colors.smokeyGrey};
    margin-left: 1px;
  }
`;

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
