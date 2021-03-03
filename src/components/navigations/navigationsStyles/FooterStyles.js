import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/Eve.png";

export const FooterContainer = styled.div`
  margin-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.pink};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  h3 {
    margin-bottom: 5px;
  }
`;

export const FooterImgContainer = styled(Link)`
  width: 160px;
  height: 66px;
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  img {
    width: 30%;
    margin-bottom: 5px;
  }
`;
