// src/pages/public/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-pattern">
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48)",
          }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforma tu cuerpo, transforma tu vida
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Únete a Olimpo y comienza tu viaje hacia una versión más fuerte y
            saludable de ti mismo.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/register"
              className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200"
            >
              Empieza Ahora
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Musculación */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
                alt="Musculación"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Musculación</h3>
                <p className="text-gray-700 mb-4">
                  Acceso a nuestra sala de pesas completamente equipada con
                  máquinas modernas y pesos libres.
                </p>
                <Link
                  to="/muscle-training" // Cambiado de "/register"
                  className="text-black font-semibold flex items-center"
                >
                  Saber más <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Kickboxing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2581662/pexels-photo-2581662.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kickboxing"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kickboxing</h3>
                <p className="text-gray-700 mb-4">
                  Clases grupales de kickboxing impartidas por instructores
                  certificados.
                </p>
                <Link
                  to="/kickboxing" // Cambiado de "/register"
                  className="text-black font-semibold flex items-center"
                >
                  Saber más <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Entrenamiento personalizado */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                alt="Entrenamiento personalizado"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Entrenamiento Personalizado
                </h3>
                <p className="text-gray-700 mb-4">
                  Planes personalizados creados específicamente para ti y tus
                  objetivos.
                </p>
                <Link
                  to="/personal-training" // Cambiado de "/register"
                  className="text-black font-semibold flex items-center"
                >
                  Saber más <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete hoy y comienza tu viaje hacia un estilo de vida más saludable.
          </p>
          <Link
            to="/register"
            className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200"
          >
            Regístrate Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
