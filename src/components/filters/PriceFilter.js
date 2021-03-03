import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import styled from "styled-components";
import { useStyles } from "./filtersStyles/PriceFilterStyles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    margin-top: 22px;
  }
  label {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const ValueLabelComponent = (props) => {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={`price: ${value}$`}
    >
      {children}
    </Tooltip>
  );
};

const PriceFilter = () => {
  const classes = useStyles();

  const context = useContext(CosmeticStoreContext);
  const { price, maxPrice, handlePriceChange } = context;
  return (
    <PriceWrapper>
      <label htmlFor="priceFilter">product price: {price}$</label>
      <Slider
        className={classes.slider}
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        min={0}
        value={price}
        max={maxPrice}
        onChange={handlePriceChange}
      />
    </PriceWrapper>
  );
};

export default PriceFilter;
