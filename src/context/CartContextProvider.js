import React, { useState, useEffect, useContext } from "react";
import {
  getCartFromLocalStorage,
  getCartQuantityFromLocalStorage,
} from "../utils/localStorageGetters";
import CartContext from "./cartContext";
import NotificationContext from "./notificationContext";
import ProductsContext from "./productsContext";

const CartContextProvider = ({ children }) => {
  const notificationContext = useContext(NotificationContext);
  const { showAndCloseAlertAfterTimeWithContent } = notificationContext;

  const productsContext = useContext(ProductsContext);
  const { initialProductState, discountProducts } = productsContext;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartQuantity, setCartQuantity] = useState(
    getCartQuantityFromLocalStorage()
  );
  const [cartTotal, setCartTotal] = useState(0);

  const setCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const setCartQuantityToLocalStorage = () => {
    localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
  };

  useEffect(() => {
    setCartToLocalStorage();
    setCartQuantityToLocalStorage();
  }, [cart, cartQuantity]);

  const increaseCartQuantity = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const decreaseCartQuantity = () => {
    setCartQuantity(cartQuantity - 1);
  };
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((cartElement) => {
      total = total + cartElement.productPrice * cartElement.productQuantity;
    });
    setCartTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const addQuantity = (exampleProductId) => {
    const mappedCart = cart.map((cartElement) => {
      if (cartElement.productId === exampleProductId) {
        cartElement.productQuantity += 1;
      }
      return cartElement;
    });

    setCart([...mappedCart]);
  };

  const minusQuantity = (exampleProductId) => {
    const mappedCart = cart.map((cartElement) => {
      if (cartElement.productId === exampleProductId) {
        cartElement.productQuantity -= 1;
      }

      return cartElement;
    });

    setCart([...mappedCart]);
  };

  const addProductToCart = (exampleProductId) => {
    const foundProduct = initialProductState.find(
      (product) => product.productId === exampleProductId
    );

    let isProductAlreadyInCart;

    cart.forEach((product) => {
      if (product.productId === exampleProductId) {
        isProductAlreadyInCart = true;
      }
    });

    if (isProductAlreadyInCart) {
      setCart([...new Set([...cart])]);
    } else {
      setCart([...new Set([...cart, foundProduct])]);
    }
    showAndCloseAlertAfterTimeWithContent(3000, "Product added to cart!");
  };

  const checkDuplicatesInCart = (exampleProductId) => {
    const mappedCart = cart.map((cartElement) => {
      if (cartElement.productId === exampleProductId) {
        cartElement.productQuantity += 1;
      }
      return cartElement;
    });

    setCart([...mappedCart]);
  };

  const deleteProductFromCart = (exampleProductId) => {
    const findFilteredProduct = cart.filter((product) => {
      if (product.productId === exampleProductId) {
        setCartQuantity(cartQuantity - product.productQuantity);
        product.productQuantity = 1;
      }
      return product.productId !== exampleProductId;
    });

    setCart([...findFilteredProduct]);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const addDiscountedProduct = (discountProductId) => {
    const findDiscountedProduct = discountProducts.find(
      (discountProduct) => discountProduct.productId === discountProductId
    );
    showAndCloseAlertAfterTimeWithContent(3000, "Product added to cart!");

    setCart([...new Set([...cart, findDiscountedProduct])]);
  };

  const clearAndCloseCart = () => {
    setCart([]);
    handleCartClose();
    setCartQuantity(0);
    showAndCloseAlertAfterTimeWithContent(5000, "Payment Succeed!");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        cartQuantity,
        cartTotal,
        handleCartClose,
        handleCartOpen,
        deleteProductFromCart,
        checkDuplicatesInCart,
        addProductToCart,
        addQuantity,
        minusQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        clearAndCloseCart,
        addDiscountedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
