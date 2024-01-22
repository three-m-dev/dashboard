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

      console.log(response.data);

      const { firstName, lastName, email, title, department } =
        response.data.employee;

      setState((prevState) => ({
        ...prevState,
        user: {
          firstName,
          lastName,
          email,
          title,
          department,
        },

        permissions: prevState.permissions,
        application: prevState.application,
      }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { login };
};
