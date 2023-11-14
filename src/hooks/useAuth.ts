import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.post(
        "http://localhost:3000/api/v1/users/auth",
        { username, password },
        { withCredentials: true },
      );
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setError("Login failed");
      setIsLoading(false);
    }
  };

  const checkAuthStatus = async () => {
    try {
      await axios.get("http://localhost:3000/api/v1/users/session", {
        withCredentials: true,
      });
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return { login, checkAuthStatus, isLoading, isLoggedIn, error };
};
