const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			isPending: true,
			error: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the erro to the "catch"
							throw Error("Could not fetch the data for that resource");
						}
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						setStore({ people: data.results, isPending: false, error: null });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ people: [], isPending: true, error: true });
					});
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the erro to the "catch"
							throw Error("Could not fetch the data for that resource");
						}
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						setStore({ planets: data.results, isPending: false, error: null });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ planets: [], isPending: true, error: true });
					});
			},
			addFavorite: item => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat(item) });
			},
			deleteFavorite: index => {
				const store = getStore();
				let newFavorites = store.favorites.filter((_, favIndex) => favIndex !== index);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
