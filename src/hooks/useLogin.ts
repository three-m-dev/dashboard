import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { useGeneralContext } from './useGeneralContext';

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  const { setState } = useGeneralContext();

  if (!authContext) {
    throw new Error('AuthContext not found');
  }

  console.log(import.meta.env.VITE_API_URL)

  const { setIsAuthenticated } = authContext;

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/accounts/login`,
        { username, password },
        { withCredentials: true }
      );

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
