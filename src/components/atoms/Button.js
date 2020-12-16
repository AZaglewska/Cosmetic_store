import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: ${({ type }) => (type === "second" ? "blue" : "red")};
  padding: 10px 20px;
  outline: none;
  cursor: pointer;

  ${({ type }) =>
    type === "thrid" &&
    css`
      color: yellow;
      background-color: black;
      border: none;
      border-radius: 12px;
      padding: 50px;
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
      color: #4ea69e;
      font-size: 16px;
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
      /* background-position: 50% 54%; */
      /* color: #4ea69e;
      font-size: 16px; */
    `}

 

    ${({ closeIcon }) =>
    closeIcon &&
    css`
      background-image: url(${closeIcon});
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      background-size: 40%;
      background-position: 59% 64%;

      /* color: #4ea69e;
      font-size: 16px; */
    `}
`;

const Button = ({
  children,
  type,
  onClickFn,
  cartIcon,
  searchIcon,
  closeIcon,
}) => {
  return (
    <StyledButton
      onClick={onClickFn}
      type={type}
      cartIcon={cartIcon}
      searchIcon={searchIcon}
      closeIcon={closeIcon}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
