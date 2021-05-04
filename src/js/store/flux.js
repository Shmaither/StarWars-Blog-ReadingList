import jwt_decode from "jwt-decode";
// $ npm install jwt-decode

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			people: [],
			planets: [],
			favorites: [],
			isPending: true,
			error: null,
			url: "https://3000-amber-eagle-3gy65w33.ws-us03.gitpod.io"
		},
		// Replace the "url" inside store every time you start de back end from zero.
		actions: {
			syncTokenFromSessionStore: () => {
				const store = getStore();
				const token = sessionStorage.getItem("token");
				console.log("Application jus loaded, synching the session storage token");
				if (token && token != "" && token != undefined) setStore({ token: token });
				console.log("current token on SYNC: ", store.token);
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Loging out");
				setStore({ token: null });
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
				const store = getStore();

				try {
					// Await for the fetch

					const resp = await fetch(`${store.url}/token`, opts);
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}

					// Await for the response
					const data = await resp.json();
					console.log("This came from the backend", data);
					// Setting into the persistent storage
					sessionStorage.setItem("token", data);
					//console.log(sessionStorage.getItem("token"));
					setStore({ token: data });
					return true;
				} catch {
					console.error("There has been an error login in");
				}
			},

			getPeople: () => {
				const store = getStore();
				fetch(`${store.url}/characters`)
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
						console.log("This came from API, CHARACTERS: ", data);
						setStore({ people: data, isPending: false, error: null });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ people: [], isPending: true, error: true });
					});
			},
			getPlanets: () => {
				const store = getStore();
				fetch(`${store.url}/planets`)
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
						console.log("This came from API, PLANETS: ", data);
						setStore({ planets: data, isPending: false, error: null });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ planets: [], isPending: true, error: true });
					});
			},

			getFavorites: async () => {
				const store = getStore();
				const token = sessionStorage.getItem("token");
				console.log("Token inside favorites", token);
				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					}
				};

				fetch(`${store.url}/favorites`, opts)
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the erro to the "catch"
							throw Error("Could not fetch the data for FAVORITES RESOURSE");
						}
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						console.log("This came from API, FAVORITES: ", data);
						setStore({ favorites: data });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ favorites: [] });
					});
			},

			addFavorite: item => {
				const store = getStore();
				const token = sessionStorage.getItem("token");
				const tokenPayLoad = jwt_decode(token).sub; // jwt_decode returns the jwt object payload. Using "jwt debugger" we can see that .sub returns the id in this case
				// console.log("ID obtained from token with jwt_decode: ", tokenPayload);
				console.log("Item passed as parameter to addFavorite(): ", item);
				const item_type = item.hasOwnProperty("gender") ? "character" : "planet";

				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						item_id: item.id,
						item_type: item_type,
						user_id: tokenPayLoad
					})
				};

				fetch(`${store.url}/favorites`, opts)
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the erro to the "catch"
							throw Error("Could not fetch the data for FAVORITES RESOURSE");
						}
						console.log("Succesfull https code adding favorite", res);
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						console.log("This came from API, add FAVORITE: ", data);

						getActions().getFavorites();
					})
					.catch(err => {
						console.error(err.message);
						setStore({ favorites: [] });
					});
			},

			deleteFavorite: fav_id => {
				const store = getStore();
				let newFavorites = store.favorites.filter(fav => fav.id !== fav_id);

				const opts = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				};
				console.log("FAVORITE ITEM ID: ", fav_id);
				fetch(`${store.url}/favorites/${fav_id}`, opts)
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the erro to the "catch"
							throw Error("Could not fetch the data for DELETE RESOURSE");
						}
						console.log("Succesfull https code DELETING favorite", res);
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						console.log("This came from API, DELETE FAVORITE: ", data);
						getActions().getFavorites();
						// setStore({ favorites: newFavorites });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ favorites: [] });
					});
			}
		}
	};
};

export default getState;
