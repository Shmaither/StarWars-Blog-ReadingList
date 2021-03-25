const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
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
			addFavorite: character => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat(character.name) });
				if (store.favorites.length > 0) {
					console.log(store.favorites);
				} else {
					console.log("Favorites not set");
				}
			},
			deleteFavorite: index => {
				const store = getStore();
				let newFavorites = store.favorites.filter((_, favIndex) => favIndex !== index);
				setStore({ favorites: newFavorites });
				if (store.favorites.length > 0) {
					console.log(store.favorites);
				} else {
					console.log("Favorites not set");
				}
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
