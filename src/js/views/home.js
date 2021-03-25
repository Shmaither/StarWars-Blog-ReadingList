import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterList from "../component/characterList.js";
import { Navbar } from "../component/navbar.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{!store.isPending ? (
				<div>
					<div>
						<Navbar />
						<CharacterList />
					</div>
					<hr />
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
