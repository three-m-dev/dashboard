import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IJob } from "../../shared/interfaces";

export const useCreateJob = () => {
  const [job, setJob] = useState<IJob | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createJob = async (jobData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/jobs`, jobData, {
        withCredentials: true,
      });
      setJob(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createJob, job, loading, error };
};
