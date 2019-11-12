import React from "react";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import clothing from "../../assets/menClothing.jpg";
import Shoe from "../../assets/menShoe.jpg";
import Footer from "../../components/Footer/Footer";

const MensShop = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <section>
        <Header />
        <div>
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
