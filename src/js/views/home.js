import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{!store.isPending ? (
				<div>
					<h2>Data loaded {console.log(store.people)}</h2>
					<ul>
						{store.people.map(character => (
							<li key={character.uid}>{character.name}</li>
						))}
					</ul>
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
