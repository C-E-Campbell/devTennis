import React, { Component } from "react";
import Header from "../../components/Header/Header";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Special from "../../components/Special/Special";
import Email from "../../components/Email/Email";
import ScrollOver from "../../components/ScrollOver/ScrollOver";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { getInventory, getCart, oldCart } from "../../redux/actions";
import axios from "axios";

class Home extends Component {
  async componentDidMount() {
    window.scrollTo(0, 0);
    const items = await axios.get("/api/inventory");
    if (this.props.user.currentUser) {
      const cart = await axios.get(
        `/api/getCart/${this.props.user.currentUser.id}`
      );

      if (cart.data.length >= 1) {
        this.props.oldCart(cart.data);
      }
    }

    this.props.getInventory(items.data);
  }

  render() {
    return (
      <div>
        <LoginHeader />
        <Header />
        <Hero />
        <About />
        <Special />
        <Email />
        <ScrollOver />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  getInventory,
  getCart,
  oldCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
