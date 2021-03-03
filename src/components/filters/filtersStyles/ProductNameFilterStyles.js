import styled from "styled-components";

export const SearchProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  label {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
    @media (max-width: 990px) {
      margin-top: 22px;
    }
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
    transition: ease-in 1s;
    padding-top: 5px;
    color: ${({ theme }) => theme.colors.smokeyGrey};

    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
    &:focus {
      border-color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
