import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "./characterCard.js";
import PlanetCard from "./planetCard.js";
import "../../styles/home.scss";

const FavoriteList = () => {
	const { store, actions } = useContext(Context);
	// useEffect(() => {
	// 	actions.getFavorites();
	// }, []);

	let favoritesLength = store.favorites.length;

	return (
		<div>
			<div className="container px-0">
				<h2 className="my-4 title">Read Later . . .</h2>
				<div className="card-group card-group-scroll">
					{favoritesLength > 0 ? (
						store.favorites.map((item, index) => {
							if (item.hasOwnProperty("gender")) {
								console.log(item.gender);
								return <CharacterCard key={index} character={item} id={index} />;
							} else {
								console.log(item.population);
								return <PlanetCard key={index} planet={item} id={index} />;
							}
						})
					) : (
						<p className="text-muted">(...nothing saved!)</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FavoriteList;
