import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "./characterCard.js";
import { PropTypes } from "prop-types";

const CharacterList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-deck">
			{store.people.map((character, index) => {
				return <CharacterCard key={index} character={character} />;
			})}
		</div>
	);
};

export default CharacterList;
