import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";

function CheckoutItem(props) {
  return (
    <div className="cartItem">
      <img className="productImg" src={props.image} alt="cart product" />
      <div>{props.name}</div>
      <div>${props.price}</div>
      <i
        onClick={() => {
          props.delete(props.item_id);
        }}
        className="far fa-trash-alt deleteIcon"
      ></i>
    </div>
  );
}
const mapStateToProps = state => {
  return state.user;
};
export default connect(mapStateToProps, null)(CheckoutItem);
