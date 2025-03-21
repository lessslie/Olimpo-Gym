// src/pages/public/LocationPage.tsx
import React from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Nuestra Ubicación
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              {/* Aquí puedes integrar un mapa real con Google Maps, Mapbox, etc. */}
              <div className="bg-gray-300 h-96 w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <FiMapPin className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-600">
                    Aquí se integrará el mapa interactivo cuando conectemos con
                    la API de mapas
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Cómo llegar</h2>
                <p className="text-gray-600 mb-4">
                  Estamos ubicados en el centro de la ciudad, con fácil acceso
                  desde transporte público y amplias opciones de estacionamiento
                  en los alrededores.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <FiMapPin className="mr-2 text-primary" />
                    Av. Principal 123, Ciudad
                  </p>
                  <p>
                    <strong>Referencia:</strong> A una cuadra de la Plaza
                    Central
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FiClock className="mr-2 text-primary" />
                Horarios
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Sala de Musculación</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lunes - Viernes</span>
                      <span>7:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábados</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingos</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <h3 className="font-semibold">Clases de Kickboxing</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Lunes, Miércoles, Viernes
                      </span>
                      <span>7:00 PM - 8:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábados</span>
                      <span>10:00 AM - 11:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Transporte</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Transporte Público</h3>
                  <p className="text-gray-600 mt-1">
                    Líneas de autobús 12, 34 y 56 con parada a 100 metros del
                    gimnasio.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Estacionamiento</h3>
                  <p className="text-gray-600 mt-1">
                    Contamos con estacionamiento propio para clientes con
                    capacidad limitada. También hay un estacionamiento público a
                    200 metros.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">
                ¿Listo para visitarnos?
              </h2>
              <p className="text-gray-600 mb-4">
                Te invitamos a conocer nuestras instalaciones. Puedes agendar
                una visita guiada o simplemente pasar por nuestro gimnasio.
              </p>
              <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Agendar visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
