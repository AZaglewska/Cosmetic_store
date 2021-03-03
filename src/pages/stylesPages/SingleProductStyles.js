import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  background-image: url(${(props) => props.navbarImage});
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 80% 55%;
  background-size: cover;
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SingleProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 850px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
export const SingleProductImg = styled.img`
  border-radius: 5px;
  transition: transform 1s ease;
  width: 100%;
`;

export const SingleImgWrapper = styled.div`
  overflow: hidden;
  width: 40%;
  height: 100%;
  border-radius: 5px;

  @media (max-width: 850px) {
    width: 80%;
  }
  &:hover ${SingleProductImg} {
    transform: scale(1.5);
  }
`;

export const SingleProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 50%;
  padding-top: 100px;
  padding-left: 30px;
  @media (max-width: 850px) {
    padding-top: 40px;
  }

  @media (max-width: 850px) {
    width: 90%;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.lightGrey};
    @media (max-width: 1088px) {
      font-size: 30px;
    }

    @media (max-width: 379px) {
      font-size: 25px;
    }
  }
  div {
    display: flex;
  }
  img {
    width: 35px;
    height: 35px;
    margin-right: 20px;
  }

  h3 {
    border: 1px solid ${({ theme }) => theme.colors.pink};
    border-radius: 5px;
    padding: 9px;
    font-size: 25px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.pink};
    @media (max-width: 1088px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-bottom: 40px;
    @media (max-width: 1088px) {
      font-size: 20px;
    }
    @media (max-width: 850px) {
      margin-bottom: 10px;
    }
  }
`;
export const CartIconSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: white;
  transition: fill 1s;
  margin-right: 10px;
`;

export const SingleProductLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
`;

export const BackIcon = styled.img`
  width: 30px;
  margin-right: 5px;
`;
