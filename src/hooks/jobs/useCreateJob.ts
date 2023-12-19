import { useState } from "react";
import axios from "axios";
import { IJob } from "../../shared/interfaces";
import { baseUrl } from "../../utils/config";

export const useCreateJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [job, setJob] = useState<IJob | null>(null);

  const createJob = async (jobData: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/jobs`, jobData, {
        withCredentials: true,
      });
      setJob(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createJob, job, isLoading, error };
};
