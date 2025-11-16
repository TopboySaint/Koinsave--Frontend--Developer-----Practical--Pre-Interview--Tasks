import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuthenticated: null, isLoading: true });
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('webVault');
      
      if (!token) {
        setAuthState({ isAuthenticated: false, isLoading: false });
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (!decoded.exp || decoded.exp < currentTime) {
          // Token is expired, remove it
          localStorage.removeItem('webVault');
          setAuthState({ isAuthenticated: false, isLoading: false });
          return;
        }

        // Token is valid
        setAuthState({ isAuthenticated: true, isLoading: false });
      } catch (error) {
        // Invalid token
        console.error('Invalid token:', error);
        localStorage.removeItem('webVault');
        setAuthState({ isAuthenticated: false, isLoading: false });
      }
    };

    checkAuth();
  }, []);

  // Show loading state while checking authentication
  if (authState.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700 font-semibold">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (!authState.isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Render the protected component if authenticated
  return children;
};

export default ProtectedRoute;