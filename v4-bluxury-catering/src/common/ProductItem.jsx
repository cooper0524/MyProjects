import React, { useContext } from "react";
import firebase, { storage } from "../services/firebase";
import EditItem from "../components/EditItem";
import { AdminContext } from "../contexts/AdminContext";
import { CartContext } from "../contexts/CartContext";

import MyCollapse from "./MyCollapse";
import Emoji from "./Emoji";

const ProductItem = ({ product, categories, doc, collection }) => {
  const { admin } = useContext(AdminContext);
  const { addProduct, cartItems, removeProduct } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  const productId = product.id;
  const handleDelete = () => {
    firebase
      .firestore()
      .collection("products")
      .doc(doc)
      .collection(collection)
      .doc(productId)
      .delete();
    let imageRef = storage.refFromURL(product.url);
    imageRef
      .delete()
      .then(() => {
        console.log("Deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="card card-body text-center"
      style={{ borderColor: "lightBlue" }}
    >
      {admin && (
        <div className="d-flex">
          <EditItem
            product={product}
            categories={categories}
            title="編輯商品"
            doc={doc}
            collection={collection}
          />
          <button
            className="btn btn-danger btn-sm mr-0 ml-auto"
            onClick={handleDelete}
          >
            X
          </button>
        </div>
      )}

      <img
        style={{
          display: "block",
          margin: "10px auto 10px",
          height: "200px",
        }}
        className="img-fluid"
        alt="prdImg"
        src={product.url}
      />
      <h5>{product.title}</h5>

      {!product.xPrice && <h5 className="text-center"> $ {product.price} </h5>}
      {product.xPrice && (
        <div className="d-flex justify-content-center">
          <del className="strike " style={{ paddingRight: "20px" }}>
            {" "}
            $ {product.price}{" "}
          </del>
          <h5 className="text-center" style={{ color: "red" }}>
            {" "}
            特價 $ {product.xPrice}{" "}
          </h5>
        </div>
      )}
      <MyCollapse product={product} href={product.title} />

      {!isInCart(product) ? (
        <button
          className="btn btn-outline-success mt-2"
          onClick={() => addProduct(product)}
        >
          <Emoji symbol="🛒 " />
          加入購物車
        </button>
      ) : (
        <button
          className="btn btn-outline-danger mt-2"
          onClick={() => removeProduct(product)}
        >
          <Emoji symbol="🗑 " />
          移出購物車
        </button>
      )}
    </div>
  );
};

export default ProductItem;
