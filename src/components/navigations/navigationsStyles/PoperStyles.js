import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid #ADADAD",
    borderRadius: "5px",
    width: "70vw",
    overflow: "auto",
    marginTop: "20px",
    color: "#9e9e9e",
    "@media (max-width: 591px)": {
      width: "90vw",
    },
  },

  poperAlert: {
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "rgba(230, 230, 230, 0.90)",
  },

  poperList: {
    display: "flex",
    backgroundColor: "rgba(230, 230, 230, 0.90)",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ced4da",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "rgba(219, 219, 219, 0.89)",
    },
  },

  poperContent: {
    display: "flex",
    width: "50%",
    justifyContent: "space-evenly",

    "@media (max-width: 864px)": {
      flexDirection: "column",
      width: "20%",
    },
  },
  poperProduct: {
    marginBottom: "10px",
  },

  poperPrice: {
    fontSize: "20px",
    fontWeight: "500",
  },

  poperButton: {
    backgroundColor: "#ECCADA",
    marginRight: "15px",
    "@media (max-width: 450px)": {
      fontSize: "9px",
    },
    "&:hover": {
      background: "#d0afbf",
    },
  },
  poperImage: {
    width: "130px",
    height: "100px",

    "@media (max-width: 864px)": {
      width: "100px",
    },

    "@media (max-width: 413px)": {
      display: "none",
    },
  },
}));
