// useSession hook
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/config";

export const useSession = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const checkSession = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/organization/session`, {
        withCredentials: true,
      });
      if (response.data.loggedIn) {
        setLoggedIn(true);
        setUser(response.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
        navigate("/login");
      }
    } catch (err: any) {
      setLoggedIn(false);
      setUser(null);
      setError(err.message || "Error occurred during session check.");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return { loggedIn, loading, error, user, checkSession };
};
