import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import image1 from "../../assets/sliderImages/sliderImage1.jpg";
import image2 from "../../assets/sliderImages/sliderImage2.jpg";
import productImage1 from "../../assets/discountedProducts/pexels-karolina-grabowska-4041392 (2).jpg";
import productImage2 from "../../assets/discountedProducts/pexels-karolina-grabowska-4465124 (1).jpg";
import productImage3 from "../../assets/discountedProducts/pexels-karolina-grabowska-4465828.jpg";
import iconRight from "../../assets/icons/next.svg";
import iconLeft from "../../assets/icons/left-arrow.svg";
import "react-awesome-slider/dist/styles.css";
import styles from "./Slider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 100%;
  /* margin-top: 80px; */
  /* margin: auto; */

  overflow: hidden;
  --slider-height-percentage: 45%;

  --slider-transition-duration: 770ms;
  --organic-arrow-thickness: 5px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 42px;
  --organic-arrow-color: grey;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: #4a9c8c;
  --control-bullet-active-color: grey;
  --loader-bar-color: transparent;
  --loader-bar-height: 1px;
`;

const StyledSliderContent = styled.div`
  /* position: relative; */
`;
const StyledProductsContent = styled.div``;

const StyledSliderText = styled.p`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  color: pink;

  &:before,
  &:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid pink;
    margin: auto;
  }
  &:before {
    margin-right: 10px;
  }
  &:after {
    margin-left: 10px;
  }

  button {
    border: 2px solid pink;
    background-color: transparent;
    color: pink;
    outline: none;
    cursor: pointer;
    padding: 20px 40px;
    font-size: 2rem;
    transition: ease 1s;
    border-radius: 5px;
    &:hover {
      background-color: pink;
      color: white;
    }
  }
`;

const StyledBoxContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const StyledBox = styled.div`
  background-color: pink;
  width: 25%;
  height: 25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  button {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 6px 7px 14px -1px #c1929a;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 20px 40px;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;
const StyledImageContainer = styled.div`
  background-image: url(${(props) => props.productImage1});
  /* border: 2px solid red;
  width: 200px;
  height: 200px; */
`;

const StyledBoxImage = styled.img`
  width: 60%;
  height: 200px;
  /* margin-top: 20px; */
  margin: 40px 0 20px;
  border-radius: 5px;
`;

const StyledIcon = styled.img`
  width: 40px;
`;

const Slider = () => {
  return (
    <>
      <StyledSliderContent>
        <StyledSlider
          // play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          // interval={6000}
          mobileTouch={true}
          organicArrows={false}
          fillParent={false}
          cssModule={styles}
          buttonContentRight={<StyledIcon src={iconRight} alt="" />}
          buttonContentLeft={<StyledIcon src={iconLeft} alt="" />}
        >
          <div className="slider-container" data-src={image1}>
            <img className="slider-image" alt="SliderImage" src={image1} />
            <h1 className="slider-title">Nature cosmetics</h1>
            <h2 className="slider-text">
              Lorem ipsum dolor, sit amet consectetur.
            </h2>
            <button className="slider-button"> Shop Now </button>
          </div>

          <div className="slider-container">
            <img className="slider-image" alt="SliderImage" src={image2} />
            <h1 className="slider-title-second">Pure nature </h1>
            <h2 className="slider-text-second">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <button className="slider-button"> Shop Now </button>
          </div>
        </StyledSlider>
      </StyledSliderContent>
      <StyledProductsContent>
        <StyledSliderText>Best Discounted Products</StyledSliderText>
        <StyledBoxContent>
          <StyledBox>
            <StyledBoxImage src={productImage1} />
            <p>Rose serum</p>
            <p> 20$</p>
            <button>Shop now</button>
          </StyledBox>
          <StyledBox>
            <StyledBoxImage src={productImage2} />
            <p>Rose serum</p>
            <p> 20$</p>
            <button>Shop now</button>
          </StyledBox>
          <StyledBox>
            <StyledBoxImage src={productImage3} />
            <p>Rose serum</p>
            <p> 20$</p>
            <button>Shop now</button>
          </StyledBox>
        </StyledBoxContent>
        <StyledSliderText>
          <button>Shop Now</button>
        </StyledSliderText>
      </StyledProductsContent>
    </>
  );
};

export default Slider;
