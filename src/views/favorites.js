import React from "react";
import FavoritesVehicles from "../component/FavoritesVehicles";
import FavoritesCharacter from "../component/FavoritesCharacter";
import FavoritesPlanets from "../component/FavoritesPlanets";

const Favorites = () => {
  return (
    <div className="container-fluid screen bg-dark">
      <FavoritesVehicles />
      <FavoritesPlanets />
      <FavoritesCharacter />
    </div>
  );
};

export default Favorites;
