import React, { useContext } from "react";
import CartProducts from "./CartProducts";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { total, cartItems, itemCount, handleCheckout } = useContext(
    CartContext
  );

  return (
    <div>
      <div
        className=" mt-3 pl-2 pr-2"
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        <h1>購物車</h1>
      </div>

      <div className="row no-gutters justify-content-center">
        <div className="col-sm-9 p-3">
          {cartItems.length > 0 ? (
            <CartProducts />
          ) : (
            <div className="p-3 text-center text-muted">
              購物車尚未添加任何商品
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="col-sm-3 p-3">
            <div className="card card-body">
              <p className="mb-1">商品總數</p>
              <h4 className=" mb-3 txt-right">{itemCount}</h4>
              <p className="mb-1">總金額</p>
              <h3 className="m-0 txt-right">$ {total}</h3>
              <hr className="my-4" />
              <div className="text-center">
                <button
                  target="_blank"
                  href="http://localhost:5000/pay"
                  rel="noopener noreferrer"
                  onClick={handleCheckout}
                  style={{ border: "none" }}
                  type="button"
                >
                  <img
                    src="https://payment-stage.ecpay.com.tw/Content/themes/WebStyle20170517/images/ecgo.png"
                    alt=""
                    width="100%"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
