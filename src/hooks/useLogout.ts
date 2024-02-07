import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export const useLogout = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext not found');
  }

  const { setIsAuthenticated } = authContext;

  const logout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/accounts/logout`, {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { logout };
};
