import { Checkbox, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  @media (max-width: 990px) {
    margin-top: 22px;
  }
  label {
    color: ${({ theme }) => theme.colors.smokeyGrey};
    margin-left: 1px;
  }
`;

//material styles
export const GreenCheckbox = withStyles({
  root: {
    color: "#eccada",
    "&$checked": {
      color: "#eccada",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
