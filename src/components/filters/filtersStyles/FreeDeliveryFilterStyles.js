import { Checkbox, withStyles } from "@material-ui/core";

export const GreenCheckbox = withStyles({
  root: {
    color: "#eccada",
    "&$checked": {
      color: "#eccada",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
