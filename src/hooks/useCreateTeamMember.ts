import { useState } from "react";
import axios from "axios";
import { ITeamMember } from "../interfaces/ICommon";

export const useCreateTeamMember = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdTeamMember, setCreatedTeamMember] =
    useState<ITeamMember | null>(null);

  const createTeamMember = async (userData: any, teamMemberData: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/organization/team-member",
        { user: userData, teamMember: teamMemberData },
        { withCredentials: true },
      );
      setCreatedTeamMember(response.data);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createTeamMember, createdTeamMember, isLoading, error };
};
