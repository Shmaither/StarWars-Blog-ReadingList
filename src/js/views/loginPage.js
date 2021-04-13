import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = () => {
	// const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const token = sessionStorage.getItem("token");

	const handleClick = () => {
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
		fetch("https://3000-lime-jaguar-eel2rbvj.ws-us03.gitpod.io/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("There has been some error");
			})
			.then(data => {
				sessionStorage.setItem("token", data.access_token);
			})
			.catch(error => {
				console.error("There was an error!!!", error);
			});
	};

	return (
		<div className="text-center">
			<h1>Login</h1>
			{token && token != "" && token != undefined ? (
				"You are logged in with this token: " + token
			) : (
				<div>
					<div className="mb-3">
						<input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
					</div>
					<div className="mb-3">
						<input
							type="password"
							placeholder="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={handleClick}>
						Submit
					</button>
				</div>
			)}
		</div>
	);
};

export default Login;