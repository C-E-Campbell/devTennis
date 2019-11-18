import React from "react";
import { connect } from "react-redux";
import { addOneToCart, getCart } from "../../redux/actions";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
import Header from "../../components/Header/Header";
import styles from "./Favorites.module.scss";
import axios from "axios";
class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    if (!this.props.user.currentUser) {
      this.props.history.push("/");
    } else {
      const data = await axios.get(
        `/api/getfavorites/${this.props.user.currentUser.id}`
      );
      this.setState({ data: data.data });
    }
  }
  addToCart = async (id, user, price) => {
    if (this.props.user.currentUser) {
      axios.post("/api/addtocart", {
        user: user,
        item: id,
        price: price
      });
    }
    const checkForItem = this.props.items.cart.findIndex(
      item => item.item_id === id
    );
    if (checkForItem === -1) {
      await this.props.getCart({
        item_id: id,
        quantity: 1,
        price: price
      });
    } else {
      await this.props.addOneToCart(id);
    }

    this.props.history.push("/cart");
  };

  deleteItem = (user, id) => {
    axios.put("/api/deletefavorite", {
      user_id: user,
      item_id: id
    });
    const newFav = this.state.data.filter(item => {
      return item.item_id !== id;
    });
    this.setState({ data: newFav });
  };
  render() {
    const mappeddata = this.state.data.map(item => {
      return (
        <div key={item.item_id}>
          <img className={styles.img} src={item.image} alt="favorite_item" />
          <h1>{item.name}</h1>
          <p className={styles.description}>{item.description}</p>
          <button
            className={styles.button}
            onClick={() => {
              this.addToCart(
                item.item_id,
                this.props.user.currentUser.id,
                item.price
              );
              this.props.history.push("/cart");
            }}
          >
            Add To Cart
          </button>
          <button
            className={styles.button}
            onClick={() => {
              this.deleteItem(this.props.user.currentUser.id, item.item_id);
            }}
          >
            Delete From Favorites
          </button>
        </div>
      );
    });
    return (
      <div>
        <BasicHeader />
        <Header />
        <div className={styles.favContainer}>{mappeddata}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  addOneToCart,
  getCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
