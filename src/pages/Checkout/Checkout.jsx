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
    this.state = { complete: false };
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

    this.props.emptyCart();
  }

  render() {
    if (this.state.complete)
      return (
        <div>
          <BasicHeader />
          <h1>Purchase Complete</h1>
          <Footer />
        </div>
      );

    return (
      <div>
        {this.props.items.cart[0] ? (
          <div className={styles.checkout}>
            <BasicHeader />
            <p>Would you like to complete the purchase?</p>
            <form className={styles.form}>
              <h2>Where should we send your stuff?</h2>
              {!this.props.user.currentUser ? (
                <input type="email" placeholder="Email" />
              ) : null}
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip" />
            </form>
            <CardElement className={styles.form} />
            <button onClick={this.submit}>Purchase</button>
            <Footer />
          </div>
        ) : (
          <div>
            <BasicHeader />
            <h2>Your cart is empty. </h2>
            <Link to="/">Return home</Link>
            <Footer />
          </div>
        )}
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
