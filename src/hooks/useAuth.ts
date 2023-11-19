import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.post(
        "http://localhost:3000/api/v1/team/team-member/auth",
        { username, password },
        { withCredentials: true },
      );
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate("/");
    } catch (error: any) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  const checkAuthStatus = async () => {
    setError(null);
    setIsLoading(true);
  
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  
    const errorTimer = setTimeout(() => {
      if (isLoading) {
        setError("Error occurred while checking authentication status.");
      }
    }, 30000);
  
    try {
      await axios.get("http://localhost:3000/api/v1/team/team-member/session", {
        withCredentials: true,
      });
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    } finally {
      clearTimeout(loadingTimer);
      clearTimeout(errorTimer);
    }
  };
  

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return { login, checkAuthStatus, isLoading, isLoggedIn, error };
};
