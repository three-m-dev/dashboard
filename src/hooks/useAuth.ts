import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

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
      navigate("/");
    } catch (error: any) {
      setError(error.response.data.message);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuthStatus = useCallback(async () => {
    try {
      await axios.get("http://localhost:3000/api/v1/team/team-member/session", {
        withCredentials: true,
      });
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
      if (location.pathname !== "/login") {
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return { login, isLoading, isLoggedIn, error };
};
