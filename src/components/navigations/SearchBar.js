import React, { useContext } from "react";
import searchIcon from "../../assets/icons/loupe.svg";
import closeIcon from "../../assets/icons/cancel.svg";
import Button from "../atoms/Button";
import {
  StyledContainer,
  StyledSearchInputWrapper,
  StyledInput,
  SearchInputIcon,
} from "./navigationsStyles/SearchBarStyles";
import NotificationContext from "../../context/notificationContext";

const SearchBar = () => {
  const notificationContext = useContext(NotificationContext);

  const {
    handleSearchBarClose,
    handleSearchProductNavInputChange,
    searchProductNavInput,
    closeProductsPopper,
  } = notificationContext;

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
