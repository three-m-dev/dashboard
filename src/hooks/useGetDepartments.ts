import { useState } from "react";
import axios from "axios";
import { IDepartment } from "../interfaces/ICommon";

export const useGetDepartments = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getDepartments = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/organization/departments",
        { withCredentials: true },
      );
      setDepartments(response.data.departments);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getDepartments, departments, isLoading, error };
};
