// src/components/layout/Navbar.tsx
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import GuestNavbar from "./navbar/GuestNavbar";
import AdminNavbar from "./navbar/AdminNavbar";
import ClientNavbar from "./navbar/ClientNavbar";

// src/components/layout/Navbar.tsx - Modifica el componente
// Agrega el logo al inicio

<header className="bg-white shadow">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <Link
        to="/"
        className="text-2xl font-bold text-primary flex items-center"
      >
        <img
          src="/src/assets/olimpo-logo-black.png"
          alt="Olimpo"
          className="h-10 mr-2"
        />
        Olimpo
      </Link>

      {/* El resto del código... */}
    </div>
  </div>
</header>;
const Navbar: React.FC = () => {
  const { authState, isAdmin, loading } = useAuth();

  // Si está cargando, mostramos un esqueleto del navbar
  if (loading) {
    return (
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="h-8 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </header>
    );
  }

  // Si no hay usuario, mostramos el navbar para invitados
  if (!authState.user) {
    return <GuestNavbar />;
  }

  // Si es admin, mostramos el navbar de admin
  if (isAdmin()) {
    return <AdminNavbar />;
  }

  // De lo contrario, mostramos el navbar de cliente
  return <ClientNavbar />;
};

export default Navbar;
