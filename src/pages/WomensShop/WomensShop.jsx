import React, { Component } from "react";
import "./WomensShop.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import WomenShop from "../../assets/nikeshopgirl.jpg";
import Shoe from "../../assets/shoe.jpg";
import Footer from "../../components/Footer/Footer";
export default class WomensShop extends Component {
	render() {
		return (
			<section className='womensPage'>
				<Header />
				<div className='shop-hero'>
					<h2>Shop Womens Styles</h2>
				</div>
				<Link to='/' className='store-boxes'>
					<div>
						<img src={WomenShop} alt='shop women' />
						<h3>Clothing</h3>
					</div>
					<div>
						<img src={Shoe} alt='shop women' />
						<h3>Shoes</h3>
					</div>
				</Link>
				<Footer />
			</section>
		);
	}
}
