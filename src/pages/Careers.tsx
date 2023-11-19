import React, { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import {
  CareerForm,
  CareerTable,
  ApplicantTable,
  Layout,
  ResumeTable,
} from "../components";

const Careers = () => {
  const [viewMode, setViewMode] = useState<
    "careers" | "applicants" | "resumes"
  >("careers");

  const renderRoutes = () => {
    switch (viewMode) {
      case "careers":
        return (
          <Routes>
            <Route path="/" element={<CareerTable />} />
            <Route path="new" element={<CareerForm mode="create" />} />
            <Route path=":id" element={<CareerForm mode="view" />} />
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
        <div className="toggle-buttons flex justify-center gap-2 py-4">
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "careers"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("careers")}
          >
            Careers
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              viewMode === "applicants"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("applicants")}
          >
            Applicants
          </button>
          <button
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
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