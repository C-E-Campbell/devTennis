import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import cartIcon from "../../assets/cart-min.png";
import { connect } from "react-redux";
import React, { Component } from "react";

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
			<div className='header-div'>
				<nav className={styles.MainNav}>
					<div className={styles.LogoBox}>Personal Project</div>
					<div className={styles.LinkBox}>
						<Link to='/mens'>Men</Link>
						<Link to='/womens'>Women</Link>

						<Link to='/gear'>Gear</Link>
					</div>

					<div>
						{this.props.user.currentUser ? (
							<div className='ui compact menu'>
								<div className='ui simple dropdown item'>
									<div>{`Welcome, ${this.props.user.currentUser.email}`}</div>

									<i className='dropdown icon'></i>
									<div className='menu'>
										<div className='item'>View/Edit Profile</div>
									</div>
								</div>
							</div>
						) : null}
					</div>
					<div className={styles.CartBox}>
						<Link to='/cart'>
							<img src={cartIcon} alt='cart' />
						</Link>
					</div>
				</nav>
				{this.state.hoverMen ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverMen: false });
						}}
						className={styles.getfked}
					>
						<h1>Men</h1>
					</div>
				) : null}
				{this.state.hoverWomen ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverWomen: false });
						}}
						className={styles.getfked}
					>
						<h1>Women</h1>
					</div>
				) : null}
				{this.state.hoverKids ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverKids: false });
						}}
						className={styles.getfked}
					>
						<h1>Kids</h1>
					</div>
				) : null}
				{this.state.hoverGear ? (
					<div
						onMouseLeave={() => {
							this.setState({ hoverGear: false });
						}}
						className={styles.getfked}
					>
						<h1>Gear</h1>
					</div>
				) : null}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return state;
};

export default connect(
	mapStateToProps,
	null
)(Header);
