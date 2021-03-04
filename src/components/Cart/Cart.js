import React, { useContext } from "react";
import CosmeticStoreContext from "../../context";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { useStyles, CartTotal, CartTitle, CartLink } from "./CartStyles";
import PayPalButton from "../PayPalButton";

const Cart = () => {
  const context = useContext(CosmeticStoreContext);

  const {
    isCartOpen,
    handleCartClose,
    cart,
    deleteProductFromCart,
    addQuantity,
    minusQuantity,
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
            <CartTitle>Your Shopping Cart</CartTitle>

            <ul className={classes.ul}>
              {cart.map((cartElement) => {
                const {
                  productName,
                  productId,
                  productPrice,
                  productImage,
                  productQuantity,
                } = cartElement;

                return (
                  <li key={productId} className={classes.list}>
                    <div className={classes.imgContainer}>
                      <CartLink
                        to={{
                          pathname: `/product/${productName.replace(
                            /\s/g,
                            ""
                          )}`,
                          state: {
                            ...cartElement,
                          },
                        }}
                      >
                        <img
                          className={classes.img}
                          src={productImage}
                          alt={productName}
                        />
                      </CartLink>
                    </div>
                    <div className={classes.modalContent}>
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
                        <p className={classes.modalQuantity}>
                          {productQuantity}
                        </p>
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
                          Delete
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {cart.length === 0 ? (
              <p>Your shopping cart is empty</p>
            ) : (
              <>
                <CartTotal>Total: {cartTotal}$</CartTotal>
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
