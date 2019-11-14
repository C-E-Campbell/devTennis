import React from "react";
import "./CheckoutItem.scss";
import { addOneToCart, subtractOneFromCart } from "../../redux/actions";
import { connect } from "react-redux";

function CheckoutItem(props) {
  const thisItem = props.items.cart.findIndex(
    item => item.item_id === props.item_id
  );
  const checkFor0 = props.items.cart.filter(item => {
    return item.item_id === props.item_id;
  });

  return (
    <div>
      <div className="cartItem">
        <img className="productImg" src={props.image} alt="cart product" />
        <div>{props.name}</div>
        <div>${props.price}</div>

        <div className="quantityContainer">
          <div>
            <i
              className="fas fa-minus"
              onClick={() => {
                if (checkFor0[0].quantity === 1) {
                } else {
                  props.decrease(props.item_id);
                }
              }}
            ></i>
          </div>
          <div>
            {props.items.cart[thisItem]
              ? props.items.cart[thisItem].quantity
              : null}
          </div>
          <div>
            <i
              className="fas fa-plus"
              onClick={() => {
                props.increase(props.item_id);
              }}
            ></i>
          </div>
        </div>
        <div>
          <i
            onClick={() => {
              props.delete(props.item_id);
            }}
            className="far fa-trash-alt deleteIcon"
          ></i>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  addOneToCart,
  subtractOneFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
