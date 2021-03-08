import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export const PoperLink = styled(Link)``;

export const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid #ADADAD",
    borderRadius: "5px",
    width: "70vw",
    overflow: "auto",
    marginTop: "80px",
    color: "#9e9e9e",

    "@media (max-width: 650px)": {
      width: "60vw",
    },
    "@media (max-width: 400px)": {
      width: "80vw",
    },
  },

  poperAlert: {
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "rgba(230, 230, 230, 0.90)",
  },

  poperList: {
    overflowY: "scroll",
    height: "450px",
  },
  singleProductPoperList: {
    height: "377px",
  },

  poperListElement: {
    display: "flex",
    backgroundColor: "rgba(230, 230, 230, 0.90)",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ced4da",
    textAlign: "center",
    "@media (max-width: 650px)": {
      flexDirection: "column",
    },

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
    },
  },
  poperProduct: {
    marginBottom: "15px",

    "@media (max-width: 650px)": {
      marginTop: "15px",
    },
  },

  poperPrice: {
    fontSize: "20px",
    fontWeight: "500",
    "@media (max-width: 650px)": {
      marginBottom: "15px",
    },
  },

  poperButton: {
    backgroundColor: "#ECCADA",
    marginRight: "15px",

    "@media (max-width: 650px)": {
      margin: "0 0 20px",
    },
    "&:hover": {
      background: "#d0afbf",
    },
  },
  poperImage: {
    width: "130px",
    height: "100px",
    opacity: ".8",
    "&:hover": {
      opacity: "1",
    },

    "@media (max-width: 650px)": {
      width: "100%",
      height: "200px",
    },
  },
}));
