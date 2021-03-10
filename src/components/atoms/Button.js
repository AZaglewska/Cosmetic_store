import React from "react";
import styled, { css } from "styled-components";
import { zoomIn } from "../../GlobalStyles/animations";
import { ButtonIconSvg } from "../../components/ProductsList/ProductListStyles";
import { CartIconSvg } from "../../pages/stylesPages/SingleProductStyles";
import { CarouselIconSvg } from "../../components/DiscountedProductsCarousel/DiscountedProductsCarouselStyles";
import { ContactIconSvg } from "../../pages/stylesPages/ContactStyles";

const StyledButton = styled.button`
  color: white;
  padding: 10px 20px;
  outline: none;
  ${({ styleType }) =>
    styleType === "pinkShopButton" &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.pink};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.pink};
      padding: 20px 40px;
      font-size: 2rem;
      transition: ease 1s;
      border-radius: 5px;
      margin-top: -15px;
      &:active {
        transform: translateY(7px);
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.pink};
        color: white;
      }
      @media (max-width: 413px) {
        padding: 15px 30px;
        font-size: 1.5rem;
      }
    `}

  ${({ styleType }) =>
    styleType === "pinkCartButton" &&
    css`
      background: ${(props) =>
        props.isForm ? "#ECCADA" : "rgba(255, 255, 255, 0.25)"};
      opacity: 0.8;
      margin-bottom: ${(props) => (props.isForm ? "20px" : "none")};
      box-shadow: 6px 7px 19px 2px #dbb7bc;
      border-radius: 5px;
      outline: none;
      border: none;
      padding: ${(props) => (props.isForm ? "none" : "20px 50px")};
      width: ${(props) => (props.isForm ? "200px" : "none")};
      color: white;
      font-size: 20px;
      height: ${(props) => (props.isForm ? "70px" : "none")};
      cursor: pointer;
      transition: fill 1s;
      &:active {
        transform: translateY(1px);
      }
      &:hover ${CarouselIconSvg} {
        fill: ${({ theme }) => theme.colors.lightYellow};
      }

      &:hover ${ContactIconSvg} {
        fill: ${({ theme }) => theme.colors.lightYellow};
      }
      &:hover {
        opacity: 1;
        color: ${({ theme }) => theme.colors.lightYellow};
      }

      @media (max-width: 413px) {
        padding: ${(props) => (props.isForm ? "20px 60px" : "15px 25px ")};
      }
    `}

    ${({ styleType }) =>
    styleType === "pinkProductsButton" &&
    css`
      background: ${({ theme }) => theme.colors.pink};
      opacity: 0.8;
      box-shadow: -1px 7px 12px -3px #ceb7c1;
      border-radius: 5px;
      outline: none;
      border: none;
      padding: ${(props) =>
        props.singleProduct ? " 20px 30px;" : " 15px 20px;"};
      color: white;
      font-size: 18px;
      margin: 20px 0;
      transition: fill 1s;

      &:active {
        transform: translateY(1px);
      }

      &:hover ${ButtonIconSvg} {
        fill: ${({ theme }) => theme.colors.lightYellow};
      }

      &:hover ${CartIconSvg} {
        fill: ${({ theme }) => theme.colors.lightYellow};
      }

      &:hover {
        opacity: 1;
        color: ${({ theme }) => theme.colors.lightYellow};
      }
    `}

  ${({ cartIcon }) =>
    cartIcon &&
    css`
      background-image: url(${cartIcon});
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      background-size: 80%;
      background-position: 50% 24%;
      color: #000000;
      font-size: 16px;
      animation: ${zoomIn} 0.8s;
      margin: 0px 10px;
      padding: 23px;

      @media (max-width: 682px) {
        background-size: 60%;
      }
    `}

    ${({ searchIcon }) =>
    searchIcon &&
    css`
      background-image: url(${searchIcon});
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      background-size: contain;
      padding: 15px;
      animation: ${zoomIn} 0.8s;
      @media (max-width: 682px) {
        background-size: 80%;
      }
    `}
    ${({ closeIcon }) =>
    closeIcon &&
    css`
      background-image: url(${closeIcon});
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      background-size: 50%;
      background-position: 59% 64%;
      animation: ${zoomIn} 0.8s;
    `}
`;

const Button = ({
  children,
  styleType,
  onClickFn,
  cartIcon,
  searchIcon,
  closeIcon,
  buttonType,
  isForm,
  singleProduct,
}) => {
  return (
    <StyledButton
      onClick={onClickFn}
      styleType={styleType}
      cartIcon={cartIcon}
      searchIcon={searchIcon}
      closeIcon={closeIcon}
      type={buttonType ? buttonType : "button"}
      isForm={isForm}
      singleProduct={singleProduct}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
