import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "./characterCard.js";
import { PropTypes } from "prop-types";
import "../../styles/home.scss";

const CharacterList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container px-0">
				<h2 className="my-4 title">Characters</h2>
				<div className="card-group card-group-scroll">
					{store.people.map((character, index) => {
						return <CharacterCard key={index} character={character} id={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default CharacterList;
