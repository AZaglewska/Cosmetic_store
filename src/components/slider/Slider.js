import React, { useContext } from "react";
import "react-awesome-slider/dist/styles.css";
import image1 from "../../assets/sliderImages/sliderimage1.jpg";
import image2 from "../../assets/sliderImages/sliderimage2.jpg";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import iconRight from "../../assets/icons/next.svg";
import iconLeft from "../../assets/icons/left-arrow.svg";
import { StyledSlider, StyledSliderContent, StyledIcon } from "./SliderStyles";
import styles from "./Slider.css";
import NotificationContext from "../../context/notificationContext";

const Slider = () => {
  const notificationContext = useContext(NotificationContext);
  const { showProductsPoper } = notificationContext;

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
              <Link to={routes.products}>
                <button className="slider-button"> Shop Now </button>
              </Link>
            </div>
          </div>

          <div className="slider-container" data-src={image2}>
            <div className="slider-content">
              <h1 className="slider-title">Pure nature</h1>
              <h2 className="slider-text">
                Lorem ipsum dolor sit amet consectetur
              </h2>

              <Link to={routes.products}>
                <button className="slider-button"> Shop Now </button>
              </Link>
            </div>
          </div>
        </StyledSlider>
      </StyledSliderContent>
    </>
  );
};

export default Slider;
