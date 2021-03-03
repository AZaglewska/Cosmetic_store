import React from "react";
import ProductsFilterMenu from "../components/filters/ProductsFilterMenu";
import ProductsList from "../components/ProductsList/ProductsList";
import styled from "styled-components";
import navbarImage from "../assets/navbarImages/navbarImage2.jpg";

const StyledWrapper = styled.div`
  background-image: url(${(props) => props.navbarImage});
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

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.smokeyGrey};
  h1 {
    margin-bottom: 40px;
  }
`;
const Products = () => {
  return (
    <>
      <StyledWrapper navbarImage={navbarImage}></StyledWrapper>
      <ProductWrapper>
        <ProductsFilterMenu />
        <h1>Our Products</h1>
        <ProductsList />
      </ProductWrapper>
    </>
  );
};

export default Products;
