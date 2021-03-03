import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { routes } from "./routes";
import MainTemplate from "./templates/MainTemplate";
import CosmeticStoreContext from "./context";
import { client } from "./contentful/contentfulConfig";
import SingleProduct from "./pages/SingleProduct";
import {
  getCartFromLocalStorage,
  getCartQuantityFromLocalStorage,
} from "./utils/localStorageGetters";

const Root = () => {
  const [initialProductState, setInitialProductsState] = useState([]);
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartQuantity, setCartQuantity] = useState(
    getCartQuantityFromLocalStorage()
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [discountProducts, setDiscountProducts] = useState([]);
  const [color, changeColor] = useState("");
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  //states for filters:
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchProductName, setSearchProductName] = useState("");
  const [freeDelivery, setFreeDelivery] = useState(false);

  const [showProductsPoper, setShowProductsPoper] = useState(false);
  const [searchProductNavInput, setSearchProductNavInput] = useState("");
  const [poperAnchor, setPoperAnchor] = useState(null);
  const [popperProducts, setPopperProducts] = useState([]);

  const setCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    setCartToLocalStorage();
  }, [cart]);

  const setCartQuantityToLocalStorage = () => {
    localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
  };

  useEffect(() => {
    setCartQuantityToLocalStorage();
  }, [cartQuantity]);

  const setContentfulData = (data) => {
    const contentfulData = data.map((item) => {
      const productId = item.sys.id;

      const product = {
        productId,
        ...item.fields,
        productImage: item.fields.productImage.fields.file.url,
      };

      return product;
    });

    console.log(contentfulData);
    setInitialProductsState([...contentfulData]);
    setProducts([...contentfulData]);

    const productsPrices = contentfulData.map(
      (product) => product.productPrice
    );

    const tempMaxPrice = Math.max(...productsPrices);

    setPrice(tempMaxPrice);
    setMaxPrice(tempMaxPrice);

    getRandomProduct(contentfulData);
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "products",
      })
      .then((res) => {
        console.log(res);
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

  const getRandomProduct = (productsFromContentful) => {
    const productsArray = [...productsFromContentful];
    const keys = Object.keys(productsArray);

    let tempRandomProductsIndexes = [];

    for (let i = 0; i < 3; i++) {
      const randomProductIndex = parseInt(
        keys[Math.floor(Math.random() * keys.length)]
      );
      tempRandomProductsIndexes = [
        ...new Set([...tempRandomProductsIndexes, randomProductIndex]),
      ];
    }

    console.log(tempRandomProductsIndexes);

    const mapedProducts = productsArray.map((product, index) => {
      if (tempRandomProductsIndexes.includes(index)) {
        const discountPrice =
          product.productPrice - (product.productPrice * 50) / 100;
        const newProductId = Math.floor(Math.random() * 10000);
        return {
          ...product,
          oldPrice: product.productPrice,
          productPrice: discountPrice,
          productId: newProductId,
        };
      }
    });

    console.log(mapedProducts);

    const formatedProducts = mapedProducts.filter(
      (product) => product !== undefined
    );

    console.log(formatedProducts);

    // console.log(randomProduct);
    // const randomElement = productsArray[randomProduct];

    // console.log(randomElement.productName);
    // setDiscountProducts(randomElement);

    setDiscountProducts([...formatedProducts]);
  };

  // useEffect(() => {
  //   getRandomProduct();
  // }, []);

  const addDiscountedProduct = (discountProductId) => {
    const findDiscountedProduct = discountProducts.find(
      (discountProduct) => discountProduct.productId === discountProductId
    );

    setCart([...new Set([...cart, findDiscountedProduct])]);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  // const getMaxPrice = () => {
  //   const productsPrices = initialProductState.map(
  //     (product) => product.productPrice
  //   );

  //   const tempMaxPrice = Math.max(...productsPrices);

  //   // console.log(productsPrices);
  //   // console.log(tempMaxPrice);
  //   setPrice(tempMaxPrice);
  //   setMaxPrice(tempMaxPrice);
  // };

  // useEffect(() => {
  //   getMaxPrice();
  // }, []);

  // const handlePriceChange = (e) => {
  //   setPrice(parseInt(e.target.value));
  // };

  const handlePriceChange = (event, newValue) => {
    setPrice(parseInt(newValue));
  };

  const handleSearchNameChange = (e) => {
    setSearchProductName(e.target.value);
  };

  const handleFreeDeliveryChange = (e) => {
    setFreeDelivery(e.target.checked);
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

    // tempProducts = tempProducts.filter((product) => {
    //   return product.productPrice <= price;
    // });

    if (searchProductName.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        const lowerCaseSearchName = searchProductName.toLowerCase();
        const loweCaseProductName = product.productName.toLowerCase();
        return (
          loweCaseProductName.slice(0, searchProductName.length) ===
          lowerCaseSearchName
        );
      });
    }

    if (freeDelivery) {
      tempProducts = tempProducts.filter(
        (product) => product.productPrice >= 199
      );
    }

    setProducts([...tempProducts]);
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
    setTimeout(() => {
      setSearchBarOpen(false);
    }, 250);
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
          handleFreeDeliveryChange,
          discountProducts,
          freeDelivery,
          color,
          changeColor,
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
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.products} component={Products} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.singleProduct} component={SingleProduct} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </CosmeticStoreContext.Provider>
    </>
  );
};

export default Root;

// const [products, setProducts] = useState([]);

// const getProducts = () => {
//   // pobieranie z bazy
//   //produkty z bazy
//   const productsFormBase;

//   setProducts(productsFormBase);

//  //dostanie max ceny z productsFormBase z bazy
//  const maxPrice;

// };
// useEffect(() => {
//   getProducts();
// }, []);

// const getMaxPriceOfProducts = () => {
//   //dostanie max ceny z products ze stanu
//   const maxPrice;
// };

// useEffect(() => {
//   getMaxPriceOfProducts();
// }, []);
