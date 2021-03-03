import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import Button from "../atoms/Button";
import {
  GridContainer,
  StyledProductWrapper,
  ImageBox,
  TransparentBox,
  ButtonBox,
  ProductContent,
  ProductContentWrapper,
  IconSvg,
  DetailsLink,
  ButtonIconSvg,
} from "./ProductListStyles";

const ProductsList = () => {
  const context = useContext(CosmeticStoreContext);
  const {
    addProductToCart,
    checkDuplicatesInCart,
    increaseCartQuantity,
    products,
  } = context;

  return (
    <>
      {products.length === 0 ? (
        <h5>No results</h5>
      ) : (
        <GridContainer>
          {products.map((product) => {
            const {
              productId,
              productName,
              productPrice,
              productCategory,
              productImage,
            } = product;
            return (
              <StyledProductWrapper key={productId}>
                <ImageBox>
                  <img src={productImage} alt={productName} />

                  <TransparentBox>
                    <ButtonBox>
                      <button>
                        <IconSvg viewBox="0 0 512 512">
                          <path d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z     M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256    S378.337,477.867,256,477.867z" />
                          <path d="M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067    s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z" />
                          <path d="M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133    S274.821,124.122,256,124.122z" />
                        </IconSvg>
                        <DetailsLink
                          to={{
                            pathname: `/product/${productName.replace(
                              /\s/g,
                              ""
                            )}`,
                            state: {
                              ...product,
                            },
                          }}
                        >
                          view product
                        </DetailsLink>
                      </button>
                    </ButtonBox>
                  </TransparentBox>
                </ImageBox>
                <ProductContentWrapper>
                  <h4> {productName}</h4>
                  <ProductContent>
                    <p>{productCategory}</p>
                    <p>{productPrice} $</p>
                  </ProductContent>
                </ProductContentWrapper>
                <Button
                  styleType="pinkProductsButton"
                  onClickFn={() => {
                    checkDuplicatesInCart(productId);
                    addProductToCart(productId);
                    increaseCartQuantity();
                  }}
                >
                  <ButtonIconSvg viewBox="0 0 512 512">
                    <path d="M443.188,442.208L415.956,142.56c-0.768-8.256-7.68-14.56-15.968-14.56h-48V96c0-25.728-9.952-49.888-28.032-67.968    C305.876,9.952,281.716,0,255.988,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.82,442.208    c-1.632,17.856,4.384,35.712,16.48,48.96S114.612,512,132.564,512h246.88c17.952,0,35.168-7.584,47.264-20.832    S444.788,460.064,443.188,442.208z M191.988,96c0-35.296,28.704-64,64-64c17.184,0,33.28,6.624,45.344,18.656    c12.064,12.032,18.656,28.16,18.656,45.344v32h-128V96z M403.06,469.6c-6.144,6.688-14.528,10.4-23.648,10.4H132.564    c-9.088,0-17.504-3.712-23.616-10.432c-6.144-6.72-9.056-15.392-8.224-24.48L126.612,160h33.376v48c0,8.832,7.168,16,16,16    c8.832,0,16-7.168,16-16v-48h128v48c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-48h33.376l25.92,285.12    C412.116,454.176,409.204,462.88,403.06,469.6z" />
                  </ButtonIconSvg>
                  Add to cart
                </Button>
              </StyledProductWrapper>
            );
          })}
        </GridContainer>
      )}
    </>
  );
};

export default ProductsList;
