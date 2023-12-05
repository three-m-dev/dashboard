import { useState } from "react";
import axios from "axios";
import { ICareerListing } from "../interfaces/ICommon";
import { baseUrl } from "../utils/config";

export const useGetCareerListings = () => {
  const [careerListings, setCareerListings] = useState<ICareerListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCareerListings = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/careers`, {
        withCredentials: true,
      });
      setCareerListings(response.data.careerListings);
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
