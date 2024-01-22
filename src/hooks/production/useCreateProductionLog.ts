import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IProductionLog } from "../../shared/interfaces";

export const useCreateProductionLog = () => {
  const [productionLog, setProductionLog] = useState<IProductionLog | null>(
    null,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createProductionLog = async (productionLogData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/production/logs`,
        productionLogData,
        {
          withCredentials: true,
        },
      );
      setProductionLog(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createProductionLog, productionLog, loading, error };
};
