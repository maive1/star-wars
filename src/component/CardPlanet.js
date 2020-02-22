import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {
    return(
        <div className="card card-planets my-2">
            <img
            src={props.imageUrl}	
            className="card-img-top"
            alt={props.imageName}
            />
            <div className="card-body row">
                <h5 className="card-title">{props.name}</h5>				
                <ul class="list-group list-group-flush">
                    <li class="list-group-item model">Climate: {props.climate}</li>                             
                    <li class="list-group-item films">Gravity: {props.gravity}</li>
                    <li class="list-group-item manufacturer">Population: {props.population}</li>
                    <li class="list-group-item cost_in_credits">Terrain: {props.terrain}</li>
                    <li class="list-group-item length">Diameter:: {props.diameter}</li>
                </ul>
                <span className=" d-flex align-content-end flex-wrap">
                    <Link  className="btn btn-primary" onClick={props.event} to={props.route}>
                        {props.iconLink}
                    </Link>                                
                </span>
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