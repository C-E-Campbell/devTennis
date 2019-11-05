import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StoreGrid from "../../components/StoreGrid/StoreGrid";
import "./WomensClothing.scss";
export default function WomensClothing() {
	return (
		<div>
			<header>
				<Link to='/'>Home</Link>
			</header>
			<section className='womensPage'>
				<Header />
				<StoreGrid />
				<Footer />
			</section>
		</div>
	);
}