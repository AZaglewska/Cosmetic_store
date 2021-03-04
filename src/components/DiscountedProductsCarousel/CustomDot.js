import React from "react";
import styled from "styled-components";

const DotList = styled.li`
  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.pink};
    margin: 2px;
    outline: none;
    cursor: pointer;
  }
`;

const CustomDot = ({ onClick, active }) => {
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
