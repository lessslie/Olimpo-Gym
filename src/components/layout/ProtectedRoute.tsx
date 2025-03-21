// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedRouteProps {
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requireAdmin = false,
}) => {
  const { authState, isAdmin } = useAuth();

  console.log("ProtectedRoute - authState:", authState);
  console.log("ProtectedRoute - isAdmin:", isAdmin());

  if (authState.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Si no hay usuario autenticado, redirigimos al login
  if (!authState.user) {
    console.log("No authenticated user, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  // Si requiere ser admin pero el usuario no lo es
  if (requireAdmin && !isAdmin()) {
    console.log("Admin access required, but user is not admin");
    return <Navigate to="/access-denied" replace />;
  }

  // Si todo está correcto, renderizamos las rutas anidadas
  return <Outlet />;
};

export default ProtectedRoute;
