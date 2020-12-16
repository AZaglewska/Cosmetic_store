import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { routes } from "../../routes";
import BagIcon from "../../assets/icons/shopping-bag.svg";
import SearchIcon from "../../assets/icons/search.svg";
import CloseIcon from "../../assets/icons/close.svg";
import GifLogo from "../../assets/gif/Nature.gif";
import Button from "../atoms/Button";

const StyledContainerNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const StyledImgContainer = styled.div`
  width: 120px;
  height: 66px;
  background-image: url(${GifLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: auto;
`;

const zoomInn = keyframes`

0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }

`;
const StyledInput = styled.input`
  align-self: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.smokeyGrey};
  margin: 0 auto;
  animation: ${zoomInn} 0.8s;
  /* animation-fill-mode: both; */

  &:before {
    content: "";
    /* display: block; */
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    /* vertical-align: middle; */
    margin: 5px;
    display: inline-block;
    height: 19px;
    width: 19px;
    background-size: 100% 100%;
  }
`;

const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.smokeyGrey};
  font-weight: bold;
  display: inline-block;
  position: relative;
  animation: ${zoomInn} 0.8s;
  /* font-family: ${({ theme }) => theme.fontFamily.mainFont}, sans-serif; */
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.smokeyGrey};
    transition: width 0.3s;
    position: absolute;
    top: 133%;
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
  } = context;

  return (
    <>
      {isSearchBarOpen ? (
        <>
          <StyledContainer>
            <StyledInput placeholder="search" />
            <Button
              closeIcon={CloseIcon}
              onClickFn={handleSearchBarClose}
            ></Button>
          </StyledContainer>
        </>
      ) : (
        <StyledContainerNav>
          <StyledImgContainer>{/* <img src={GifLogo} /> */}</StyledImgContainer>

          <NavLink to={routes.home}>Home</NavLink>
          <NavLink to={routes.about}>About</NavLink>
          <NavLink to={routes.products}>Products</NavLink>
          <NavLink to={routes.contact}>Contact</NavLink>
          <Button cartIcon={BagIcon} onClickFn={handleCartOpen}>
            {cartQuantity}
          </Button>
          <Button
            searchIcon={SearchIcon}
            onClickFn={handleSearchBarOpen}
          ></Button>
        </StyledContainerNav>
      )}
    </>
  );
};

export default Navbar;
