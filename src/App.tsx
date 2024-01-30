import { Routes, Route, Navigate } from 'react-router';
import { Careers, Content, EmployeeProfile, Employees, FileWatch, Home, Login, NotFound, Production } from './pages';
import { ReactNode, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { useSession } from './hooks/useSession';
import { Loading } from './components';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useContext(AuthContext) ?? {};

  if (loading) {
    return <Loading size='large' />;
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};

const App = () => {
  useSession();

  const { isAuthenticated } = useContext(AuthContext) ?? {};

  return (
    <Routes>
      <Route
        path='/login'
        element={isAuthenticated ? <Navigate to='/' /> : <Login />}
      />

      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path='/employees'
        element={
          <ProtectedRoute>
            <Employees />
          </ProtectedRoute>
        }
      />

      <Route
        path='/careers'
        element={
          <ProtectedRoute>
            <Careers />
          </ProtectedRoute>
        }
      />

      <Route
        path='/content'
        element={
          <ProtectedRoute>
            <Content />
          </ProtectedRoute>
        }
      />

      <Route
        path='/production'
        element={
          <ProtectedRoute>
            <Production />
          </ProtectedRoute>
        }
      />

      <Route
        path='/profile/:employeeId'
        element={
          <ProtectedRoute>
            <EmployeeProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path='/file-watch'
        element={
          <ProtectedRoute>
            <FileWatch />
          </ProtectedRoute>
        }
      />

      <Route
        path='*'
        element={
          <ProtectedRoute>
            <NotFound />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
