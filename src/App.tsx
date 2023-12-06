import { Routes, Route, Navigate } from "react-router-dom";
import { Careers, Home, Login, Profile, Team } from "./pages";
import { useSession } from "./hooks/useSession";
import { Loading } from "./components";

const App = () => {
  const { loggedIn, loading, error } = useSession();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div>Error occurred while checking authentication status: {error}</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/"
        element={loggedIn ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/team/*"
        element={loggedIn ? <Team /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/careers/*"
        element={loggedIn ? <Careers /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/profile/:employeeId"
        element={loggedIn ? <Profile /> : <Navigate to="/login" replace />}
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
