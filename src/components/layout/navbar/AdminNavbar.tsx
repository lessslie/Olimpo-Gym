// src/components/layout/navbar/AdminNavbar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUsers, FiLogOut, FiUser } from "react-icons/fi";
import { useAuth } from "../../../hooks/useAuth";

const AdminNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { signOut, authState } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/admin/dashboard" className="text-2xl font-bold text-primary">
            Olimpo Admin
          </Link>

          {/* Menú para móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menú para desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/admin/dashboard"
              className="text-gray-700 hover:text-primary font-medium flex items-center"
            >
              <FiUsers className="mr-2" />
              Clientes
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center text-gray-700 hover:text-primary font-medium focus:outline-none"
              >
                <span className="mr-1">
                  Admin: {authState.user?.name || "Usuario"}
                </span>
                <FiUser className="h-5 w-5" />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg z-20">
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="mr-2" />
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/admin/dashboard"
                className="text-gray-700 hover:text-primary font-medium flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <FiUsers className="mr-2" />
                Clientes
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-700 hover:text-primary font-medium"
              >
                <FiLogOut className="mr-2" />
                Cerrar Sesión
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;