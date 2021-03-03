import React, { useContext } from "react";
import CosmeticStoreContext from "../context";
import { routes } from "../routes/index";
import Button from "../components/atoms/Button";
import navbarImage from "../assets/navbarImages/navbarImage3.jpg";
import backArrow from "../assets/icons/back-button.svg";
import priceIcon from "../assets/icons/price-tag.svg";
import {
  StyledWrapper,
  SingleProductWrapper,
  SingleProductImg,
  SingleImgWrapper,
  SingleProductContent,
  CartIconSvg,
  SingleProductLink,
  BackIcon,
} from "./stylesPages/SingleProductStyles";

const SingleProduct = (props) => {
  const context = useContext(CosmeticStoreContext);
  const {
    addProductToCart,
    checkDuplicatesInCart,
    increaseCartQuantity,
  } = context;

  const {
    productId,
    productName,
    productPrice,
    productImage,
    productDescription,
  } = props.location.state;
  return (
    <>
      <StyledWrapper navbarImage={navbarImage}></StyledWrapper>
      <SingleProductWrapper>
        <SingleImgWrapper>
          <SingleProductImg src={productImage} alt={productName} />
        </SingleImgWrapper>

        <SingleProductContent>
          <h2>{productName}</h2>
          <div>
            <img src={priceIcon} />
            <h3>{productPrice}$</h3>
          </div>

          <p>{productDescription}</p>
          <Button
            styleType="pinkProductsButton"
            singleProduct
            onClickFn={() => {
              checkDuplicatesInCart(productId);
              addProductToCart(productId);
              increaseCartQuantity();
            }}
          >
            <CartIconSvg viewBox="0 0 512 512">
              <path d="M443.188,442.208L415.956,142.56c-0.768-8.256-7.68-14.56-15.968-14.56h-48V96c0-25.728-9.952-49.888-28.032-67.968    C305.876,9.952,281.716,0,255.988,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.82,442.208    c-1.632,17.856,4.384,35.712,16.48,48.96S114.612,512,132.564,512h246.88c17.952,0,35.168-7.584,47.264-20.832    S444.788,460.064,443.188,442.208z M191.988,96c0-35.296,28.704-64,64-64c17.184,0,33.28,6.624,45.344,18.656    c12.064,12.032,18.656,28.16,18.656,45.344v32h-128V96z M403.06,469.6c-6.144,6.688-14.528,10.4-23.648,10.4H132.564    c-9.088,0-17.504-3.712-23.616-10.432c-6.144-6.72-9.056-15.392-8.224-24.48L126.612,160h33.376v48c0,8.832,7.168,16,16,16    c8.832,0,16-7.168,16-16v-48h128v48c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-48h33.376l25.92,285.12    C412.116,454.176,409.204,462.88,403.06,469.6z" />
            </CartIconSvg>
            Add to cart
          </Button>
        </SingleProductContent>
      </SingleProductWrapper>
      <SingleProductLink to={routes.products}>
        <BackIcon src={backArrow} />
        Back
      </SingleProductLink>
    </>
  );
};

export default SingleProduct;
