import { Routes, Route, Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useSession } from "./hooks/useSession";
import { Dashboard, Login } from "./pages";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useContext(AuthContext) ?? {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App = () => {
  useSession();

  const { isAuthenticated } = useContext(AuthContext) ?? {};

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
