import { Link } from "react-router-dom";
import styled from "styled-components";
import { zoomIn, show } from "../../../GlobalStyles/animations";

export const MobileNavCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  animation: ${show} 0.5s ease-in-out forwards;
  @media (min-width: 881px) {
    display: none;
  }
`;

export const MobileLinkNav = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  display: inline-block;
  position: relative;
  margin-bottom: auto;
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

export const MobileIconContainer = styled.div``;

export const MobileIconLink = styled.a``;

export const MobileIcon = styled.svg`
  width: 40px;
  height: 66px;
  fill: ${({ theme }) => theme.colors.lightGrey};
  transition: fill 0.5s;
  margin: 10px;
  ${MobileIconLink}:hover & {
    fill: ${({ theme }) => theme.colors.pink};
  }
`;
