import React from "react";
import { routes } from "../../routes";
import LogoAnn from "../../assets/logo/AnnLogo.svg";
import {
  FooterContainer,
  FooterImgContainer,
  FooterLink,
} from "./navigationsStyles/FooterStyles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterImgContainer to={routes.home}> </FooterImgContainer>
        <h3>Eve cosmetics</h3>
        <h6>Created by </h6>
        <FooterLink href="https://github.com/AZaglewska" target="_blank">
          <img src={LogoAnn} alt="logo" />
        </FooterLink>
      </FooterContainer>
    </>
  );
};

export default Footer;
