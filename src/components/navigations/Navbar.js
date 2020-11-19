import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";

const Navbar = () => {
  const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    background-color: rgba(194, 200, 214, 0.94);
  `;

  const NavLink = styled(Link)`
    margin: 10px;
    text-decoration: none;
    font-size: 30px;
    color: rgba(144, 149, 162, 0.8);
    font-weight: bold;
    display: inline-block;
    position: relative;

    &:after {
      content: "";
      display: block;
      width: 0;
      height: 4px;
      background: rgba(144, 149, 162, 0.8);
      transition: width 0.3s;
      position: absolute;
      top: 133%;
    }

    &:hover:after {
      width: 100%;
      transition: 0.3s;
    }
  `;

  return (
    <StyledContainer>
      <NavLink to={routes.home}>Home</NavLink>
      <NavLink to={routes.about}>About</NavLink>
      <NavLink to={routes.products}>Products</NavLink>
      <NavLink to={routes.contact}>Contact</NavLink>
    </StyledContainer>
  );
};

export default Navbar;
