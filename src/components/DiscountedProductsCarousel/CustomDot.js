import React from "react";
import styled from "styled-components";

const DotList = styled.li`
  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.pink};
    margin: 2px;
  }
`;

const CustomDot = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    <DotList>
      <button
        style={{ background: active ? "#ECCADA" : "initial" }}
        onClick={() => onClick()}
      />
    </DotList>
  );
};

export default CustomDot;
