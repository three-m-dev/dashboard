import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";

type FilterType = {
  dateRange: {
    start: string | null;
    end: string | null;
  } | null;
};

const useGenerateDowntimeReport = () => {
  const [downtimeReportData, setDowntimeReportData] = useState(null);
  const [filter, setFilter] = useState<FilterType>({ dateRange: null });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateDowntimeReport = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseUrl}/downtime/report`, {
          params: {
            filter: filter.dateRange
              ? JSON.stringify({ dateRange: filter.dateRange })
              : undefined,
          },
          withCredentials: true,
        });

        const data = response.data;
        setDowntimeReportData(data);
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

    if (filter.dateRange) {
      generateDowntimeReport();
    }
  }, [filter]);

  return {
    downtimeReportData,
    setFilter,
    loading,
    error,
  };
};

export default useGenerateDowntimeReport;
