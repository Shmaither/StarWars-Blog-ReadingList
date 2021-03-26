import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const PlanetCard = ({ planet, id }) => {
	const { store, actions } = useContext(Context);
	let favoriteFlag = store.favorites.includes(planet);
	return (
		<div className="card mr-3 mb-3">
			<img src="http://www.fpoimg.com/400x200?width=400&height=200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{planet.name}</h5>
				<p className="card-text">Population: {planet.population}</p>
				<p className="card-text">Terrain: {planet.terrain} </p>
				<div className="d-flex justify-content-between">
					<Link to={"/planets/" + id}>
						<button className="btn btn-primary">Learn more!</button>
					</Link>
					<div>
						<button className="btn btn-outline-warning" onClick={() => actions.addFavorite(planet)}>
							<i className={favoriteFlag ? "fas fa-heart" : "far fa-heart"} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.shape({
		name: PropTypes.string,
		population: PropTypes.string,
		terrain: PropTypes.string
	}),
	id: PropTypes.number
};

export default PlanetCard;
