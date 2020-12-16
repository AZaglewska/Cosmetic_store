import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { useStyles } from "./CartStyles";
import PayPalButton from "../PayPalButton";
const Cart = () => {
  const context = useContext(CosmeticStoreContext);

  const {
    isCartOpen,
    handleCartClose,
    cart,
    deleteProductFromCart,
    cartQuantity,
    addQuantity,
    minusQuantity,
    updateCartHandler,
    increaseCartQuantity,
    decreaseCartQuantity,
    cartTotal,
  } = context;

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
            <h2>Twój koszyk</h2>

            <ul className={classes.ul}>
              {cart.map((cartElement) => {
                const {
                  productName,
                  productId,
                  productPrice,
                  productCategory,
                  productImage,
                  productQuantity,
                } = cartElement;

                return (
                  <li key={productId} className={classes.list}>
                    <div className={classes.imgContainer}>
                      <img
                        className={classes.img}
                        src={productImage}
                        alt={productName}
                      />
                    </div>

                    <div>
                      <h4 className={classes.modalName}>{productName}</h4>
                      <p className={classes.modalPrice}>{productPrice}$</p>
                    </div>
                    <div className={classes.cont}>
                      <button
                        className={classes.modalButton}
                        onClick={() => {
                          minusQuantity(productId);
                          decreaseCartQuantity();
                        }}
                        disabled={productQuantity === 1 ? true : false}
                      >
                        -
                      </button>
                      <p className={classes.modalQuantity}>{productQuantity}</p>
                      <button
                        className={classes.modalButton}
                        onClick={() => {
                          addQuantity(productId);
                          increaseCartQuantity();
                        }}
                      >
                        +
                      </button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteProductFromCart(productId)}
                      >
                        Usuń
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
            {cart.length === 0 ? (
              <p>Koszyk jest pusty, dodaj rzeczy do koszyka</p>
            ) : (
              <>
                <p>Total: {cartTotal}$</p>
                <PayPalButton />
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default Cart;
