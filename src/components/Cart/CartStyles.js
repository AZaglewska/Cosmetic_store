import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #DAD8D7",
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 4, 3),
    width: "35vw",
    height: "85vh",
    outline: "none",
    borderRadius: "15px",
    overflowY: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#878F97",
  },

  ul: {
    alignSelf: "flex-start",
    width: "100%",
  },

  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #e9ecef",
    borderRadius: "5px",
    margin: "10px",
    paddingRight: "15px",
  },

  imgContainer: {
    width: "100px",
    height: "100px",
  },

  img: {
    width: "100%",
    height: "100%",

    opacity: "1",
    transition: ".3s ease-in-out",
    "&:hover": {
      opacity: ".7",
    },
  },

  cont: {
    display: "flex",
  },

  modalName: {
    marginBottom: "20px",
  },
  modalPrice: {
    color: "#83c5be",
    fontSize: "20px",
    fontWeight: "bold",
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
      background: "#83c5be",
      color: "white",
    },
  },
  modalQuantity: {
    alignSelf: "center",
    width: "15px",
  },
  button: {
    backgroundColor: "#83c5be",
    "&:hover": {
      background: "#66B7B0",
    },
  },
}));
