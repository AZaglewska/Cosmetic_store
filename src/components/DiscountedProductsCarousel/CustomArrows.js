import React from "react";
import styled from "styled-components";

const LeftArrow = styled.i`
  position: absolute !important;
  left: 40px;
  z-index: 1;
  border: 1px solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  opacity: 0.8;
  cursor: pointer;
  transform: rotate(135deg);

  &:hover {
    opacity: 1;
  }
`;

const RightArrow = styled.i`
  position: absolute !important;
  right: 40px;
  z-index: 1;
  border: 1px solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  opacity: 0.8;
  cursor: pointer;
  transform: rotate(-45deg);
  &:hover {
    opacity: 1;
  }
`;

const CustomLeftArrow = ({ onClick }) => (
  <LeftArrow onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <RightArrow onClick={() => onClick()} />;
};

export { CustomLeftArrow, CustomRightArrow };
