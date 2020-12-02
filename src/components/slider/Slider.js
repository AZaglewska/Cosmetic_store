import React from "react";
import styled from "styled-components";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import image1 from "../../assets/sliderImages/pexels-elly-fairytale-3865674.jpg";
import image2 from "../../assets/sliderImages/pexels-elly-fairytale-3865676.jpg";
import image3 from "../../assets/sliderImages/pexels-elly-fairytale-3865680.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 100%;
  height: 90%;
  margin: auto;
  /* overflow: hidden; */

  --slider-height-percentage: 60%;
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
  --loader-bar-color: grey;
  --loader-bar-height: 8px;
`;

const Slider = () => {
  return (
    <>
      <StyledSlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={image1} />
        <div data-src={image2} />
        <div data-src={image3} />
      </StyledSlider>
    </>
  );
};

export default Slider;
