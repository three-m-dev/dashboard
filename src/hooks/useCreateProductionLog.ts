import { useState } from 'react';
import axios from 'axios';
import { IProductionLog } from '../interfaces';

export const useCreateProductionLog = () => {
  const [productionLog, setProductionLog] = useState<IProductionLog | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createProductionLog = async (productionLogData: any) => {
    setLoading(true);
    setError(null);

    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/production/logs/create`, productionLogData, {
        withCredentials: true,
      });
      await delay(1000);
      setProductionLog(response.data);
    } catch (error: any) {
      await delay(1000);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.message) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { createProductionLog, productionLog, loading, error };
};
