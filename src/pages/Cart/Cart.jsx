import React, { Component } from "react";
import styles from "./Cart.module.scss";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { connect } from "react-redux";
import { cartTotal, getCart } from "../../redux/actions";
import { Link } from "react-router-dom";
import axios from "axios";

class Cart extends Component {
	state = {
		cartTotal: null,
		tax: null,
		sub: null,
		newCart: null
	};

	deleteCartItem = async (id, user) => {
		const returnedCart = await axios.delete(
			`/api/deletecartitem/${id}/${user}`
		);

		this.props.getCart(returnedCart.data);
		this.getCustomerCart();
	};

	getCustomerCart = () => {
		console.log("hello from cart");
		if (this.props.user.currentUser) {
			const mappedCart = this.props.items.cart.map((cartItem, i) => {
				const filteredItems = this.props.items.inventory.filter(item => {
					return item.item_id === cartItem;
				});
				const cartStuff = filteredItems.map(cartProps => {
					return (
						<CheckoutItem
							key={cartProps.item_id}
							{...cartProps}
							delete={this.deleteCartItem}
						/>
					);
				});
				return cartStuff;
			});
			// this.setState({
			// 	cartItems: mappedCart
			// });
			if (this.props.items.cart.length >= 0) {
				const subTotal = mappedCart
					.map((item, i) => {
						return item[0].props.price;
					})
					.reduce((acc, curr = 0) => {
						return (acc += curr);
					}, 0);
				const tax = subTotal * 0.06;
				const total = subTotal * 0.06 + subTotal;
				this.setState({
					cartItems: mappedCart,
					cartTotal: total,
					tax: tax,
					sub: subTotal
				});
				this.props.cartTotal(total);
			}
		}
	};
	componentDidMount() {
		this.getCustomerCart();
	}

	render() {
		return (
			<div>
				<LoginHeader />
				<Header />
				{this.props.user.currentUser ? (
					<div className={styles.cartContainer}>
						<div className={styles.cart}>
							<h2>Your Cart:</h2>
							<Link to='/gear'>Continue Shopping</Link>
							<div className={styles.checkoutBox}>
								<div className={styles.itemBox}>{this.state.cartItems}</div>
								<div className={styles.subtotalBox}>
									<div>
										<div>
											<h3>SUBTOTAL </h3>
											<h3>${this.state.sub}</h3>
										</div>
										<div>
											<h3>SALES TAX</h3>
											<h3>${Math.round(this.state.tax)}</h3>
										</div>

										<div>
											<h3>TOTAL </h3>
											<h3>${Math.round(this.state.cartTotal)}</h3>
										</div>
									</div>

									<button>CHECKOUT</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className={styles.cartContainer}>
						<div className={styles.cart}>
							<h2>Cart is empty</h2>
						</div>
					</div>
				)}

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		items: state.items
	};
};

const mapDispatchToProps = {
	cartTotal,
	getCart
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
