import React from "react";
import { connect } from "react-redux";
import styles from "./InventoryItem.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasicHeader from "../BasicHeader/BasicHeader";
import { getCart, addOneToCart } from "../../redux/actions";
import axios from "axios";

class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleItem: {}
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.items.inventory[0]) {
      const myItem = this.props.items.inventory.filter(item => {
        return item.item_id === Number(this.props.match.params.id);
      });
      this.setState({ singleItem: myItem[0] });
    } else {
      this.props.history.push("/");
    }
  }

  addToFav = (id, item) => {
    axios.post("/api/addfavorite", {
      user_id: id,
      item_id: item
    });
  };

  addToCart = async () => {
    if (this.props.user.currentUser) {
      axios.post("/api/addtocart", {
        user: this.props.user.currentUser.id,
        item: this.props.match.params.id,
        price: this.state.singleItem.price
      });
    }
    const checkForItem = this.props.items.cart.findIndex(
      item => item.item_id === Number(this.props.match.params.id)
    );
    if (checkForItem === -1) {
      await this.props.getCart({
        item_id: Number(this.props.match.params.id),
        quantity: 1,
        price: this.state.singleItem.price
      });
    } else {
      await this.props.addOneToCart(Number(this.props.match.params.id));
    }

    this.props.history.push("/cart");
  };

  render() {
    toast.configure();
    const notify = () =>
      toast.success("Added to favorites!", {
        autoClose: 2500
      });
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
            <h3>{this.state.singleItem.name}</h3>
            <h3>${this.state.singleItem.price}</h3>
            <p>{this.state.singleItem.description}</p>

            <button
              onClick={() => {
                this.addToCart();
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                if (!this.props.user.currentUser) {
                  alert("Must sign in to use favorites");
                } else {
                  this.addToFav(
                    this.props.user.currentUser.id,
                    this.state.singleItem.item_id
                  );
                  notify();
                }
              }}
            >
              Add to Favorites
            </button>
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
  getCart,
  addOneToCart
};
export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);
