import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useLogin();

	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		await login(username, password);
		navigate('/');
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="flex flex-col items-end justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex w-full justify-center"
						type="submit">
						Sign In
					</button>
					<a
						className="mt-1 align-baseline font-bold text-xs text-blue-500 hover:text-blue-800 mb-6 justify-end flex"
						href="#">
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
