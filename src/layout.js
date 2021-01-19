import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Vehicles from "./views/Vehicles";
import Planets from "./views/Planets";
import Character from "./views/Character";
import Favorites from "./views/Favorites";

export const Layout = () => {
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Vehicles} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/character" component={Character} />
          <Route exact path="/favorites" component={Favorites} />
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
