// src/components/layout/navbar/GuestNavbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const GuestNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Olimpo
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
              to="/"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contacto
            </Link>
            <Link
              to="/location"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Ubicación
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Registrarse
            </Link>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="/location"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Ubicación
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark inline-block"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default GuestNavbar;