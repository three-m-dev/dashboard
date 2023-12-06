import { useEffect, useState } from "react";
import {
  useLocation,
  useParams,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  CareersTable,
  ApplicationsTable,
  Layout,
  ResumesTable,
  Loading,
} from "../components";
import { useGetCareers } from "../hooks/useGetCareers";
import { useGetDepartments } from "../hooks/useGetDepartments";
import { useGetApplications } from "../hooks/useGetApplications";

const Careers = () => {
  const [viewMode, setViewMode] = useState("careers");
  const location = useLocation();

  const {
    getCareers,
    careers,
    isLoading: isCareersLoading,
    error: careersError,
  } = useGetCareers();

  const {
    getDepartments,
    departments,
    isLoading: isDepartmentLoading,
    error: departmentsError,
  } = useGetDepartments();

  const {
    getApplications,
    applications,
    isLoading: isApplicationsLoading,
    error: applicationsError,
  } = useGetApplications();

  useEffect(() => {
    getCareers();
    getDepartments();
    getApplications();
  }, []);

  const getCurrentViewMode = () => {
    const params = useParams();
    if (params.id && location.pathname.includes("/application/")) {
      return "applicants";
    }
    return viewMode;
  };

  const currentViewMode = getCurrentViewMode();

  const renderRoutes = () => {
    switch (currentViewMode) {
      case "careers":
        return (
          <Routes>
            <Route
              path="/"
              element={
                <CareersTable careers={careers} departments={departments} />
              }
            />
            <Route
              path="/:id"
              element={
                <CareersTable careers={careers} departments={departments} />
              }
            />
          </Routes>
        );
      case "applications":
        return (
          <Routes>
            <Route
              path="/"
              element={<ApplicationsTable applications={applications} />}
            />
            <Route
              path="/application/:id"
              element={<ApplicationsTable applications={applications} />}
            />
          </Routes>
        );
      case "resumes":
        return (
          <Routes>
            <Route path="/" element={<ResumesTable />} />
          </Routes>
        );
      default:
        return <Navigate to="/" />;
    }
  };

  if (isCareersLoading || isDepartmentLoading) {
    return <Loading />;
  }

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
              viewMode === "applications"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("applications")}
          >
            Applications
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
