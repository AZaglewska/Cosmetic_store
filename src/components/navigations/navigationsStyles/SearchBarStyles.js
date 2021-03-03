import styled from "styled-components";
import { zoomIn } from "../../../GlobalStyles/animations";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5px;
  height: 60px;
  background-color: transparent;
  z-index: 999;
`;

export const StyledSearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  width: 90%;
  align-self: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  animation: ${zoomIn} 0.8s;
  position: relative;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightGrey};
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const SearchInputIcon = styled.div`
  background-image: url(${({ searchIcon }) => searchIcon});
  background-size: 100%;
  background-position: 50%;
  height: 22px;
  width: 22px;
  background-repeat: no-repeat;
  animation: ${zoomIn} 0.8s;
  margin: 5px;
`;
