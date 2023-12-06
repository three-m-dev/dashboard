import { useState } from "react";
import axios from "axios";
import { ICareer } from "../interfaces/ICommon";
import { baseUrl } from "../utils/config";

export const useCreateCareer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [career, setCareer] = useState<ICareer | null>(null);

  const createCareer = async (careerData: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/careers`, careerData, {
        withCredentials: true,
      });
      setCareer(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createCareer, career, isLoading, error };
};
