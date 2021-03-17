import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import { routes } from "../../routes";
import bagIcon from "../../assets/icons/shopping-bags.svg";
import searchIcon from "../../assets/icons/loupe.svg";
import Button from "../atoms/Button";
import MobileNavbar from "./MobileNavbar";
import SearchBar from "./SearchBar";
import {
  StyledContainerNav,
  LinkCont,
  StyledImgContainer,
  StyledButtonContainer,
  StyledCircle,
  NavLink,
  StyledHamburgerMenuIcon,
} from "./navigationsStyles/NavbarStyles";

const Navbar = () => {
  const context = useContext(CosmeticStoreContext);

  const {
    handleCartOpen,
    cartQuantity,
    handleSearchBarOpen,
    isSearchBarOpen,
    isHamburgerMenuOpen,
    toggleHamburgerMenuOpen,
    closeHamburgerMenu,
  } = context;

  return (
    <>
      {isHamburgerMenuOpen ? <MobileNavbar /> : null}

      {isSearchBarOpen ? (
        <>
          <SearchBar />
        </>
      ) : (
        <>
          <StyledHamburgerMenuIcon
            isOpen={isHamburgerMenuOpen}
            menuClicked={toggleHamburgerMenuOpen}
            width={25}
            height={25}
            strokeWidth={2}
            rotate={0}
            color={isHamburgerMenuOpen ? "#ced4da" : "white"}
            borderRadius={50}
            animationDuration={0.5}
          />
          <StyledContainerNav>
            <StyledImgContainer to={routes.home}> </StyledImgContainer>
            <LinkCont>
              <NavLink to={routes.home}>Home</NavLink>
              <NavLink to={routes.about}>About</NavLink>
              <NavLink to={routes.products}>Products</NavLink>
              <NavLink to={routes.contact}>Contact</NavLink>
            </LinkCont>
            <StyledButtonContainer>
              <Button cartIcon={bagIcon} onClickFn={handleCartOpen}>
                {cartQuantity >= 1 ? (
                  <StyledCircle>{cartQuantity}</StyledCircle>
                ) : (
                  ""
                )}

                {cartQuantity >= 99 ? <StyledCircle>99+</StyledCircle> : ""}
              </Button>
              <Button
                searchIcon={searchIcon}
                onClickFn={() => {
                  closeHamburgerMenu();
                  handleSearchBarOpen();
                }}
              />
            </StyledButtonContainer>
          </StyledContainerNav>
        </>
      )}
    </>
  );
};

export default Navbar;
