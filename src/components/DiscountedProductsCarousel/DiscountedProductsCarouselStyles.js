import styled from "styled-components";

export const CarouselText = styled.p`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.pink};

  @media (max-width: 470px) {
    font-size: 1.8rem;
  }

  @media (max-width: 413px) {
    font-size: 1.5rem;
  }

  @media (max-width: 350px) {
    font-size: 1.2rem;
  }

  &:before,
  &:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
    margin: auto;
  }
  &:before {
    margin-right: 10px;
    @media (max-width: 350px) {
      margin-right: 5px;
    }
  }
  &:after {
    margin-left: 10px;
    @media (max-width: 350px) {
      margin-left: 5px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const CarouselBox = styled.div`
  background-color: ${({ theme }) => theme.colors.pink};
  width: 300px;
  height: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;

  @media (max-width: 413px) {
    width: 200px;
    height: 20rem;
    font-size: 17px;
  }
`;

export const CarouselProductPrice = styled.h4`
  margin: 7px;
  font-weight: ${(props) => (props.lineThrough ? "300" : "600")};
  color: ${(props) => (props.lineThrough ? "#fffada" : "white")};
  text-decoration-line: ${(props) => (props.lineThrough ? "line-through" : "")};
`;
export const CarouselImage = styled.img`
  width: 60%;
  height: 200px;
  margin: 40px 0 20px;
  border-radius: 5px;

  @media (max-width: 413px) {
    height: 100px;
  }
`;
