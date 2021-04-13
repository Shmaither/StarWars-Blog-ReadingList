import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = () => {
	// const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
		fetch("https://3000-teal-xerinae-fun321qv.ws-us03.gitpod.io/token", opts)
			.then(resp => {
				console.log("hola: ", resp);
				if (resp.status === 200) return resp.json();
				else alert("There has been some error");
			})
			.then(response => console.log("Success"))
			.catch(error => {
				console.error("There was an error!!!", error);
			});
	};

	return (
		<div>
			<h1>Login</h1>
			<div>
				<label>Email address</label>
				<input type="text" value={email} onChange={e => setEmail(e.target.value)} />
			</div>
			<div>
				<label>Password</label>
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
			</div>
			<button type="submit" className="btn btn-primary" onClick={handleClick}>
				Submit
			</button>
		</div>
	);
};

export default Login;
