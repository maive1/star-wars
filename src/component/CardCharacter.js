import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardCharacter = (props) => {
  const {
    imageUrl,
    imageName,
    name,
    birth_year,
    height,
    mass,
    route,
    event,
    iconLink,
  } = props;
  return (
    <div className="card my-2">
      <img src={imageUrl} className="card-img-top" alt={imageName} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item model">Birth Year: {birth_year}</li>
          <li className="list-group-item films">Height: {height}</li>
          <li className="list-group-item manufacturer">Mass: {mass}</li>
        </ul>
        {iconLink && (
          <Link to={route} className="btn btn-primary" onClick={event}>
            {iconLink}
          </Link>
        )}
      </div>
    </div>
  );
};

CardCharacter.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  route: PropTypes.string,
  iconLink: PropTypes.object,
};

export default CardCharacter;
