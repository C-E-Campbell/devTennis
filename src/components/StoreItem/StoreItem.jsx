import React from "react";
import { withRouter } from "react-router";

const StoreItem = props => {
  return (
    <div
      onClick={() => {
        props.history.push(`/store/${props.id}`);
      }}
      className="store-item"
    >
      <img className="store-item-img" src={props.image} alt="store item" />
      <div className="store-item-info">
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
};

const itemWithRouter = withRouter(StoreItem);
export default itemWithRouter;
