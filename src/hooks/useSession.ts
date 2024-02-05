import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export const useSession = () => {
  const { setIsAuthenticated, setLoading } = useContext(AuthContext) ?? {};

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/accounts/session`, { withCredentials: true });
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
