import { useState } from "react";
import axios from "axios";
import { ICareerListing } from "../interfaces/ICommon";

export const useGetCareerListings = () => {
  const [careerListings, setCareerListings] = useState<ICareerListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCareerListings = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/careers/listings",
        { withCredentials: true },
      );
      setCareerListings(response.data.jobListings);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getCareerListings, careerListings, isLoading, error };
};
