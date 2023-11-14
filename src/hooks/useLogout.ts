import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/users/logout",
        {},
        { withCredentials: true },
      );
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setError("Logout failed");
      setIsLoading(false);
    }
  };

  return { logout };
};

export default useLogout;
