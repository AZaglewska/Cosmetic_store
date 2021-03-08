import React, { useState } from "react";
import ProductsFilterMenu from "../components/filters/ProductsFilterMenu";
import ProductsList from "../components/ProductsList/ProductsList";
import {
  StyledWrapper,
  ProductWrapper,
  StyledArrowUp,
} from "./stylesPages/ProductsStyles";
import navbarImage from "../assets/navbarImages/navbarImage2.jpg";
import arrowUp from "../assets/icons/up-arrow.svg";
import { animateScroll as scroll } from "react-scroll";

const Products = () => {
  const [showArrowTop, setShowArrowTop] = useState(false);

  const showAndHideArrowTop = () => {
    if (!showArrowTop && window.pageYOffset > 400) {
      setShowArrowTop(true);
    } else if (showArrowTop && window.pageYOffset <= 400) {
      setShowArrowTop(false);
    }
  };

  window.addEventListener("scroll", showAndHideArrowTop);

  return (
    <>
      <StyledWrapper navbarImage={navbarImage}></StyledWrapper>
      {showArrowTop ? (
        <StyledArrowUp icon={arrowUp} onClick={() => scroll.scrollToTop()} />
      ) : null}
      <ProductWrapper>
        <ProductsFilterMenu />
        <h1>Our Products</h1>
        <ProductsList />
      </ProductWrapper>
    </>
  );
};

export default Products;
