import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "./characterCard.js";
import { PropTypes } from "prop-types";

const CharacterList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container-fluid py-2">
				<h2 className="font-weight-light">Characters</h2>
				<div className="d-flex flex-row flex-nowrap">
					{store.people.map((character, index) => {
						return <CharacterCard key={index} character={character} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default CharacterList;
