import { useState } from "react";
import axios from "axios";
import { IApplication } from "../interfaces/ICommon";
import { baseUrl } from "../utils/config";

export const useGetApplications = () => {
  const [applications, setApplications] = useState<IApplication[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getApplications = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/careers/applications`, {
        withCredentials: true,
      });
      setApplications(response.data.careerApplications);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getApplications, applications, isLoading, error };
};
