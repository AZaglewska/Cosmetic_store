import React from "react";
import styled from "styled-components";
import Background from "../assets/navbarImages/12.jpg";

const StyledWrapper = styled.div`
  background-image: url(${(props) => props.bg});
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 80% 48%;
  background-size: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
`;

const Contact = () => {
  return (
    <>
      <StyledWrapper bg={Background}></StyledWrapper>
    </>
  );
};

export default Contact;
