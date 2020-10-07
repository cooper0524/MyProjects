import React, { useContext } from "react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../assets/icons/icon";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.title}
          style={{ margin: "0 auto", maxHeight: "100px" }}
          src={product.url}
          className="img-fluid d-block"
        />
      </div>
      <div
        className="col-sm-4 p-2 d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h5 className="mb-1">{product.title}</h5>
      </div>
      <div
        className="col-sm-2 p-2 text-center "
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {product.xPrice ? (
          <p className="mb-1">特價: {product.xPrice} </p>
        ) : (
          <p className="mb-1">單價: {product.price} </p>
        )}

        <p className="mb-0">數量: {product.quantity}</p>
      </div>
      <div
        className="col-sm-4 p-2 text-right d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {product.quantity > 1 ? (
          <button
            onClick={() => decrease(product)}
            className="btn btn-danger btn-sm mr-4 mb-1"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        ) : (
          <button
            onClick={() => decrease(product)}
            className="btn btn-danger btn-sm mr-4 mb-1"
            disabled
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        )}

        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-4 mb-1"
        >
          <PlusCircleIcon width={"20px"} />
        </button>

        <button
          onClick={() => removeProduct(product)}
          className="btn btn-warning btn-sm mb-1"
        >
          <TrashIcon width={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
