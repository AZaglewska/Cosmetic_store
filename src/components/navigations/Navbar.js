import React, { useContext, useState } from "react";
import CosmeticStoreContext from "../../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import bagIcon from "../../assets/icons/shopping-bags.svg";
import searchIcon from "../../assets/icons/loupe.svg";
import closeIcon from "../../assets/icons/cancel.svg";
import Button from "../atoms/Button";
import { zoomIn } from "../../GlobalStyles/animations";
import Logo from "../../assets/logo/logo.png";

const StyledContainerNav = styled.div`
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  padding: 5px;
  background-color: transparent;
  z-index: 999;
`;
const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5px;
  height: 60px;
  background-color: transparent;
  z-index: 999;
`;

const LinkCont = styled.div`
  margin-right: auto;
  margin-left: 24px;
`;
const StyledImgContainer = styled.div`
  width: 160px;
  height: 66px;
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-top: 10px;
`;

const StyledButtonContainer = styled.div`
  margin-right: 50px;
`;

const StyledCircle = styled.div`
  height: 22px;
  width: 22px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 50%;
  position: absolute;
  bottom: 14px;
  padding-top: 4px;
  font-size: 12px;
`;

const StyledSearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  align-self: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  animation: ${zoomIn} 0.8s;
  position: relative;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const SearchInputIcon = styled.div`
  background-image: url(${({ searchIcon }) => searchIcon});
  background-size: 100%;
  background-position: 50%;
  height: 19px;
  width: 19px;
  background-repeat: no-repeat;
  animation: ${zoomIn} 0.8s;
  margin: 5px;
`;

const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  display: inline-block;
  position: relative;
  animation: ${zoomIn} 0.8s;
  /* font-family: ${({ theme }) => theme.fontFamily.mainFont}, sans-serif; */
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.lightGrey};
    transition: width 0.3s;
    position: absolute;
    top: 100%;
  }

  &:hover:after {
    width: 100%;
    transition: 0.3s;
  }
`;

const Navbar = () => {
  const context = useContext(CosmeticStoreContext);

  const {
    handleCartOpen,
    cartQuantity,
    handleSearchBarOpen,
    isSearchBarOpen,
    handleSearchBarClose,
    changeColor,
  } = context;

  return (
    <>
      {isSearchBarOpen ? (
        <>
          <StyledContainer>
            <StyledSearchInputWrapper>
              <SearchInputIcon searchIcon={searchIcon} />
              <StyledInput placeholder="search" />
            </StyledSearchInputWrapper>
            <Button closeIcon={closeIcon} onClickFn={handleSearchBarClose} />
          </StyledContainer>
        </>
      ) : (
        <StyledContainerNav>
          <StyledImgContainer></StyledImgContainer>
          <LinkCont>
            <NavLink to={routes.home}>Home</NavLink>
            <NavLink to={routes.about} onClick={() => changeColor("About us")}>
              About
            </NavLink>
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
              onClickFn={handleSearchBarOpen}
            ></Button>
          </StyledButtonContainer>
        </StyledContainerNav>
      )}
    </>
  );
};

export default Navbar;
