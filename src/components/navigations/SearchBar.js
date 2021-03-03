import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import searchIcon from "../../assets/icons/loupe.svg";
import closeIcon from "../../assets/icons/cancel.svg";
import Button from "../atoms/Button";
import {
  StyledContainer,
  StyledSearchInputWrapper,
  StyledInput,
  SearchInputIcon,
} from "./navigationsStyles/SearchBarStyles";

const SearchBar = () => {
  const context = useContext(CosmeticStoreContext);

  const {
    handleSearchBarClose,
    handleSearchProductNavInputChange,
    searchProductNavInput,
    closeProductsPopper,
  } = context;

  return (
    <>
      <StyledContainer>
        <StyledSearchInputWrapper>
          <SearchInputIcon searchIcon={searchIcon} />
          <StyledInput
            placeholder="search"
            onChange={handleSearchProductNavInputChange}
            value={searchProductNavInput}
          />
        </StyledSearchInputWrapper>
        <Button
          closeIcon={closeIcon}
          onClickFn={() => {
            closeProductsPopper();
            handleSearchBarClose();
          }}
        />
      </StyledContainer>
    </>
  );
};

export default SearchBar;
