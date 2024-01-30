import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { useGeneralContext } from './useGeneralContext';

// const devUrl = 'http://localhost:8080/api/v1';

const baseUrl = 'https://api.setup123.com/api/v1';

export const useLogin = () => {
	const authContext = useContext(AuthContext);

	const { setState } = useGeneralContext();

	if (!authContext) {
		throw new Error('AuthContext not found');
	}

	const { setIsAuthenticated } = authContext;

	const login = async (username: string, password: string) => {
		try {
			const response = await axios.post(`${baseUrl}/users/login`, { username, password }, { withCredentials: true });

			setIsAuthenticated(true);

			console.log('Login successful:', response.data);

			setState({
				employee: response.data.employee,
				displayMode: 'general',
			});
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	return { login };
};
