import React from "react";
import "./App.scss";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import MensShop from "../pages/MensShop/MensShop";
import MensClothing from "../pages/MensClothing/MensClothing";
import MensShoes from "../pages/MensShoes/MensShoes";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Stats from "../pages/Stats/Stats";
import WomensShop from "../pages/WomensShop/WomensShop";
import WomensClothing from "../pages/WomensClothing/WomensClothing";
import WomensShoes from "../pages/WomensShoes/WomensShoes";
import Gear from "../pages/GearShop/GearShop";
import InventoryItem from "../components/InventoryItem/InventoryItem";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
import Checkout from "../pages/Checkout/Checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  toast.configure();
  return (
    <Switch>
      <Route component={Home} exact path={"/"} />
      <Route component={Register} path={"/register"} />
      <Route component={Login} path={"/signin"} />
      <Route component={Stats} path={"/stats"} />
      <Route component={WomensShop} path={"/womens"} />
      <Route component={MensShop} path={"/mens"} />
      <Route component={MensClothing} path={"/mensclothing"} />
      <Route component={MensShoes} path={"/mensshoes"} />
      <Route component={WomensShoes} path={"/womensshoes"} />
      <Route component={WomensClothing} path={"/womensclothing"} />
      <Route component={Gear} path={"/gear"} />
      <Route component={InventoryItem} path={"/store/:id"} />
      <Route component={Profile} path={"/profile/:id"} />
      <Route render={() => <Cart cart={props.items.cart} />} path={"/cart"} />
      <Route
        render={() => (
          <StripeProvider apiKey="pk_test_kCcNZj9q07j8tbB9lZrbRVTi00vY5BNdjM">
            <Elements>
              <Checkout />
            </Elements>
          </StripeProvider>
        )}
        path={"/checkout"}
      />
    </Switch>
  );
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
export default connect(mapStateToProps, null)(App);
