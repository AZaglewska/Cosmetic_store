import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
  BootstrapInput,
  useStyles,
} from "./filtersStyles/CategoryFilterStyles";

const CategoryFilter = () => {
  const classes = useStyles();

  const context = useContext(CosmeticStoreContext);

  const { initialProductState, category, handleCategoryChange } = context;

  const productsCategories = [
    "all",
    ...new Set(
      initialProductState.map((product) => {
        return product.productCategory;
      })
    ),
  ];

  return (
    <>
      <FormControl className={classes.margin}>
        <InputLabel id="categorySelect">Category</InputLabel>
        <Select
          labelId="categorySelect"
          id="categorySelect"
          value={category}
          onChange={handleCategoryChange}
          input={<BootstrapInput />}
          defaultValue="all"
        >
          {productsCategories.map((productsCategory, index) => {
            return (
              <MenuItem
                value={productsCategory}
                className={classes.menu}
                key={index}
              >
                {productsCategory}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default CategoryFilter;
