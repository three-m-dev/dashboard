import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IProductionLog } from "../../shared/interfaces";

export const useUpdateProductionLog = (id: string) => {
  const [productionLog, setProductionLog] = useState<IProductionLog | null>(
    null,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateProductionLog = async (productionLogData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/production/logs/${id}`,
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

  return { updateProductionLog, productionLog, loading, error };
};
