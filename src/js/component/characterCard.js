import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";

const CharacterCard = ({ character }) => {
	return (
		<div className="card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{character.name}</h5>
				<p className="card-text">{character.gender}</p>
				<p className="card-text"> {character.hair_color} </p>
				<p className="card-text"> {character.eye_color} </p>
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
