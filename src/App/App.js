import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Stats from "../pages/Stats/Stats";
import WomensShop from "../pages/WomensShop/WomensShop";
function App() {
	return (
		<Switch>
			<Route component={Home} exact path={"/"} />
			<Route component={Register} exact path={"/register"} />
			<Route component={Login} exact path={"/signin"} />
			<Route component={Stats} exact path={"/stats"} />
			<Route component={WomensShop} exact path={"/womens"} />
		</Switch>
	);
}

export default App;
