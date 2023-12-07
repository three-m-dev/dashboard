import { useState } from "react";
import axios from "axios";
import { ICareer } from "../shared/interfaces";
import { baseUrl } from "../utils/config";

export const useGetCareers = () => {
  const [careers, setCareers] = useState<ICareer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCareers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/careers`, {
        withCredentials: true,
      });
      setCareers(response.data.careers);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getCareers, careers, isLoading, error };
};
