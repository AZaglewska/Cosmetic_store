import React from "react";
import styled from "styled-components";
import Slider from "../components/slider/Slider";

const Home = () => {
  const SliderWraper = styled.div`
    width: 100%;
    height: 80vh;
    margin: 0;
  `;

  return (
    <>
      <SliderWraper>
        <Slider />
      </SliderWraper>

      <h1>Home</h1>
    </>
  );
};

export default Home;
