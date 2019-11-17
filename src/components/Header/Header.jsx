import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import cartIcon from "../../assets/cart-min.png";
import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: null
    };
  }

  async componentDidMount() {
    if (this.props.user.currentUser) {
      const cartItems = this.props.items.cart;
      this.setState({ cartItems: cartItems });
    }
  }
  render() {
    return (
      <div className="header-div">
        <nav className={styles.MainNav}>
          <div className={styles.LogoBox}>
            <Link to="/">Dev Tennis</Link>
          </div>
          <div className={styles.LinkBox}>
            <Link to="/mens">Men</Link>
            <Link to="/womens">Women</Link>

            <Link to="/gear">Gear</Link>
          </div>

          <div>
            {this.props.user.currentUser ? (
              <div className="ui compact menu">
                <div className="ui simple dropdown item">
                  <div>{`Welcome, ${this.props.user.currentUser.email}`}</div>

                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <div
                      onClick={() => {
                        this.props.history.push(
                          `/profile/${this.props.user.currentUser.id}`
                        );
                      }}
                      className="item"
                    >
                      Update Account Info
                    </div>
                    <div
                      onClick={() => {
                        this.props.history.push(
                          `/profile/${this.props.user.currentUser.id}`
                        );
                      }}
                      className="item"
                    >
                      Favorites
                    </div>
                    <div
                      onClick={() => {
                        this.props.history.push(
                          `/profile/${this.props.user.currentUser.id}`
                        );
                      }}
                      className="item"
                    >
                      Purchase History
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className={styles.CartBox}>
            <Link to="/cart">
              <img src={cartIcon} alt="cart" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(withRouter(Header));
