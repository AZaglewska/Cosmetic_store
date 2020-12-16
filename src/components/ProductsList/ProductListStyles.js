import styled from "styled-components";

export const GridContainer = styled.ul`
  list-style: none;
  display: grid;
  width: 76vw;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  /* grid-column-gap: 0px; */
  grid-row-gap: 60px;

  img {
    height: 250px;
    width: 350px;
    transform: scale(1);
    transition: transform 0.9s ease;
  }
`;

export const TransparentBox = styled.div`
  height: 250px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.6s ease;
`;

export const ButtonBox = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-out;

  button {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: none;
    padding: 20px 20px 20px 20px;
    cursor: pointer;
  }
`;
export const ImageBox = styled.div`
  box-sizing: content-box;
  /* margin: 10px; */
  height: 250px;
  width: 350px;
  overflow: hidden;
  /* display: inline-block;
    /* color: white; */
  position: relative;
  /* background-color: white; */

  /* div {
      position: absolute;
      overflow: visible;
    } */
  /* &:first-of-type {
      overflow: visible;
    } */
  &:hover {
    cursor: pointer;
  }
  &:hover img {
    transform: scale(1.1);
  }

  &:hover ${TransparentBox} {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &:hover ${ButtonBox} {
    transform: translateY(-80px) translateX(80px);
    opacity: 1;
  }
`;

export const StyledProductWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
