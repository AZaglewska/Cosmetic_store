export const getCartFromLocalStorage = () => {
  let localStorageCart;

  if (localStorage.getItem("cart")) {
    localStorageCart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorageCart = [];
  }

  return localStorageCart;
};

export const getCartQuantityFromLocalStorage = () => {
  let localStorageCartQuantity;

  if (localStorage.getItem("cartQuantity")) {
    localStorageCartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
  } else {
    localStorageCartQuantity = 0;
  }
  return localStorageCartQuantity;
};
