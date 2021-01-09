import React from "react";
import ProductsFilterMenu from "../components/filters/ProductsFilterMenu";
import ProductsList from "../components/ProductsList/ProductsList";
import styled from "styled-components";
import Background from "../assets/navbarImages/10.jpg";

const StyledWrapper = styled.div`
  background-image: url(${(props) => props.bg});
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
`;

const Products = () => {
  return (
    <>
      <StyledWrapper bg={Background}></StyledWrapper>
      <h1>Products</h1>
      <ProductsFilterMenu />

      <ProductsList />
    </>
  );
};

export default Products;
