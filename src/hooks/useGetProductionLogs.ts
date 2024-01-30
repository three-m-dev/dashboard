import { useState, useEffect } from 'react';
import axios from 'axios';

interface IProductionLog {
  id: string;
  weekOf: string;
  projectedOutput: number;
  actualOutput: number;
  outputGoal: number;
  quotedHours?: number;
  actualHours?: number;
  totalHours?: number;
  indirectHours?: number;
  notes?: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: string;
  updatedAt: string;
}

// const devUrl = 'http://localhost:8080/api/v1';

const baseUrl = 'https://api.setup123.com/api/v1';

const useGetProductionLogs = () => {
  const [productionLogData, setProductionLogData] = useState<{
    productionLogs: IProductionLog[];
    total: number;
    pages: number;
  } | null>(null);

  // const [filter, setFilter] = useState<FilterType>({ dateRange: null });
  // const [sort, setSort] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [refreshToggle, setRefreshToggle] = useState(false);

  useEffect(() => {
    const getProductionLogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseUrl}/production/logs`, {
          params: {
            page,
          },
          withCredentials: true,
        });

        const data = response.data;

        setProductionLogData({
          productionLogs: data.productionLogs,
          total: data.total,
          pages: data.pages,
        });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'An error occurred');
        } else {
          setError('An error occurred');
        }
      } finally {
        setLoading(true);
      }
    };

    getProductionLogs();
  }, [page, refreshToggle]);

  const refreshProductionLogs = () => {
    setRefreshToggle((prev) => !prev);
  };

  return {
    productionLogData,
    setPage,
    loading,
    error,
    refreshProductionLogs,
  };
};

export default useGetProductionLogs;
