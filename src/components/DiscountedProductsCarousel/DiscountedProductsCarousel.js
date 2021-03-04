import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./CustomDot";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";
import Button from "../atoms/Button";
import {
  CarouselText,
  CarouselWrapper,
  CarouselBox,
  CarouselProductPrice,
  CarouselImage,
  CarouselLink,
} from "./DiscountedProductsCarouselStyles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 600,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 300,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
};

const DiscountedProductsCarousel = ({ deviceType }) => {
  const context = useContext(CosmeticStoreContext);

  const {
    discountProducts,
    addDiscountedProduct,
    increaseCartQuantity,
    checkDuplicatesInCart,
  } = context;

  return (
    <>
      <CarouselText>Best Discounted Products</CarouselText>
      <Carousel
        deviceType={deviceType}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        arrows
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={4000}
        customDot={<CustomDot />}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {discountProducts.map((discountProduct) => {
          const {
            productImage,
            productId,
            productName,
            productPrice,
            oldPrice,
          } = discountProduct;
          return (
            <CarouselWrapper key={productId}>
              <CarouselBox>
                <CarouselLink
                  to={{
                    pathname: `/product/${productName.replace(/\s/g, "")}`,
                    state: {
                      ...discountProduct,
                    },
                  }}
                >
                  <CarouselImage src={productImage} alt={productName} />
                </CarouselLink>

                <h3>{productName}</h3>
                <div>
                  <CarouselProductPrice>{productPrice}$</CarouselProductPrice>
                  <CarouselProductPrice lineThrough>
                    {oldPrice}$
                  </CarouselProductPrice>
                </div>

                <Button
                  styleType="pinkCartButton"
                  onClickFn={() => {
                    checkDuplicatesInCart(productId);
                    addDiscountedProduct(productId);
                    increaseCartQuantity();
                  }}
                >
                  <p>Add to cart</p>
                </Button>
              </CarouselBox>
            </CarouselWrapper>
          );
        })}
      </Carousel>
      <CarouselText>
        <Link to={routes.products}>
          <Button styleType="pinkShopButton">Shop Now</Button>
        </Link>
      </CarouselText>
    </>
  );
};

export default DiscountedProductsCarousel;
