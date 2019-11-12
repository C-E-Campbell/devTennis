import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./InventoryItem.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BasicHeader from "../BasicHeader/BasicHeader";
import { getCart } from "../../redux/actions";

class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleItem: {}
    };
  }

  componentDidMount() {
    const myItem = this.props.items.inventory.filter(item => {
      return item.item_id === Number(this.props.match.params.id);
    });
    this.setState({ singleItem: myItem[0] });
  }

  addToCart = async () => {
    if (this.props.user.currentUser) {
      const cart = await axios.post("/api/addtocart", {
        user: this.props.user.currentUser.id,
        item: this.props.match.params.id
      });
      //   const cart = await axios.get(
      //     `/api/getCart/${this.props.user.currentUser.id}`
      //   );
      //   this.props.getCart(cart.data);
      if (cart) {
        this.props.history.push("/cart");
      }
    }
  };

  render() {
    return (
      <div>
        <BasicHeader />
        <Header />
        <div className={styles.storeItem}>
          <div className={styles.imgBox}>
            <img
              className={styles.imgItem}
              src={this.state.singleItem.image}
              alt=""
            />
          </div>
          <div className={styles.descriptionBox}>
            <h3>${this.state.singleItem.price}</h3>
            <h3>{this.state.singleItem.name}</h3>
            <p>{this.state.singleItem.description}</p>

            <button
              onClick={() => {
                this.addToCart();
              }}
            >
              Add to Cart
            </button>

            <button>Add to Favorites</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  getCart
};
export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);
