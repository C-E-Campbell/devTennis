import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../../redux/actions";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import styles from "./Checkout.module.scss";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
import Footer from "../../components/Footer/Footer";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      first: "",
      last: "",
      email: "",
      zip: "",
      city: "",
      state: "",
      address: ""
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({
      name: `charlie`
    });
    if (!token) {
      alert("please enter card number");
    } else {
      let response = await axios.post("/api/charge", {
        amount: this.props.items.cartTotal,
        currency: "usd",
        description: "An example charge",
        source: token.id
      });

      if (response.status === 200) this.setState({ complete: true });
    }
  }

  sendReceipt = () => {
    if (this.props.user.currentUser) {
      axios.post("/api/receipt", {
        first: this.state.first,
        last: this.state.last,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        sendTo: this.props.user.currentUser.email
      });
    } else {
      axios.post("/api/receipt", {
        first: this.state.first,
        last: this.state.last,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        sendTo: this.state.email
      });
    }
  };

  deleteMyItems = () => {
    this.props.emptyCart();
    try {
      axios.delete(`/api/deletemyitems/${this.props.user.currentUser.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { first, last, city, state, zip, address, email } = this.state;
    if (this.state.complete)
      return (
        <div className={styles.checkoutPage1}>
          <BasicHeader />
          <h2>Purchase Complete</h2>
          <Link className={styles.homeBtn} to="/">
            Return home
          </Link>
        </div>
      );

    return (
      <div>
        {this.props.items.cart[0] ? (
          <div className={styles.checkoutPage}>
            <BasicHeader />

            <form className={styles.form}>
              <h2>Where should we send your stuff?</h2>
              {!this.props.user.currentUser ? (
                <input
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  placeholder="Email"
                />
              ) : null}
              <input
                value={this.state.first}
                onChange={e => this.setState({ first: e.target.value })}
                type="text"
                placeholder="First Name"
              />
              <input
                value={this.state.last}
                onChange={e => this.setState({ last: e.target.value })}
                type="text"
                placeholder="Last Name"
              />
              <input
                value={this.state.address}
                onChange={e => this.setState({ address: e.target.value })}
                type="text"
                placeholder="Address"
              />
              <input
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
                type="text"
                placeholder="City"
              />
              <input
                value={this.state.state}
                onChange={e => this.setState({ state: e.target.value })}
                type="text"
                placeholder="State"
              />
              <input
                value={this.state.zip}
                onChange={e => this.setState({ zip: e.target.value })}
                type="text"
                placeholder="Zip"
              />
              <CardElement className={styles.work} />
            </form>

            <button
              className={styles.purchaseBtn}
              onClick={async e => {
                e.preventDefault();
                if (!city || !first || !last || !address || !state || !zip) {
                  alert("Please Fill Out Form");
                } else {
                  await this.submit();
                  if (this.state.complete) {
                    this.deleteMyItems();
                    this.sendReceipt();
                  }
                }
              }}
            >
              Purchase
            </button>
          </div>
        ) : (
          <div className={styles.checkoutPage1}>
            <BasicHeader />
            <h2>Your cart is empty. </h2>
            <Link className={styles.homeBtn} to="/">
              Return home
            </Link>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  emptyCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectStripe(Checkout));
