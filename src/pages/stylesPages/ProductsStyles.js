import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-image: url(${(props) => props.navbarImage});
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.smokeyGrey};
  h1 {
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledArrowUp = styled.button`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-position: 50%;
  background-size: 100%;
  position: fixed;
  z-index: 10000;
  bottom: 4%;
  right: 4%;
`;
