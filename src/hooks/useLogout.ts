import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const baseUrl = 'https://api.setup123.com/api/v1';
// const devUrl = 'http://localhost:8080/api/v1';

export const useLogout = () => {
	const authContext = useContext(AuthContext);

	if (!authContext) {
		throw new Error('AuthContext not found');
	}

	const { setIsAuthenticated } = authContext;

	const logout = async () => {
		try {
			await axios.post(`${baseUrl}/users/logout`, {}, { withCredentials: true });
			setIsAuthenticated(false);
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	return { logout };
};
