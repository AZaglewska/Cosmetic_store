import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { routes } from "./routes";
import MainTemplate from "./templates/MainTemplate";
import { localData } from "./localData";
import CosmeticStoreContext from "./context";

const Root = () => {
  const [initialProductState, setInitialProductsState] = useState([
    ...localData,
  ]);
  const [products, setProducts] = useState([...localData]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [discountProducts, setDiscountProducts] = useState([]);

  //states for filters:
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchProductName, setSearchProductName] = useState("");

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const getMaxPrice = () => {
    const productsPrices = initialProductState.map(
      (product) => product.productPrice
    );

    const tempMaxPrice = Math.max(...productsPrices);

    console.log(productsPrices);
    console.log(tempMaxPrice);
    setPrice(tempMaxPrice);
    setMaxPrice(tempMaxPrice);
  };

  useEffect(() => {
    getMaxPrice();
  }, []);

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const handleSearchNameChange = (e) => {
    setSearchProductName(e.target.value);
  };

  const filterProducts = () => {
    let tempProducts = [...initialProductState];

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.productCategory === category
      );
    }

    tempProducts = tempProducts.filter(
      (product) => product.productPrice <= price
    );

    if (searchProductName.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        const lowerCaseSearchName = searchProductName.toLowerCase();
        const loweCaseProductName = product.productName.toLowerCase();
      });
    }

    setProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
  }, [category, price]);

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
    const foundProduct = products.find(
      (product) => product.productId === exampleProductId
    );

    setCart([...new Set([...cart, foundProduct])]);
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

    console.log(findFilteredProduct);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearchBarOpen = (e) => {
    setSearchBarOpen(true);
  };

  const handleSearchBarClose = (e) => {
    setSearchBarOpen(false);
  };
  return (
    <>
      <GlobalStyle />
      <CosmeticStoreContext.Provider
        value={{
          products,
          category,
          handleCategoryChange,
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
          cartQuantity,
          cart,
          cartTotal,
          price,
          maxPrice,
          isAlertOpen,
          closeAlert,
          alertContent,
          initialProductState,
          handlePriceChange,
          searchProductName,
          handleSearchNameChange,
        }}
      >
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.products} component={Products} />
              <Route path={routes.contact} component={Contact} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </CosmeticStoreContext.Provider>
    </>
  );
};

export default Root;
