import React, { useState, useEffect } from "react";
import Root from "../Root";
import ProductsContext from "./productsContext";

const ProductsContextProvider = ({ children }) => {
  const [initialProductState, setInitialProductsState] = useState([]);
  const [products, setProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);

  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchProductName, setSearchProductName] = useState("");
  const [freeDelivery, setFreeDelivery] = useState(false);

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
      } else {
        return undefined;
      }
    });

    const formatedProducts = mapedProducts.filter(
      (product) => product !== undefined
    );

    setDiscountProducts([...formatedProducts]);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(parseInt(newValue));
  };

  const handleSearchNameChange = (e) => {
    setSearchProductName(e.target.value);
  };

  const handleFreeDeliveryChange = (e) => {
    setFreeDelivery(e.target.checked);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
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

  return (
    <ProductsContext.Provider
      value={{
        filterProducts,
        handleFreeDeliveryChange,
        handlePriceChange,
        handleSearchNameChange,
        setContentfulData,
        handleCategoryChange,
        products,
        discountProducts,
        initialProductState,
        category,
        price,
        freeDelivery,
        searchProductName,
        maxPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
