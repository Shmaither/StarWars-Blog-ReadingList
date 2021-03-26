import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/details.scss";

const PlanetDetail = () => {
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
					<h2>{store.planets[id].name}</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non tellus id quam placerat
						facilisis sed eget nulla. Mauris aliquet ac leo porta rhoncus. Integer condimentum leo sit amet
						vehicula vulputate. Duis quis ornare augue. Vestibulum feugiat iaculis accumsan. Integer rhoncus
						felis nunc, vel luctus enim tempus non. Nullam faucibus, tortor in luctus placerat, elit justo
						suscipit nunc, sed fringilla orci nunc et orci. Aliquam eu ullamcorper dui, ac vehicula augue.
						Nullam blandit odio ac aliquam facilisis. Nullam egestas ornare ex id porta. Sed accumsan nisl
						ut est aliquam, non rutrum nisl facilisis. Nulla imperdiet massa dolor, et suscipit sem egestas
						a. Vestibulum elementum velit non sollicitudin tincidunt. Vivamus finibus at ante eu tincidunt.
						Mauris mattis consectetur metus id cursus
					</p>
				</div>
			</div>
			<hr />

			<div className="row bottom">
				<div className="col-lg-2 text-center">
					<h5>Name</h5>
					<p>{store.planets[id].name}</p>
				</div>
				<div className="col-lg-2 text-center">
					<h5>Population</h5>
					<p>{store.planets[id].population}</p>
				</div>
				<div className="col-lg-2 text-center">
					<h5>Terrain</h5>
					<p>{store.planets[id].terrain}</p>
				</div>
				<div className="col-lg-2 text-center">
					<h5>Climates</h5>
					<p>{store.planets[id].climate}</p>
				</div>
				<div className="col-lg-2 text-center">
					<h5>Diameter</h5>
					<p>{store.planets[id].diameter}</p>
				</div>
				<div className="col-lg-2 text-center">
					<h5>Orbital Period</h5>
					<p>{store.planets[id].orbital_period}</p>
				</div>
			</div>
		</div>
	);
};

export default PlanetDetail;
