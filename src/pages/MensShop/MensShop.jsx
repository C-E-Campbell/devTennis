import React, { useEffect } from "react";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import clothing from "../../assets/menClothing.jpg";
import Shoe from "../../assets/menShoe.jpg";
import Footer from "../../components/Footer/Footer";
import "./MensShops.scss";

const MensShop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <BasicHeader />
      <section>
        <Header />
        <div className="menHero">
          <h2>Wear Your Confidence On The Court</h2>
        </div>
        <div className="shop-heading">
          <h2>Shop Mens Styles</h2>
        </div>
        <div className="store-boxes">
          <Link to="/mensclothing">
            <img src={clothing} alt="shop men" />
            <h3>Clothing</h3>
          </Link>
          <Link to="/mensshoes">
            <img src={Shoe} alt="shop men" />
            <h3>Shoes</h3>
          </Link>
        </div>
        <Footer />
      </section>
    </div>
  );
};
export default MensShop;
