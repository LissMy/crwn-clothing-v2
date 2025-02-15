import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shopdata.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
