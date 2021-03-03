import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  background-image: url(${(props) => props.navbarImage});
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

export const AboutWrapper = styled.div`
  display: flex;
  margin: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  width: 50%;
  text-align: center;
  padding-right: 30px;

  @media (max-width: 850px) {
    width: 100%;
    padding-right: 0px;
  }

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-bottom: 30px;

    @media (max-width: 550px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-bottom: 30px;
    @media (max-width: 1000px) {
      font-size: 25px;
    }
    @media (max-width: 850px) {
      font-size: 30px;
    }
    @media (max-width: 550px) {
      font-size: 20px;
    }
  }
`;

export const AboutOfferLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const AboutOfferIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`;
