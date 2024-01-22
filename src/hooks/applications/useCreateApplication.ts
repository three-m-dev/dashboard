import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IApplication } from "../../shared/interfaces";

export const useCreateApplication = () => {
  const [application, setApplication] = useState<IApplication | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createApplication = async (jobData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/applications`, jobData, {
        withCredentials: true,
      });
      setApplication(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createApplication, application, loading, error };
};
