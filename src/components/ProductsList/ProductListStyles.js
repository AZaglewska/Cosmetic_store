import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.ul`
  list-style: none;
  display: grid;
  width: 100vw;
  margin: auto;
  max-width: 1200px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1170px) {
    display: flex;
    flex-wrap: wrap;
    max-width: none;
    width: 90vw;
    justify-content: center;
  }

  img {
    height: 15rem;
    width: 350px;
    transform: scale(1);
    transition: transform 0.9s ease;
    border-radius: 5px;
  }
  @media (max-width: 375px) {
    img {
      width: 270px;
    }
  }
`;

export const TransparentBox = styled.div`
  height: 15rem;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.6s ease;

  @media (max-width: 375px) {
    width: 270px;
  }
`;

export const ButtonIconSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: white;
  transition: fill 1s;
  margin-right: 10px;
`;

export const IconSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.lightGrey};
  transition: ease 1s;
  margin-right: 10px;
`;

export const DetailsLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.548);
  transition: ease 1s;
`;
export const ButtonBox = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-out;

  button {
    background-color: ${({ theme }) => theme.colors.transparentGrey};
    color: rgba(255, 255, 255, 0.548);
    font-size: 20px;
    border: none;
    padding: 20px 20px 20px 20px;
    border-radius: 5px;
    outline: none;
    transition: ease 1s;
    &:hover {
      backdrop-filter: blur(3px);
      color: ${({ theme }) => theme.colors.pink};
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    &:hover ${DetailsLink} {
      color: ${({ theme }) => theme.colors.pink};
    }
    &:hover ${IconSvg} {
      fill: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export const ImageBox = styled.div`
  box-sizing: content-box;
  height: 15rem;
  width: 350px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;

  @media (max-width: 375px) {
    width: 270px;
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

export const ProductContent = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
`;

export const ProductContentWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;
