import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { baseUrl } from "../../utils/config";

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext not found");
  }

  const { setIsAuthenticated } = authContext;

  const login = async (username: string, password: string) => {
    try {
      await axios.post(
        `${baseUrl}/users/login`,
        { username, password },
        { withCredentials: true },
      );
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { login };
};
