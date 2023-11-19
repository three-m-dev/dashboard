import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Careers, Home, Login, Profile } from "./pages";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { isLoggedIn, checkAuthStatus } = useAuth();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    checkAuthStatus().then(() => {
      setIsCheckingAuth(false);
    });
  }, [checkAuthStatus]);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
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
        path="/employees/:employeeId"
        element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/careers/*"
        element={isLoggedIn ? <Careers /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
