import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Vehicles from "./views/vehicles";
import Planets from "./views/planets";
import Character from "./views/character";
import Home from "./views/home";
import Favorites from "./views/favorites"


//create your first component
export const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
					<Navbar/>
					
					<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/vehicles" component={Vehicles}/>
					<Route path="/planets" component={Planets}/>
					<Route path="/character" component={Character}/>
					<Route path="/favorites" component={Favorites}/>
					<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					
					<Footer/>					
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
