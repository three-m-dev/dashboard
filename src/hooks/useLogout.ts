import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const URL = "http://localhost:8080/api/v1/users/logout";

export const useLogout = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext not found");
  }

  const { setIsAuthenticated } = authContext;

  const logout = async () => {
    try {
      await axios.post(URL, {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { logout };
};
