import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useFectchProducts = (doc, collection) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("products")
      .doc(doc)
      .collection(collection)
      .onSnapshot((snapshot) => {
        const newProduct = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProduct);
      });
    return () => unsubscribe();
  }, [doc, collection]);
  return products;
};

export default useFectchProducts;
