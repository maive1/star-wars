import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPlanet from "../component/CardPlanet";

const FavoritesPlanets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col mb-5 title-favorites border-top border-bottom">
          <h3>FAVORITES PLANETS//</h3>
        </div>
      </div>
      <div className="row">
        <div className="card-deck col-12">
          {store.favoritesPlanets.map((item, i) => {
            return (
              <div className="col-3" key={i}>
                <CardPlanet
                  imageUrl="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg"
                  imageName="starwars planet"
                  name={item.name}
                  climate={item.climate}
                  gravity={item.gravity}
                  population={item.population}
                  terrain={item.terrain}
                  diameter={item.diameter}
                  event={(e) => actions.favoritesPlanets(e, item.name)}
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

export default FavoritesPlanets;
