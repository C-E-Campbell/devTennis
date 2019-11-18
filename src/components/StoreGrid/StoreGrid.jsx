import React from "react";
import "./StoreGrid.scss";
import StoreItem from "../StoreItem/StoreItem";
function StoreGrid(props) {
  const mappedItems = props.clothing.map(
    ({ image, item_id, price, name, description }) => {
      return (
        <StoreItem
          className="store-item"
          key={item_id}
          image={image}
          price={price}
          name={name}
          id={item_id}
          description={description}
        />
      );
    }
  );
  return <div className="store-grid">{mappedItems}</div>;
}

export default StoreGrid;
