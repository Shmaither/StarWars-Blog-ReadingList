const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			people: [],
			planets: [],
			favorites: [],
			isPending: true,
			error: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application jus loaded, synching the session storage token");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},

			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					// Await for the fetch
					const resp = await fetch("https://3000-blush-sawfish-wg2imjgz.ws-us03.gitpod.io/token", opts);
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}

					// Await for the response
					const data = await resp.json();
					console.log("This came from the backend", data);
					// Setting into the persistent storage
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				} catch {
					console.error("There has been an error login in");
				}
			},

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
