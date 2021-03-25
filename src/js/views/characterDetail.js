import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CharacterDetail = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<img
						src="https://yellowpath.mx/wp-content/uploads/2015/02/800x600px.png"
						className="card-img-top"
						alt="..."
					/>
				</div>
				<div className="col-6">
					<h2>Character with index: {id}</h2>
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-lg-2">dato</div>
				<div className="col-lg-2">dato</div>
				<div className="col-lg-2">dato</div>
				<div className="col-lg-2">dato</div>
				<div className="col-lg-2">dato</div>
				<div className="col-lg-2">dato</div>
			</div>
		</div>
	);
};

export default CharacterDetail;
