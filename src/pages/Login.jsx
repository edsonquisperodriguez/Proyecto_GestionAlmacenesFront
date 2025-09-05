import { useState } from "react";
import { Link } from "react-router-dom";

const LoginSection = () => {

	const [isLogin, setIsLogin] = useState(false);
	return (
		<div className="flex items-center justify-center h-screen">
			<form
				onSubmit=''
				className="bg-white p-6 rounded shadow-md w-80"
			>
				<h2 className="text-xl font-bold mb-4">Login</h2>
				<input
					type="text"
					placeholder="Usuario"
					value='ásdf'
					className="border p-2 mb-2 w-full"
				/>
				<input
					type="password"
					placeholder="Contraseña"
					value='asdf'
					className="border p-2 mb-4 w-full"
				/>
				<Link to="/" className="bg-blue-500 text-white w-full py-2 rounded">
					Ingresar
				</Link>
			</form>
		</div>
	)
}

export const Login = () => {
	return (
		<div>
			<h1>sadf</h1>
			<LoginSection />
		</div>
	);
};  