import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const useGenerateDowntimeReport = () => {
  const [downtimeReportData, setDowntimeReportData] = useState(null);

  const [filter, setFilter] = useState<string | undefined>(undefined);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateDowntimeReport = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${baseUrl}/downtime/report`, {
          params: {
            filter: filter ? JSON.stringify(filter) : undefined,
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

    generateDowntimeReport();
  }, [filter]);

  return {
    downtimeReportData,
    setFilter,
    loading,
    error,
  };
};

export default useGenerateDowntimeReport;
