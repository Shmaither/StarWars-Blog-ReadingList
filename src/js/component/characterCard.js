import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link, useParams } from "react-router-dom";

const CharacterCard = ({ character }) => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<div className="card w-50">
			<img src="http://www.fpoimg.com/400x200?width=400&height=200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{character.name}</h5>
				<p className="card-text">{character.gender}</p>
				<p className="card-text"> {character.hair_color} </p>
				<p className="card-text"> {character.eye_color} </p>
				<div>
					{/* <Link to={"/people/" + id }>
						<button className="btn btn-primary">Learn more!</button>
					</Link> */}
					<span onClick={() => actions.addFavorites(character)}>
						<i className="far fa-heart" />
					</span>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.shape({
		name: PropTypes.string,
		gender: PropTypes.string,
		hair_color: PropTypes.string,
		eye_color: PropTypes.string
	})
};

export default CharacterCard;
