import { useState, useEffect } from "react";
import axios from "axios";
import { IApplication } from "../../shared/interfaces";
import { baseUrl } from "../../utils/config";

const useGetApplications = () => {
  const [applicationData, setApplicationData] = useState<{
    applications: IApplication[];
    total: number;
    pages: number;
  } | null>(null);

  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);
  const [fields, setFields] = useState<string[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await axios.get(`${baseUrl}/applications`, {
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
        setApplicationData({
          applications: data.applications,
          total: data.total,
          pages: data.pages,
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
      getApplications();
    }
  }, [filter, sort, page, pageSize, fields]);

  return {
    applicationData,
    setFilter,
    setSort,
    setPage,
    setPageSize,
    setFields,
    error,
  };
};

export default useGetApplications;
