import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { baseUrl } from "../../utils/config";
import { useGeneralContext } from "../useGeneral";

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  const { setState } = useGeneralContext();

  if (!authContext) {
    throw new Error("AuthContext not found");
  }

  const { setIsAuthenticated } = authContext;

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/login`,
        { username, password },
        { withCredentials: true },
      );

      setIsAuthenticated(true);

      const userData = response.data.employee;
      setState({
        userFullName: userData.firstName + " " + userData.lastName,
        userTitle: userData.title,
        productionTab: "default",
        productionDateRange: "default",
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { login };
};
