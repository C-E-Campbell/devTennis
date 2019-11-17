import React from "react";
import "./WomensShop.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import WomenShop from "../../assets/nikeshopgirl.jpg";
import Shoe from "../../assets/shoe.jpg";
import Footer from "../../components/Footer/Footer";
import BasicHeader from "../../components/BasicHeader/BasicHeader";

const WomensShop = () => {
  return (
    <div>
      <BasicHeader />
      <section className="womensPage">
        <Header />
        <div className="shop-heading">
          <h2>Shop Womens Styles</h2>
        </div>
        <div className="store-boxes">
          <Link to="/womensclothing">
            <img src={WomenShop} alt="shop women" />
            <h3>Clothing</h3>
          </Link>
          <Link to="/womensshoes">
            <img src={Shoe} alt="shop women" />
            <h3>Shoes</h3>
          </Link>
        </div>
        <Footer />
      </section>
    </div>
  );
};
export default WomensShop;
