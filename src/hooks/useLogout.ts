import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/config";

export const useLogout = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(
        `${baseUrl}/organization/logout`,
        {},
        { withCredentials: true },
      );
      setLoggedIn(true);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setError("Logout failed");
      setLoading(false);
    }
  };

  return { logout, loggedIn, loading, error };
};
