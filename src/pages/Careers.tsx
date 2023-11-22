import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import {
  CareerTable,
  ApplicantTable,
  Layout,
  ResumeTable,
  Loading,
} from "../components";
import { useGetCareers } from "../hooks/useGetCareers";

const Careers = () => {
  const [viewMode, setViewMode] = useState<
    "careers" | "applicants" | "resumes"
  >("careers");

  const { getCareers, jobListings, isLoading, error } = useGetCareers();

  const departments = [
    {
      id: "1",
      name: "Executive",
      count: 2,
    },
    {
      id: "2",
      name: "Management",
      count: 7,
    },
  ];

  useEffect(() => {
    getCareers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderRoutes = () => {
    switch (viewMode) {
      case "careers":
        return (
          <Routes>
            <Route
              path="/"
              element={
                <CareerTable listings={jobListings} departments={departments} />
              }
            />

            <Route
              path=":id"
              element={
                <CareerTable listings={jobListings} departments={departments} />
              }
            />
          </Routes>
        );
      case "applicants":
        return (
          <Routes>
            <Route path="/" element={<ApplicantTable />} />
          </Routes>
        );
      case "resumes":
        return (
          <Routes>
            <Route path="/" element={<ResumeTable />} />
          </Routes>
        );
      default:
        return <Navigate to="/" />;
    }
  };

  return (
    <Layout>
      <section>
        <div className="toggle-buttons flex justify-center gap-2 pb-4">
          <button
            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "careers"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("careers")}
          >
            Careers
          </button>
          <button
            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "applicants"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("applicants")}
          >
            Applicants
          </button>
          <button
            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === "resumes"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("resumes")}
          >
            Resumes
          </button>
        </div>
        {renderRoutes()}
      </section>
    </Layout>
  );
};

export default Careers;
