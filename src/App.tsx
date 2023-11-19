import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Calendar, Careers, Home, Login, Profile, Team } from "./pages";
import { useAuth } from "./hooks/useAuth";
import { Layout, Loading } from "./components";

const App = () => {
  const { isLoggedIn, checkAuthStatus } = useAuth();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (isCheckingAuth) {
        setHasError(true);
      }
    }, 1000);

    checkAuthStatus()
      .then(() => {
        setIsCheckingAuth(false);
        clearTimeout(timeout); 
      })
      .catch(() => {
        setHasError(true); 
        clearTimeout(timeout);
      });

    return () => clearTimeout(timeout); 
  }, [checkAuthStatus]);

  if (hasError) {
    return (
      <Layout>
        <div>Error occurred while checking authentication status.</div>
      </Layout>
    );
  }

  if (isCheckingAuth) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/calendar/*"
        element={isLoggedIn ? <Calendar /> : <Navigate to="/login" />}
      />
      <Route
        path="/team/*"
        element={isLoggedIn ? <Team /> : <Navigate to="/login" />}
      />
      <Route
        path="/careers/*"
        element={isLoggedIn ? <Careers /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile/:employeeId"
        element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
