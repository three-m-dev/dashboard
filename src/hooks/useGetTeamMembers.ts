import { useState } from "react";
import axios from "axios";
import { ITeamMember } from "../shared/interfaces";
import { baseUrl } from "../utils/config";

export const useGetTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTeamMembers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/organization/team-members`, {
        withCredentials: true,
      });
      setTeamMembers(response.data.teamMembers);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return { getTeamMembers, teamMembers, isLoading, error };
};
