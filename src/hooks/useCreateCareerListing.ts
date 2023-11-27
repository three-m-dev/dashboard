import { useState } from "react";
import axios from "axios";
import { ICareerListing } from "../interfaces/ICommon";

export const useCreateCareerListing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdCareerListing, setCreatedCareerListing] =
    useState<ICareerListing | null>(null);

  const createCareerListing = async (listingData: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/careers/create",
        listingData,
        { withCredentials: true },
      );
      setCreatedCareerListing(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createCareerListing, createdCareerListing, isLoading, error };
};
