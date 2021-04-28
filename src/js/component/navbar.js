import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 container-fluid">
			{!store.token ? (
				<small className="text-muted pl-2">“ I find your lack of faith disturbing.” – Darth Vader</small>
			) : (
				<div className="w-100 p-3">
					<Link to="/home" className="d-inline text-decoration-none">
						<span className="h1">StarWars</span>
					</Link>

					<Link to="/" className="d-inline mleft">
						<button onClick={() => actions.logout()} className="btn btn-primary mr-2">
							Log out
						</button>
					</Link>

					<div className="d-inline nav-item dropdown ">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<card>
								<ul className="list-group list-group-flush">
									<div>
										<p className="mb-0">
											{store.favorites.length === 0 ? (
												<small className="text-muted pl-2">(empty)</small>
											) : (
												store.favorites.map((favorite, listIndex) => {
													return (
														<li
															className="list-group-item d-flex justify-content-between p-2"
															key={listIndex}>
															{favorite.name}
															<span
																className="ml-4"
																onClick={() => actions.deleteFavorite(favorite.id)}>
																<i className="fas fa-times" />
															</span>
														</li>
													);
												})
											)}
										</p>
									</div>
								</ul>
							</card>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};
