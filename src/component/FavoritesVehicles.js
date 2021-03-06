import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardVehicle from "./CardVehicle";

const FavoritesVehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col mb-5 title-favorites border-top border-bottom">
          <h3>FAVORITES VEHICLES//</h3>
        </div>
      </div>
      <div className="row">
        <div className="card-deck col-12">
          {store.favorites.map((item, i) => {
            return (
              <div className="col-3" key={i}>
                <CardVehicle
                  imageUrl="https://onkawa.com/wp-content/uploads/2014/05/sandcrawler.jpg"
                  imageName="starwars vehicles"
                  name={item.name}
                  model={item.model}
                  consumables={item.consumables}
                  cost_in_credits={item.cost_in_credits}
                  length={item.length}
                  event={(e) => actions.favoritesItem(e, item.name)}
                  route="/favorites"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavoritesVehicles;
