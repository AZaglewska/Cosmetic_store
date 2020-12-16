import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import {
  GridContainer,
  StyledProductWrapper,
  ImageBox,
  TransparentBox,
  ButtonBox,
} from "./ProductListStyles";

const ProductsList = () => {
  const context = useContext(CosmeticStoreContext);
  const {
    addProductToCart,
    checkDuplicatesInCart,
    increaseCartQuantity,
  } = context;

  return (
    <>
      <GridContainer>
        {context.products.map((product) => {
          const {
            productId,
            productName,
            productPrice,
            productCategory,
            productImage,
            productDescription,
          } = product;
          return (
            <StyledProductWrapper key={productId}>
              <ImageBox>
                <img src={productImage} alt={productName} />

                <TransparentBox>
                  <ButtonBox>
                    <button
                      onClick={() => {
                        checkDuplicatesInCart(productId);
                        addProductToCart(productId);
                        increaseCartQuantity();
                      }}
                    >
                      Dodaj do koszyka
                    </button>
                  </ButtonBox>
                </TransparentBox>
              </ImageBox>
              <div>
                <h4>nazwa: {productName}</h4>
                <p>cena: {productPrice}</p>
                <p>kategoria: {productCategory}</p>
              </div>
            </StyledProductWrapper>
          );
        })}
      </GridContainer>
    </>
  );
};

export default ProductsList;
