import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./common/Footer";
import Memory from "./components/Memory";
import Simplist from "./components/Simplist";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="mainContainer">
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/逆光記憶" exact component={Memory} />
          <Route path="/響粹" exact component={Simplist} />
          <Route path="/購物車" exact component={Cart} />
          <Route path="/登入" exact component={LoginForm} />
          <Route path="/註冊" exact component={RegisterForm} />

          <Redirect from="/" to="/home" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
