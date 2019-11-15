import React, { Component } from "react";
import styles from "./Cart.module.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
import Footer from "../../components/Footer/Footer";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import {
  cartTotal,
  getCart,
  discountApplied,
  deleteFromCart,
  addOneToCart,
  subtractOneFromCart
} from "../../redux/actions";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {
    cartTotal: 0,
    tax: 0,
    sub: 0,
    newCart: null,
    discount: "",
    discountApplied: false
  };

  increaseQuantity = id => {
    this.props.addOneToCart(id);
    this.getCustomerCart();
  };

  decreaseQuantity = id => {
    this.props.subtractOneFromCart(id);
    this.getCustomerCart();
  };

  deleteCartItem = async id => {
    const result = await this.props.items.cart.filter(item => {
      return item.item_id !== id;
    });
    this.props.deleteFromCart(result);
    this.getCustomerCart();
    if (this.props.user.currentUser) {
      axios.delete(
        `/api/deletecartitem/${id}/${this.props.user.currentUser.id}`
      );
    }
  };

  applyDiscount = () => {
    if (this.state.discount === "15%_MoreHappy!") {
      const newNum = this.state.cartTotal * 0.85;

      this.setState({ cartTotal: newNum.toFixed(2), discountApplied: true });
      this.props.cartTotal(newNum.toFixed(2).replace(".", ""));

      this.props.discountApplied();
    }
  };

  getCustomerCart = () => {
    const mappedCart = this.props.items.cart.map((cartItem, i) => {
      const filteredItems = this.props.items.inventory.filter(item => {
        return item.item_id === cartItem.item_id;
      });
      const cartStuff = filteredItems.map(cartProps => {
        return (
          <CheckoutItem
            key={cartProps.item_id}
            {...cartProps}
            add={this.addTotal}
            subtract={this.subtractTotal}
            increase={this.increaseQuantity}
            decrease={this.decreaseQuantity}
            delete={this.deleteCartItem}
            quantity={cartItem.quantity}
          />
        );
      });
      return cartStuff;
    });

    if (this.props.items.cart.length >= 0) {
      const cartTotal = this.props.items.cart
        .map(item => {
          return item.price * item.quantity;
        })
        .reduce((acc, currentValue) => {
          return (acc += currentValue);
        }, 0);
      const subTotal = cartTotal;
      const tax = subTotal * 0.06;
      const total = subTotal * 0.06 + subTotal;
      this.setState({
        cartItems: mappedCart,
        cartTotal: total.toFixed(2),
        tax: tax.toFixed(2),
        sub: subTotal.toFixed(2)
      });
      this.props.cartTotal(total.toFixed(2).replace(".", ""));
    }
  };

  componentDidMount() {
    this.getCustomerCart();
    if (this.props.items.discountApplied) {
      this.setState({ discount: "15%_MoreHappy!" });
      this.applyDiscount();
    }
  }

  render() {
    return (
      <div>
        <BasicHeader />
        <Header />
        <div className={styles.cartContainer}>
          <div className={styles.cart}>
            <h2>Your Cart:</h2>
            <Link to="/gear">Continue Shopping</Link>
            <div className={styles.checkoutBox}>
              {this.props.items.cart[0] ? (
                <div className={styles.itemBox}>{this.state.cartItems}</div>
              ) : (
                <div className={styles.itemBox}>Cart is empty</div>
              )}

              <div className={styles.subtotalBox}>
                <div>
                  <div>
                    <h3>SUBTOTAL </h3>
                    <h3>${this.state.sub}</h3>
                  </div>
                  <div>
                    <h3>SALES TAX</h3>
                    <h3>${this.state.tax}</h3>
                  </div>
                  {this.props.items.discountApplied ? (
                    <div>
                      <h3>WITH DISCOUNT</h3>
                      <h3>- ${(this.state.cartTotal * 0.15).toFixed(2)}</h3>
                    </div>
                  ) : null}

                  <div>
                    <h3>TOTAL </h3>
                    <h3>${this.state.cartTotal}</h3>
                  </div>
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        if (!this.state.discountApplied) {
                          this.applyDiscount(this.state.discount);
                        }
                      }}
                    >
                      <h3>Discount Code: </h3>
                      <input
                        value={this.state.discount}
                        onChange={e =>
                          this.setState({ discount: e.target.value })
                        }
                        placeholder="Enter code here"
                      />
                      <button>Apply Discount</button>
                    </form>
                  </div>
                </div>

                <Link to="/checkout">CHECKOUT</Link>
              </div>
            </div>
          </div>
        </div>
        {/* <Bar data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        }]
    }/> */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    items: state.items
  };
};

const mapDispatchToProps = {
  cartTotal,
  getCart,
  discountApplied,
  deleteFromCart,
  subtractOneFromCart,
  addOneToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
