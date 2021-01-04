import React, { useState, useContext } from "react";
import CosmeticStoreContext from "../../context";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const CategoryFilter = () => {
  const context = useContext(CosmeticStoreContext);

  const { initialProductState, category, handleCategoryChange } = context;
  const classes = useStyles();

  const productsCategories = [
    "all",
    ...new Set(
      initialProductState.map((product) => {
        return product.productCategory;
      })
    ),
  ];

  console.log(productsCategories);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">Kategoria</InputLabel>
      <Select
        native
        value={category}
        onChange={handleCategoryChange}
        label="Kategoria"
        inputProps={{
          name: "category",
          id: "categorySelect",
        }}
      >
        {productsCategories.map((productsCategory) => {
          return (
            <option key={productsCategory} value={productsCategory}>
              {productsCategory}
            </option>
          );
        })}

        {/* <option value={"all"}>Wszystkie</option>
        <option value={"cream"}>Kremy</option>
        <option value={"serum"}>Sera</option>
        <option value={"oil"}>Olejki</option>
        <option value={"soap"}>Mydła</option> */}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
