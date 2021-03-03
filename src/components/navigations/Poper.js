import React, { useContext } from "react";
import Popper from "@material-ui/core/Popper";
import { Button } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Fade from "@material-ui/core/Fade";
import CosmeticStoreContext from "../../context";
import { useStyles } from "./navigationsStyles/PoperStyles";

const Poper = () => {
  const classes = useStyles();

  const context = useContext(CosmeticStoreContext);
  const {
    showProductsPoper,
    poperAnchor,
    popperProducts,
    addProductToCart,
    checkDuplicatesInCart,
    increaseCartQuantity,
  } = context;

  return (
    <div>
      <Popper open={showProductsPoper} anchorEl={poperAnchor} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>
              {popperProducts.length === 0 ? (
                <h5 className={classes.poperAlert}>No results</h5>
              ) : (
                <ul>
                  {popperProducts.map((product) => {
                    const {
                      productId,
                      productName,
                      productPrice,
                      productImage,
                    } = product;
                    return (
                      <li className={classes.poperList} key={productId}>
                        <img
                          className={classes.poperImage}
                          src={productImage}
                          alt={productName}
                        />
                        <div className={classes.poperContent}>
                          <h3 className={classes.poperProduct}>
                            {productName}
                          </h3>
                          <p className={classes.poperPrice}>{productPrice}$</p>
                        </div>

                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.poperButton}
                          startIcon={<LocalMallIcon />}
                          onClick={() => {
                            checkDuplicatesInCart(productId);
                            addProductToCart(productId);
                            increaseCartQuantity();
                          }}
                        >
                          add to cart
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default Poper;
