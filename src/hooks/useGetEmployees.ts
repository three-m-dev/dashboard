import { useState, useEffect } from "react";
import axios from "axios";
import { IEmployee } from "../shared/interfaces";

const URL = "http://localhost:8080/api/v1/employees";

const useGetEmployees = () => {
  const [employeeData, setEmployeeData] = useState<{
    employees: IEmployee[];
    total: number;
    pages: number;
  } | null>(null);

  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);
  const [fields, setFields] = useState<string[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axios.get(URL, {
          params: {
            filter: filter ? JSON.stringify(filter) : undefined,
            sort,
            page,
            pageSize,
            fields: fields ? fields.join(",") : undefined,
          },
          withCredentials: true,
        });

        const data = response.data;
        setEmployeeData({
          employees: data.employees,
          total: data.total,
          pages: data.pages,
        });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      }
    };

    if (page !== undefined && pageSize !== undefined) {
      getEmployees();
    }
  }, [filter, sort, page, pageSize, fields]);

  return {
    employeeData,
    setFilter,
    setSort,
    setPage,
    setPageSize,
    setFields,
    error,
  };
};

export default useGetEmployees;
