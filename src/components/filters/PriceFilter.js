import React, { useContext } from "react";
import { useStyles, PriceWrapper } from "./filtersStyles/PriceFilterStyles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import ProductsContext from "../../context/productsContext";

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

  const productsContext = useContext(ProductsContext);
  const { price, maxPrice, handlePriceChange } = productsContext;
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
