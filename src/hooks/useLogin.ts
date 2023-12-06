// useLogin hook
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";
import { useSession } from "./useSession";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { checkSession } = useSession();

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/organization/login`,
        { username, password },
        { withCredentials: true },
      );
      if (response.data.loggedIn) {
        await checkSession();
        return true;
      } else {
        setError("Login failed.");
        return false;
      }
    } catch (err: any) {
      setError(err.response?.data.message || "An error occurred during login.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
