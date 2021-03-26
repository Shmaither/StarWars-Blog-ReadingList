import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterList from "../component/characterList.js";
import PlanetsList from "../component/planetsList";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{!store.isPending ? (
				<div>
					<div>
						<CharacterList />
						<PlanetsList />
					</div>
					<hr />
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
