import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const StyledSlider = styled(AutoplaySlider)`
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

export const StyledSliderContent = styled.div`
  z-index: 999;
`;
export const StyledIcon = styled.img`
  width: 40px;
  @media (max-width: 903px) {
    width: 30px;
  }

  @media (max-width: 682px) {
    width: 25px;
  }
`;
