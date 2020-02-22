import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardCharacter = (props) =>{	

    return(
        <div className="card my-2">
            <img
            src={props.imageUrl}	
            className="card-img-top"
            alt={props.imageName}
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>				
                <ul class="list-group list-group-flush">
                    <li class="list-group-item model">Birth Year: {props.birth_year}</li>                             
                    <li class="list-group-item films">Height: {props.height}</li>
                    <li class="list-group-item manufacturer">Mass: {props.mass}</li>                                
                </ul>
                <Link to={props.route} className="btn btn-primary" onClick={props.event}>
                    {props.iconLink}
                </Link>
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
    iconLink: PropTypes.string,

};

export default CardCharacter;