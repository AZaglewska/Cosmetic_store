import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import bagIcon from "../../assets/icons/shopping-bag.svg";
import searchIcon from "../../assets/icons/search.svg";
import closeIcon from "../../assets/icons/close.svg";
import gifLogo from "../../assets/gif/Nature.gif";
import Button from "../atoms/Button";
import { zoomIn } from "../../GlobalStyles/animations";

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
  background-image: url(${gifLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: auto;
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.smokeyGrey};
  animation: ${zoomIn} 0.8s;
  position: relative;
`;

const SearchInputIcon = styled.div`
  background-image: url(${({ searchIcon }) => searchIcon});
  background-size: 70%;
  background-position: 50%;
  height: 19px;
  width: 19px;
  background-repeat: no-repeat;
  animation: ${zoomIn} 0.8s;
`;

const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.smokeyGrey};
  font-weight: bold;
  display: inline-block;
  position: relative;
  animation: ${zoomIn} 0.8s;
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

          <NavLink to={routes.home}>Home</NavLink>
          <NavLink to={routes.about}>About</NavLink>
          <NavLink to={routes.products}>Products</NavLink>
          <NavLink to={routes.contact}>Contact</NavLink>
          <Button cartIcon={bagIcon} onClickFn={handleCartOpen}>
            {cartQuantity}
          </Button>
          <Button
            searchIcon={searchIcon}
            onClickFn={handleSearchBarOpen}
          ></Button>
        </StyledContainerNav>
      )}
    </>
  );
};

export default Navbar;
