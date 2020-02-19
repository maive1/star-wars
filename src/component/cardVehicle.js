import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card card-vehicles mb-5">
			<img
				src="https://via.placeholder.com/200"				
				className="card-img-top"
				alt="vehicles starwars"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>				
                <ul class="list-group list-group-flush">
                    <li class="list-group-item model">{props.model}</li>
                    <li class="list-group-item pilots">{props.pilots}</li>
                    <li class="list-group-item films">{props.films}</li>
                    <li class="list-group-item manufacturer">{props.manufacturer}</li>
                    <li class="list-group-item cost_in_credits">{props.cost_in_credits}</li>
                    <li class="list-group-item length">{props.length}</li>
                </ul>
				<a href={props.favoriteLink} className="btn btn-primary">
					{props.favorite}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	imageName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    pilots: PropTypes.array.isRequired,
    films: PropTypes.array.isRequired,
    manufacturer: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
	favoriteLink: PropTypes.string.isRequired,
	favorite: PropTypes.string.isRequired
};
export default Card;