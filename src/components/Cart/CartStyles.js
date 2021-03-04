import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export const CartLink = styled(Link)``;

export const CartTitle = styled.h2`
  margin: 30px 0;
  text-align: center;
`;

export const CartTotal = styled.div`
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 600;
  margin: 20px 0;
  font-size: 20px;
`;

//material styles

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #DAD8D7",
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 1, 3),
    width: "45vw",
    height: "85vh",
    outline: "none",
    borderRadius: "5px",
    overflowY: "auto",
    color: "#878F97",
    "@media (max-width: 1200px)": {
      width: "80vw",
    },
    "@media (max-width: 784px)": {
      width: "90vw",
    },
  },

  ul: {
    width: "100%",
  },

  list: {
    display: "flex",
    border: "2px solid #e9ecef",
    borderRadius: "5px",
    margin: "10px",
    "@media (max-width: 507px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  imgContainer: {},

  img: {
    width: "130px",
    height: "100%",
    opacity: ".8",
    transition: ".3s ease-in-out",
    "@media (max-width: 596px)": {
      width: "165px",
    },
    "@media (max-width: 507px)": {
      width: "100%",
    },
    "&:hover": {
      opacity: "1",
    },
  },

  modalContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 20px",
    "@media (max-width: 596px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  cont: {
    display: "flex",
    "@media (max-width: 596px)": {
      marginBottom: "20px",
    },
  },

  modalName: {
    margin: " 10px 0",
  },
  modalPrice: {
    color: "#ECCADA",
    fontSize: "20px",
    fontWeight: "bold",
    margin: " 10px 0",
  },

  modalButton: {
    width: "28px",
    height: "28px",
    margin: "10px",
    border: "1px solid #ced4da",
    borderRadius: "5px",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      background: "#ECCADA",
      color: "white",
    },
  },
  modalQuantity: {
    alignSelf: "center",
    width: "15px",
  },
  button: {
    backgroundColor: "#ECCADA",
    "@media (max-width: 300px)": {
      width: "82px",
      height: "40px",
      marginTop: "5px",
      fontSize: "11px",
    },
    "&:hover": {
      background: "#DFC1CF",
    },
  },
}));
