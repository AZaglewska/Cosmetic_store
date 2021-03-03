import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 20px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 5px;
  padding: 30px 0;
  width: 90%;

  @media (max-width: 990px) {
    flex-direction: column;
  }
  h2 {
    color: ${({ theme }) => theme.colors.pink};
    @media (max-width: 990px) {
      margin-bottom: 22px;
    }
  }
`;
