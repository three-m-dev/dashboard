import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IJob } from "../../shared/interfaces";

const useGetJobs = () => {
  const [jobData, setJobData] = useState<{
    jobs: IJob[];
    total: number;
    pages: number;
  } | null>(null);

  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);
  const [fields, setFields] = useState<string[] | undefined>(undefined);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [refreshToggle, setRefreshToggle] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseUrl}/jobs`, {
          params: {
            filter: filter ? JSON.stringify(filter) : undefined,
            sort,
            page,
            pageSize,
            fields: fields ? fields.join(",") : undefined,
          },
          withCredentials: true,
        });

        const data = response.data;
        
        setJobData({
          jobs: data.jobs,
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
        setLoading(false);
      }
    };

    if (page !== undefined && pageSize !== undefined) {
      getJobs();
    }
  }, [filter, sort, page, pageSize, fields, refreshToggle]);

  const refreshJobs = () => {
    setRefreshToggle((prev) => !prev);
  };

  return {
    jobData,
    setFilter,
    setSort,
    setPage,
    setPageSize,
    setFields,
    loading,
    error,
    refreshJobs,
  };
};

export default useGetJobs;
