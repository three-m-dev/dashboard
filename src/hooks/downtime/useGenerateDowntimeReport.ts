import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const useGenerateDowntimeReport = () => {
  const [downtimeReportData, setDowntimeReportData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [filter, setFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    const generateDowntimeReport = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/downtime/report`, {
          params: {
            filter: filter ? JSON.stringify(filter) : undefined,
          },
          withCredentials: true,
        });

        const data = response.data;

        setDowntimeReportData(data);

        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
          setLoading(false);
        } else {
          setError("An error occurred");
          setLoading(false);
        }
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
