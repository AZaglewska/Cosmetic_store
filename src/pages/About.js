import React, { useContext } from "react";
import CosmeticStoreContext from "../context";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import Background from "../assets/navbarImages/13.jpg";

const StyledWrapper = styled.div`
  background-image: url(${(props) => props.bg});
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 80% 35%;
  background-size: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
`;

const About = () => {
  const context = useContext(CosmeticStoreContext);

  const { color, changeColor } = context;

  return (
    <>
      <StyledWrapper bg={Background}></StyledWrapper>

      {/* <Button>first</Button>
      <Button onClickFn={() => console.log("click")} type="second">
        second
      </Button>
      <Button type="thrid">thrid</Button> */}
    </>
  );
};

export default About;
