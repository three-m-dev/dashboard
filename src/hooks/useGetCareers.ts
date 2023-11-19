import { useState } from "react";
import axios from "axios";
import { ICareerListing } from "../interfaces/ICommon";

export const useGetCareers = () => {
  const [jobListings, setJobListings] = useState<ICareerListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCareers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/careers/listings",
        { withCredentials: true },
      );
      setJobListings(response.data.jobListings);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getCareers, jobListings, isLoading, error };
};
