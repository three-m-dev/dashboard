import { useState, useEffect } from "react";
import axios from "axios";
import { IEmployee } from "../shared/interfaces";

const URL = "http://localhost:8080/api/v1/employees";

const useGetEmployee = (id: string) => {
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await axios.get(`${URL}/${id}`, {
          withCredentials: true,
        });

        const data = response.data;
        setEmployee(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      }
    };

    getEmployee();
  }, [id]);

  return { employee, error };
};

export default useGetEmployee;
