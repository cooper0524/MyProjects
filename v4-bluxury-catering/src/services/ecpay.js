const express = require("express");
const logger = require("morgan");
const ecpay_payment = require("../../ecpay_payment_nodejs/index");

var cors = require("cors");
const app = express();

const port = 5000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let order = [];
let result = [];

app.get("/", (req, res) => {
  console.log("Inside Home Login");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  console.log("Order : ", JSON.stringify(order));
  res.end(JSON.stringify(order));
});

app.get("/result", (req, res) => {
  console.log("Inside Home Login");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  console.log("Result : ", JSON.stringify(result));
  res.end(JSON.stringify(result));
});

app.post("/pay", (req, res) => {
  const base_param = {
    MerchantTradeNo: req.body.MerchantTradeNo,
    MerchantTradeDate: req.body.MerchantTradeDate,
    TotalAmount: req.body.TotalAmount,
    TradeDesc: req.body.TradeDesc,
    ItemName: req.body.ItemName,
    ReturnURL: req.body.ReturnURL,
    ClientBackURL: req.body.ClientBackURL,
  };

  order.unshift(base_param);
  console.log(order);
});

app.get("/payment", (req, res) => {
  const base_param = {
    MerchantTradeNo: order[0].MerchantTradeNo,
    MerchantTradeDate: order[0].MerchantTradeDate,
    TotalAmount: order[0].TotalAmount,
    TradeDesc: order[0].TradeDesc,
    ItemName: order[0].ItemName,
    ReturnURL: order[0].ReturnURL,
    ClientBackURL: order[0].ClientBackURL,
  };
  const create = new ecpay_payment();
  const htm = create.payment_client.aio_check_out_credit_onetime(base_param);
  res.send(htm);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
