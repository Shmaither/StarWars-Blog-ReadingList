import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "./characterCard.js";
import { PropTypes } from "prop-types";
import "../../styles/home.scss";

const CharacterList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h2 className="font-weight-light">Characters</h2>
			<div className="card-group card-group-scroll">
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
