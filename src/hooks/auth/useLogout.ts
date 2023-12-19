import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { baseUrl } from "../../utils/config";

export const useLogout = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext not found");
  }

  const { setIsAuthenticated } = authContext;

  const logout = async () => {
    try {
      await axios.post(
        `${baseUrl}/users/logout`,
        {},
        { withCredentials: true },
      );
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { logout };
};
