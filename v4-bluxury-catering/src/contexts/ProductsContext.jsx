import React, { createContext, useState, useEffect } from "react";
import firebase from "../services/firebase";

export const ProductsContext = createContext();

function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsunscribe = firebase
      .firestore()
      .collection("products")
      .doc("memory")
      .collection("memoryProducts")
      .onSnapshot((snapshot) => {
        const newProduct = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProduct);
      });
    return () => unsunscribe();
  }, []);
  return products;
}

const ProductsContextProvider = ({ children }) => {
  const products = MyProducts();

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
