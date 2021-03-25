import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterList from "../component/characterList.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{!store.isPending ? (
				<div>
					<h2>Data loaded {console.log(store.people)}</h2>
					<CharacterList />
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
