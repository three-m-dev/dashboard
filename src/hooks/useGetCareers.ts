import { useState, useEffect } from "react";
import axios from "axios";
import { ICareer } from "../shared/interfaces";

const URL = "http://localhost:8080/api/v1/careers";

const useGetCareers = () => {
  const [careerData, setCareerData] = useState<{
    careers: ICareer[];
    totalCareers: number;
    totalPages: number;
  } | null>(null);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);
  const [fields, setFields] = useState<string[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [refreshToggle, setRefreshToggle] = useState(false);

  useEffect(() => {
    const getCareers = async () => {
      try {
        const response = await axios.get(URL, {
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
        setCareerData({
          careers: data.careers,
          totalCareers: data.totalCareers,
          totalPages: data.totalPages,
        });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      }
    };

    if (page !== undefined && pageSize !== undefined) {
      getCareers();
    }
  }, [filter, sort, page, pageSize, fields, refreshToggle]);

  const refreshCareers = () => {
    setRefreshToggle((prev) => !prev);
  };

  return {
    careerData,
    setFilter,
    setSort,
    setPage,
    setPageSize,
    setFields,
    error,
    refreshCareers,
  };
};

export default useGetCareers;
