import { useState, useEffect } from "react";
import axios from "axios";
import { ITeamMember } from "../shared/interfaces";

const useGetTeamMemberByUser = (userId: string) => {
  const [teamMemberData, setTeamMemberData] = useState<ITeamMember | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const baseUrl = "http://localhost:8080/api/v1";

  useEffect(() => {
    const getTeamMemberByUser = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/organization/team-members/by-user/${userId}`,
          {
            withCredentials: true,
          },
        );
        setTeamMemberData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      }
    };

    getTeamMemberByUser();
  }, [userId]);

  return { teamMemberData, error };
};

export default useGetTeamMemberByUser;
