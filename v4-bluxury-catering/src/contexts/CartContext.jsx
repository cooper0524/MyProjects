import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";
import firebase, { auth } from "../services/firebase";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const makeid = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  var today = new Date();
  var date =
    today.getFullYear() +
    "/" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + today.getDate()).slice(-2);
  var time =
    ("0" + today.getHours()).slice(-2) +
    ":" +
    ("0" + today.getMinutes()).slice(-2) +
    ":" +
    ("0" + today.getSeconds()).slice(-2);

  const handleCheckout = () => {
    alert(
      "即將跳轉付款介面。。。\n清妥善填寫交易訊息，付款後請至您的電子信箱確認訂單狀況。\n感謝您購買本站商品，如有任何問題歡迎聯繫客服詢問。"
    );
    window.location.href = "/home";
    console.log("CHECKOUT", state);
    var merchantTradeNo = makeid(20);
    var merchantTradeDate = date + " " + time;
    var totalAmount = state.total.toString();
    var itemName = state.cartItems
      .map((cartItem) => "#" + cartItem.title + "*" + cartItem.quantity)
      .toString();
    const order = {
      MerchantTradeNo: merchantTradeNo,
      MerchantTradeDate: merchantTradeDate,
      TotalAmount: totalAmount,
      TradeDesc: "測試交易描述",
      ItemName: itemName,
      ReturnURL: "http://192.168.0.1",
      ClientBackURL: "http://localhost:3000/home",
    };
    fetch("http://localhost:5000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(order),
    }).then(() => console.log("Order Created"));
    console.log(order);
    window.open("http://localhost:5000/payment");
    dispatch({ type: "CHECKOUT" });
    var consumer = "";
    if (auth.currentUser) {
      consumer = auth.currentUser.uid;
    }
    const purchaseDate = firebase.firestore.Timestamp.fromDate(
      new Date()
    ).toDate();
    firebase
      .firestore()
      .collection("consumption")
      .doc(purchaseDate.toString())
      .set({
        items: state,
        purchaseDate: purchaseDate,
        merchantTradeNo: merchantTradeNo,
        consumer: consumer,
      });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
