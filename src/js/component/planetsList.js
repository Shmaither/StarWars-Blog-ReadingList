import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlanetCard from "./planetCard.js";
import { PropTypes } from "prop-types";
import "../../styles/home.scss";

const PlanetsList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container px-0">
				<h2 className="my-4 title">Planets</h2>
				<div className="card-group card-group-scroll">
					{store.planets.map((planet, index) => {
						return <PlanetCard key={index} planet={planet} id={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default PlanetsList;
