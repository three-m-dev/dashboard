import { useState } from "react";
import axios from "axios";
import { ITeamMember } from "../interfaces/ICommon";

export const useGetTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTeamMembers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/team/team-members",
        { withCredentials: true },
      );
      setTeamMembers(response.data.teamMembers);
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  return { getTeamMembers, teamMembers, isLoading, isLoggedIn, error };
};
