import React, { useState, useEffect, useContext } from "react";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import MainTemplate from "./templates/MainTemplate";
import CosmeticStoreContext from "./context";
import { client } from "./contentful/contentfulConfig";
import {
  getCartFromLocalStorage,
  getCartQuantityFromLocalStorage,
} from "./utils/localStorageGetters";
import Router from "./routing/Router";
import ProductsContext from "./context/productsContext";

const Root = () => {
  const productsContext = useContext(ProductsContext);

  const {
    initialProductState,
    setContentfulData,
    filterProducts,
    category,
    price,
    searchProductName,
    freeDelivery,
    discountProducts,
    products,
    handleCategoryChange,
    maxPrice,
    handlePriceChange,
    handleSearchNameChange,
    handleFreeDeliveryChange,
  } = productsContext;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartQuantity, setCartQuantity] = useState(
    getCartQuantityFromLocalStorage()
  );
  const [cartTotal, setCartTotal] = useState(0);

  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const [showProductsPoper, setShowProductsPoper] = useState(false);
  const [searchProductNavInput, setSearchProductNavInput] = useState("");
  const [poperAnchor, setPoperAnchor] = useState(null);
  const [popperProducts, setPopperProducts] = useState([]);

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

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "products",
      })
      .then((res) => {
        setContentfulData(res.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContentfulData();
  }, []);

  const toggleHamburgerMenuOpen = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const closeHamburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const handleSearchProductNavInputChange = (e) => {
    setSearchProductNavInput(e.target.value);
    setPoperAnchor(e.target);
  };

  const closeProductsPopper = () => {
    setShowProductsPoper(false);
    setSearchProductNavInput("");
  };

  useEffect(() => {
    if (searchProductNavInput.length !== 0) {
      setShowProductsPoper(true);
      filterProductsByNameInPopper();
    } else {
      setShowProductsPoper(false);
      setPopperProducts([]);
    }
  }, [searchProductNavInput]);

  const filterProductsByNameInPopper = () => {
    if (searchProductNavInput.length > 0) {
      const filteredProducts = initialProductState.filter((product) => {
        const lowerCaseSearchName = searchProductNavInput.toLowerCase();
        const loweCaseProductName = product.productName.toLowerCase();
        return (
          loweCaseProductName.slice(0, searchProductNavInput.length) ===
          lowerCaseSearchName
        );
      });

      setPopperProducts([...filteredProducts]);
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  useEffect(() => {
    filterProducts();
  }, [category, price, searchProductName, freeDelivery]);

  const showAndCloseAlertAfterTimeWithContent = (time, content) => {
    setIsAlertOpen(true);
    setAlertContent(content);

    setTimeout(() => {
      closeAlert();
    }, time);
  };

  const clearAndCloseCart = () => {
    setCart([]);
    handleCartClose();
    setCartQuantity(0);
    showAndCloseAlertAfterTimeWithContent(5000, "Payment Succeed!");
  };

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

  const addDiscountedProduct = (discountProductId) => {
    const findDiscountedProduct = discountProducts.find(
      (discountProduct) => discountProduct.productId === discountProductId
    );
    showAndCloseAlertAfterTimeWithContent(3000, "Product added to cart!");

    setCart([...new Set([...cart, findDiscountedProduct])]);
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

  const handleSearchBarOpen = (e) => {
    setSearchBarOpen(true);
  };

  const handleSearchBarClose = (e) => {
    setTimeout(() => {
      setSearchBarOpen(false);
    }, 250);
  };
  return (
    <>
      <GlobalStyle />
      <CosmeticStoreContext.Provider
        value={{
          isCartOpen,
          handleCartClose,
          handleCartOpen,
          addProductToCart,
          deleteProductFromCart,
          cartQuantity,
          addQuantity,
          minusQuantity,
          checkDuplicatesInCart,
          increaseCartQuantity,
          decreaseCartQuantity,
          clearAndCloseCart,
          handleSearchBarOpen,
          handleSearchBarClose,
          isSearchBarOpen,
          cart,
          cartTotal,
          isAlertOpen,
          closeAlert,
          alertContent,
          discountProducts,
          handleSearchProductNavInputChange,
          showProductsPoper,
          poperAnchor,
          searchProductNavInput,
          popperProducts,
          closeProductsPopper,
          addDiscountedProduct,
          isHamburgerMenuOpen,
          toggleHamburgerMenuOpen,
          closeHamburgerMenu,
        }}
      >
        <MainTemplate>
          <Router />
        </MainTemplate>
      </CosmeticStoreContext.Provider>
    </>
  );
};

export default Root;
