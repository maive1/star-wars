import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {
  const {
    imageUrl,
    imageName,
    name,
    climate,
    gravity,
    population,
    terrain,
    diameter,
    iconLink,
    event,
    route,
  } = props;

  return (
    <div className="card card-planets my-2">
      <img src={imageUrl} className="card-img-top" alt={imageName} />
      <div className="card-body row">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item model">Climate: {climate}</li>
          <li className="list-group-item films">Gravity: {gravity}</li>
          <li className="list-group-item manufacturer">
            Population: {population}
          </li>
          <li className="list-group-item cost_in_credits">
            Terrain: {terrain}
          </li>
          <li className="list-group-item length">Diameter:: {diameter}</li>
        </ul>
        {iconLink && (
          <span className=" d-flex align-content-end flex-wrap">
            <Link className="btn btn-primary" onClick={event} to={route}>
              {iconLink}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

CardPlanet.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string,
  name: PropTypes.string.isRequired,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  diameter: PropTypes.string,
};

export default CardPlanet;
