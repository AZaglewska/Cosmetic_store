import styled from "styled-components";
import { Link } from "react-router-dom";
import { zoomIn } from "../../../GlobalStyles/animations";
import Logo from "../../../assets/logo/Eve.png";
import HamburgerMenuIcon from "react-hamburger-menu";

export const StyledContainerNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  z-index: 999;
`;

export const LinkCont = styled.div`
  margin-right: auto;
  margin-left: 10px;

  @media (max-width: 880px) {
    display: none;
  }
`;
export const StyledImgContainer = styled(Link)`
  width: 160px;
  height: 66px;
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-top: 10px;
  margin-left: -20px;

  @media (max-width: 880px) {
    margin-right: auto;
  }

  @media (max-width: 682px) {
    width: 120px;
    margin-top: -8px;
  }
`;

export const StyledButtonContainer = styled.div`
  margin-right: 50px;

  @media (max-width: 682px) {
    margin-top: -15px;
  }
`;

export const StyledCircle = styled.div`
  height: 22px;
  width: 22px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 50%;
  position: absolute;
  bottom: 14px;
  padding-top: 4px;
  font-size: 12px;
`;

export const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  display: inline-block;
  position: relative;
  animation: ${zoomIn} 0.8s;

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

export const StyledHamburgerMenuIcon = styled(HamburgerMenuIcon)`
  cursor: pointer;
  position: absolute !important;
  z-index: 2000;
  top: 4%;
  right: 2%;

  @media (min-width: 880px) {
    display: none;
  }
  @media (max-width: 682px) {
    top: 1.5%;
  }
`;
