import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { IDowntimeEntry } from "../../shared/interfaces";

export const useCreateDowntimeEntry = () => {
  const [downtimeEntry, setDowntimeEntry] = useState<IDowntimeEntry | null>(
    null,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createDowntimeEntry = async (downtimeEntryData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/downtime`,
        downtimeEntryData,
        {
          withCredentials: true,
        },
      );
      setDowntimeEntry(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createDowntimeEntry, downtimeEntry, loading, error };
};
