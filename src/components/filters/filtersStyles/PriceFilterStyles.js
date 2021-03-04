import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    margin-top: 22px;
  }
  label {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  }
`;

//material styles

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
  slider: {
    color: "lightGrey",
    width: "100%",
  },
}));
