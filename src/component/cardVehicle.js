import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {
  const {
    imageUrl,
    imageName,
    name,
    model,
    consumables,
    manufacturer,
    cost_in_credits,
    length,
    event,
    route,
    iconLink,
  } = props;

  return (
    <div className="card card-vehicles p-3 mb-5">
      <img src={imageUrl} className="card-img-top" alt={imageName} />
      <div className="card-body row">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item model">
            <h6>Model:</h6>
            {model}
          </li>

          <li className="list-group-item films">
            <h6>Consumables:</h6> {consumables}
          </li>
          <li className="list-group-item manufacturer">
            <h6>Manufacturer:</h6> {manufacturer}
          </li>
          <li className="list-group-item cost_in_credits">
            <h6>Cost:</h6> {cost_in_credits}
          </li>
          <li className="list-group-item length">
            <h6>Lenght:</h6> {length}
          </li>
        </ul>
        {iconLink && (
          <span className=" d-flex align-content-end flex-wrap">
            <Link
              className="btn btn-primary bg-warning "
              onClick={event}
              to={route}
            >
              {iconLink}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

CardVehicle.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  consumables: PropTypes.string.isRequired,
  manufacturer: PropTypes.string,
  cost_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  iconLink: PropTypes.object,
  route: PropTypes.string.isRequired,
};

export default CardVehicle;
