import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const baseUrl = 'https://api.setup123.com/api/v1';
// const devUrl = 'http://localhost:8080/api/v1';

export const useSession = () => {
	const { setIsAuthenticated, setLoading } = useContext(AuthContext) ?? {};

	useEffect(() => {
		const checkSession = async () => {
			try {
				await axios.get(`${baseUrl}/users/session`, { withCredentials: true });
				setIsAuthenticated?.(true);
			} catch (error) {
				setIsAuthenticated?.(false);
			} finally {
				setLoading?.(false);
			}
		};

		checkSession();
	}, [setIsAuthenticated, setLoading]);

	return {};
};
