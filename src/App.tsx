import { Routes, Route, Navigate } from "react-router-dom";
import { Calendar, Careers, Home, Login, Profile, Team } from "./pages";
import { useAuth } from "./hooks/useAuth";
import { Loading } from "./components";
import TeamTest from "./pages/TeamTest";

const App = () => {
  const { isLoggedIn, isLoading, error } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div>Error occurred while checking authentication status.</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/test"
        element={isLoggedIn ? <TeamTest /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/calendar/*"
        element={isLoggedIn ? <Calendar /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/team/*"
        element={isLoggedIn ? <Team /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/careers/*"
        element={isLoggedIn ? <Careers /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/profile/:employeeId"
        element={isLoggedIn ? <Profile /> : <Navigate to="/login" replace />}
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
