import React from "react";
import styled, { css } from "styled-components";
import { zoomIn } from "../../GlobalStyles/animations";
import { ButtonIconSvg } from "../../components/ProductsList/ProductListStyles";
import { CartIconSvg } from "../../pages/stylesPages/SingleProductStyles";

const StyledButton = styled.button`
  color: white;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;

  ${({ styleType }) =>
    styleType === "pinkShopButton" &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.pink};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.pink};
      outline: none;
      cursor: pointer;
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
        props.form ? " #cea1b6" : "rgba(255, 255, 255, 0.25)"};
      opacity: 0.8;
      box-shadow: 6px 7px 19px 2px #dbb7bc;
      border-radius: 5px;
      outline: none;
      border: none;
      padding: 20px 50px;
      color: white;
      font-size: 20px;
      cursor: pointer;
      transition: fill 1s;
      &:active {
        transform: translateY(1px);
      }

      &:hover {
        opacity: 1;
        color: ${({ theme }) => theme.colors.lightYellow};
      }

      @media (max-width: 413px) {
        width: 80%;
        height: 50px;
        font-size: 12px;
      }
    `}

    ${({ styleType }) =>
    styleType === "pinkProductsButton" &&
    css`
      background: ${({ theme }) => theme.colors.pink};
      opacity: 0.8;
      box-shadow: 6px 7px 19px 2px #dbb7bc;
      border-radius: 5px;
      outline: none;
      border: none;
      padding: ${(props) =>
        props.singleProduct ? " 20px 30px;" : " 15px 20px;"};
      color: white;
      font-size: 18px;
      margin: 20px 0;
      cursor: pointer;
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
  form,
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
      form={form}
      singleProduct={singleProduct}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
