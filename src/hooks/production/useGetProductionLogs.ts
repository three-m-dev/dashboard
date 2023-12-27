import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IProductionLog } from "../../shared/interfaces";

const useGetProductionLogs = () => {
  const [productionLogData, setProductionLogData] = useState<{
    productionLogs: IProductionLog[];
    total: number;
    pages: number;
  } | null>(null);

  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
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
            filter: filter ? JSON.stringify(filter) : undefined,
            sort,
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
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(true);
      }
    };

    if (page !== undefined) {
      getProductionLogs();
    }
  }, [filter, sort, page, refreshToggle]);

  const refreshProductionLogs = () => {
    setRefreshToggle((prev) => !prev);
  };

  return {
    productionLogData,
    setFilter,
    setSort,
    setPage,
    loading,
    error,
    refreshProductionLogs,
  };
};

export default useGetProductionLogs;
