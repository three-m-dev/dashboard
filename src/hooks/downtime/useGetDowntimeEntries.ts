import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IDowntimeEntry } from "../../shared/interfaces";

const useGetDowntimeEntries = () => {
  const [downtimeEntryData, setDowntimeEntryData] = useState<{
    downtimeEntries: IDowntimeEntry[];
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
    const getDowntimeEntries = async () => {
      try {
        const response = await axios.get(`${baseUrl}/downtime`, {
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
        setDowntimeEntryData({
          downtimeEntries: data.downtimeEntries,
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
      getDowntimeEntries();
    }
  }, [filter, sort, page, pageSize, fields]);

  return {
    downtimeEntryData,
    setFilter,
    setSort,
    setPage,
    setPageSize,
    setFields,
    error,
  };
};

export default useGetDowntimeEntries;
