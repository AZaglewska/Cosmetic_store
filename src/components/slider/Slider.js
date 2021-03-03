import React, { useContext } from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import image1 from "../../assets/sliderImages/sliderimage1.jpg";
import image2 from "../../assets/sliderImages/sliderimage2.jpg";
import iconRight from "../../assets/icons/next.svg";
import iconLeft from "../../assets/icons/left-arrow.svg";
import styles from "./Slider.css";
import CosmeticStoreContext from "../../context";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 100%;
  margin-top: -100px;
  overflow: hidden;

  z-index: ${({ isPopperOpen }) => (isPopperOpen ? "-1" : "1")};

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
  z-index: 999;
`;
const StyledIcon = styled.img`
  width: 40px;
  @media (max-width: 903px) {
    width: 30px;
  }

  @media (max-width: 682px) {
    width: 25px;
  }
`;

const Slider = () => {
  const context = useContext(CosmeticStoreContext);
  const { showProductsPoper } = context;

  return (
    <>
      <StyledSliderContent>
        <StyledSlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          mobileTouch={true}
          organicArrows={false}
          fillParent={false}
          cssModule={styles}
          buttonContentRight={<StyledIcon src={iconRight} alt="" />}
          buttonContentLeft={<StyledIcon src={iconLeft} alt="" />}
          isPopperOpen={showProductsPoper}
        >
          <div className="slider-container" data-src={image1}>
            <div className="slider-content">
              <h1 className="slider-title">Eve cosmetics</h1>
              <h2 className="slider-text">
                Lorem ipsum dolor, sit amet consectetur
              </h2>
              <button className="slider-button"> Shop Now </button>
            </div>
          </div>

          <div className="slider-container" data-src={image2}>
            <div className="slider-content">
              <h1 className="slider-title">Pure nature</h1>
              <h2 className="slider-text">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <button className="slider-button"> Shop Now </button>
            </div>
          </div>
        </StyledSlider>
      </StyledSliderContent>
    </>
  );
};

export default Slider;
