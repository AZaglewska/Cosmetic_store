import React, { useContext } from "react";
import CosmeticStoreContext from "../context";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "30vw",
    height: "85vh",
    outline: "none",
    borderRadius: "20px",
    overflowY: "auto",
  },
  test: {
    padding: "16px 26px",
    color: "yellow",
  },
}));

const Cart = () => {
  const context = useContext(CosmeticStoreContext);

  const { isCartOpen, handleCartClose } = context;

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isCartOpen}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          <div className={classes.paper}>
            <h2>Your cart</h2>

            <ul></ul>
          </div>
        </Fade>
      </Modal>
      {/* <Button className={classes.test}>click me</Button> */}
    </div>
  );
};
export default Cart;
