import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {	

	return (
		<div className="card card-vehicles p-3 mb-5" >
			<img
			src={props.imageUrl}	
			className="card-img-top"
			alt={props.imageName}
			/>
			<div className="card-body row">
				<h5 className="card-title">{props.name}</h5>				
				<ul className="list-group list-group-flush">
					<li className="list-group-item model"><h6>Model:</h6>{props.model}</li>
					
					<li className="list-group-item films"><h6>Consumables:</h6> {props.consumables}</li>
					<li className="list-group-item manufacturer"><h6>Manufacturer:</h6> {props.manufacturer}</li>
					<li className="list-group-item cost_in_credits"><h6>Cost:</h6> {props.cost_in_credits}</li>
					<li className="list-group-item length"><h6>Lenght:</h6> {props.length}</li>
				</ul>
				<span className=" d-flex align-content-end flex-wrap">
					<Link  className="btn btn-primary bg-warning " onClick={props.event} to={props.route}>
						{props.iconLink}
					</Link>
				</span>
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
    manufacturer: PropTypes.string.isRequired,    
	cost_in_credits: PropTypes.string.isRequired,
	length: PropTypes.string.isRequired,
	iconLink: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired
};

export default CardVehicle;