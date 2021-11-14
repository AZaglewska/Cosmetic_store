import React, { useState, useEffect, useContext } from "react";
import NotificationContext from "./notificationContext";
import ProductsContext from "./productsContext";

const NotificationContextProvider = ({ children }) => {
  const productsContext = useContext(ProductsContext);

  const { initialProductState } = productsContext;

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const [showProductsPoper, setShowProductsPoper] = useState(false);
  const [searchProductNavInput, setSearchProductNavInput] = useState("");
  const [poperAnchor, setPoperAnchor] = useState(null);
  const [popperProducts, setPopperProducts] = useState([]);

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const showAndCloseAlertAfterTimeWithContent = (time, content) => {
    setIsAlertOpen(true);
    setAlertContent(content);

    setTimeout(() => {
      closeAlert();
    }, time);
  };

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

  const handleSearchBarOpen = (e) => {
    setSearchBarOpen(true);
  };

  const handleSearchBarClose = (e) => {
    setTimeout(() => {
      setSearchBarOpen(false);
    }, 250);
  };

  return (
    <NotificationContext.Provider
      value={{
        isAlertOpen,
        alertContent,
        isSearchBarOpen,
        isHamburgerMenuOpen,
        showProductsPoper,
        searchProductNavInput,
        poperAnchor,
        popperProducts,
        showAndCloseAlertAfterTimeWithContent,
        handleSearchBarClose,
        handleSearchBarOpen,
        handleSearchProductNavInputChange,
        closeProductsPopper,
        closeHamburgerMenu,
        toggleHamburgerMenuOpen,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
