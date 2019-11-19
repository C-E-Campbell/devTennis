import React from "react";
import style from "./LoginHeader.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import babolat from "../../assets/babolat-logo-min.png";
import wilson from "../../assets/wilson-logo-min.png";
import adidas from "../../assets/Adidas-Logo-min.png";
import prince from "../../assets/prince-logo-min.png";
import { logout, emptyCart } from "../../redux/actions";
import { connect } from "react-redux";
class LoginHeader extends React.Component {
  logout = () => {
    axios.delete("/api/logout").then(res => {
      this.props.emptyCart();
      this.props.logout();
    });
  };

  render() {
    return (
      <nav className={style.LoginNav}>
        <div className={style.LogoBox}>
          <img src={babolat} alt="babolat" />
          <img src={wilson} alt="wilson" />
          <img src={adidas} alt="adidas" />
          <img src={prince} alt="prince" />
        </div>

        {/* this ternary switches between signin/register & logout links based on if there is a user */}
        {!this.props.currentUser ? (
          <div className={style.LoginBox}>
            <Link to="/stats">PLAYER STATS</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          <div className={style.LoginBox}>
            <Link to="/stats">STATS & MATCHES</Link>
            <button onClick={() => this.logout()}>Logout</button>
          </div>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state.user;
};

const mapDispatchToProps = {
  logout,
  emptyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginHeader);
