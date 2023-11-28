import { useEffect, useState } from "react";
import {
  useLocation,
  useParams,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  CareerTable,
  ApplicantTable,
  Layout,
  ResumeTable,
  Loading,
} from "../components";
import { useGetCareerListings } from "../hooks/useGetCareerListings";
import { useGetDepartments } from "../hooks/useGetDepartments";
import { useGetApplications } from "../hooks/useGetApplications";

const Careers = () => {
  const [viewMode, setViewMode] = useState("careers");
  const location = useLocation();

  const {
    getCareerListings,
    careerListings,
    isLoading: isCareersLoading,
    error: careersError,
  } = useGetCareerListings();

  const {
    getDepartments,
    departments,
    isLoading: isDepartmentLoading,
    error: departmentError,
  } = useGetDepartments();

  const {
    getApplications,
    applications,
    isLoading: isApplicationsLoading,
    error: applicationsError,
  } = useGetApplications();

  useEffect(() => {
    getCareerListings();
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
                <CareerTable
                  listings={careerListings}
                  departments={departments}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <CareerTable
                  listings={careerListings}
                  departments={departments}
                />
              }
            />
          </Routes>
        );
      case "applicants":
        return (
          <Routes>
            <Route
              path="/"
              element={<ApplicantTable applications={applications} />}
            />
            <Route
              path="/application/:id"
              element={<ApplicantTable applications={applications} />}
            />
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
