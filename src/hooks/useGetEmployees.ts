import { useState } from "react";
import axios from "axios";
import { Employee } from "../interfaces/ICommon";

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getEmployees = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/employees",
        { withCredentials: true },
      );
      setEmployees(response.data.employees);
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  return { getEmployees, employees, isLoading, isLoggedIn, error };
};
