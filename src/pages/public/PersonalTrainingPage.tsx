// src/pages/public/PersonalTrainingPage.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PersonalTrainingPage: React.FC = () => {
  // Imágenes para el carrusel
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Entrenador personal ayudando con levantamiento de pesas",
    },
    {
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Entrenamiento personalizado con pesas",
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Ejercicios de estiramiento con entrenador personal",
    },
    {
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Sesión de entrenamiento personalizado en gimnasio",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  // Cambio automático de imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [ ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:underline"
          >
            <FiArrowLeft className="mr-2" /> Volver al inicio
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Entrenamiento Personalizado</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          {/* Carrusel de imágenes */}
          <div className="relative h-96">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Controles del carrusel */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Imagen anterior"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Imagen siguiente"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              La vía rápida hacia tus objetivos fitness
            </h2>

            <p className="text-gray-700 mb-6">
              El entrenamiento personalizado es la forma más efectiva y segura
              de alcanzar tus metas fitness. Un entrenador dedicado
              exclusivamente a ti puede diseñar un programa adaptado a tus
              necesidades específicas, corregir tu técnica, y motivarte para
              superar tus límites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Ventajas del entrenamiento personalizado
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Programa adaptado específicamente a tus objetivos y
                    condición física
                  </li>
                  <li>
                    Corrección inmediata de la técnica para prevenir lesiones
                  </li>
                  <li>
                    Progresión óptima que maximiza resultados y minimiza
                    estancamientos
                  </li>
                  <li>
                    Atención exclusiva y personalizada durante toda la sesión
                  </li>
                  <li>
                    Mayor motivación y responsabilidad para mantener la
                    constancia
                  </li>
                  <li>
                    Adaptaciones rápidas según tu progreso o cambios en tus
                    objetivos
                  </li>
                  <li>Tiempo de entrenamiento más eficiente y productivo</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  ¿Quién necesita un entrenador personal?
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Principiantes que quieren aprender técnicas correctas desde
                    el inicio
                  </li>
                  <li>
                    Personas con objetivos específicos como pérdida de peso o
                    hipertrofia
                  </li>
                  <li>Deportistas que buscan mejorar su rendimiento</li>
                  <li>Individuos en rehabilitación de lesiones</li>
                  <li>
                    Quienes han experimentado estancamientos en su progreso
                  </li>
                  <li>
                    Personas con condiciones médicas que requieren adaptaciones
                    especiales
                  </li>
                  <li>
                    Cualquiera que busque resultados más rápidos y eficientes
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Nuestro equipo de entrenadores en Olimpo
            </h3>
            <p className="text-gray-700 mb-4">
              En Olimpo contamos con un equipo de entrenadores certificados con
              diversas especialidades. Todos nuestros profesionales tienen
              formación académica en ciencias del deporte, certificaciones
              reconocidas internacionalmente y experiencia comprobada en
              diferentes áreas del fitness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">
                  Especialistas en pérdida de peso
                </h4>
                <p className="text-gray-700">
                  Expertos en combinar entrenamiento y nutrición para optimizar
                  la pérdida de grasa manteniendo o aumentando la masa muscular.
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">Expertos en hipertrofia</h4>
                <p className="text-gray-700">
                  Entrenadores especializados en técnicas avanzadas para el
                  desarrollo muscular y la mejora de la composición corporal.
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-lg">
                <h4 className="font-semibold mb-2">
                  Preparadores físicos deportivos
                </h4>
                <p className="text-gray-700">
                  Profesionales enfocados en mejorar el rendimiento deportivo
                  específico, trabajando capacidades como fuerza, velocidad,
                  potencia y resistencia.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2">¿Cómo funciona?</h4>
              <p className="text-gray-700 mb-4">
                Nuestro proceso de entrenamiento personalizado comienza con una
                evaluación inicial completa donde analizamos tu condición física
                actual, historial médico, experiencia previa de entrenamiento y
                objetivos específicos. A partir de esta información, diseñamos
                un programa completamente personalizado.
              </p>
              <p className="text-gray-700">
                Las sesiones pueden ser de 30, 45 o 60 minutos, con frecuencia
                adaptable a tu disponibilidad. Realizamos evaluaciones
                periódicas para medir tu progreso y ajustar el programa según
                sea necesario para garantizar resultados óptimos.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Opciones y precios</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Plan</th>
                    <th className="py-3 px-4 border-b text-center">Sesiones</th>
                    <th className="py-3 px-4 border-b text-center">Duración</th>
                    <th className="py-3 px-4 border-b text-center">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Introductorio</td>
                    <td className="py-3 px-4 border-b text-center">
                      4 sesiones
                    </td>
                    <td className="py-3 px-4 border-b text-center">45 min</td>
                    <td className="py-3 px-4 border-b text-center">
                      Consultar
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Estándar</td>
                    <td className="py-3 px-4 border-b text-center">
                      8 sesiones
                    </td>
                    <td className="py-3 px-4 border-b text-center">60 min</td>
                    <td className="py-3 px-4 border-b text-center">
                      Consultar
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Premium</td>
                    <td className="py-3 px-4 border-b text-center">
                      12 sesiones
                    </td>
                    <td className="py-3 px-4 border-b text-center">60 min</td>
                    <td className="py-3 px-4 border-b text-center">
                      Consultar
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">Duo Training</td>
                    <td className="py-3 px-4 border-b text-center">
                      8 sesiones (2 personas)
                    </td>
                    <td className="py-3 px-4 border-b text-center">60 min</td>
                    <td className="py-3 px-4 border-b text-center">
                      Consultar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded font-bold text-center hover:bg-primary-dark"
              >
                Solicitar Evaluación Gratuita
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded font-bold text-center hover:bg-gray-100"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainingPage;
