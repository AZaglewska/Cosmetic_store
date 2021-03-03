import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

export const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    label: {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    color: "#eccada",
    border: "1px solid #eccada",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    width: "150px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#eccada",
      color: "#eccada",
      boxShadow: "0 0 0 0.2rem #eccada",
    },
    "@media (max-width: 990px)": {
      // width: "90%",
    },
  },
}))(InputBase);

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  menu: {
    color: "rgba(144, 149, 162, 0.8)",
  },
}));
