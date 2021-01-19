import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPlanet from "../component/CardPlanet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Planets = () => {
  const { store, actions } = useContext(Context);

  if (store.loading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  return (
    <div className="card-deck screen">
      {store.planets.map((item, i) => {
        return (
          <div className="col-3">
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
              iconLink={<FontAwesomeIcon icon={faHeart} />}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Planets;
