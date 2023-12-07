import { Routes, Route, Navigate } from "react-router-dom";
import { Careers, Home, Login, Production, Profile, Team } from "./pages";
import { useSession } from "./hooks/useSession";
import { Loading } from "./components";

const App = () => {
  const { loggedIn, loading, error, user } = useSession();

  if (error && error === "Not authenticated") {
    return <Navigate to="/login" replace />;
  }

  console.log(user);

  if (loading) {
    return <Loading />;
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
        path="/production/*"
        element={loggedIn ? <Production /> : <Navigate to="/login" replace />}
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
