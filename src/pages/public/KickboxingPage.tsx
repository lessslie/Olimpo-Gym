// src/pages/public/KickboxingPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const KickboxingPage: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-8">El Arte del Kickboxing</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src="https://images.pexels.com/photos/13808098/pexels-photo-13808098.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Entrenamiento de kickboxing"
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              Por qué el Kickboxing está revolucionando el fitness
            </h2>

            <p className="text-gray-700 mb-6">
              El kickboxing no es solo un deporte de combate; es una disciplina
              completa que combina técnicas de boxeo con patadas de diversas
              artes marciales. Esta combinación lo convierte en un entrenamiento
              integral que trabaja todo el cuerpo mientras desarrolla
              habilidades de autodefensa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Transformación física
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Quema hasta 800 calorías por hora de entrenamiento</li>
                  <li>Desarrolla músculos magros en todo el cuerpo</li>
                  <li>
                    Mejora significativamente la resistencia cardiovascular
                  </li>
                  <li>Aumenta la flexibilidad y coordinación</li>
                  <li>Desarrolla fuerza explosiva y agilidad</li>
                  <li>Mejora el equilibrio y la postura</li>
                  <li>Tonifica especialmente piernas, glúteos y core</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Beneficios mentales y emocionales
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Libera tensión y reduce el estrés de forma efectiva</li>
                  <li>Aumenta la confianza y autoestima</li>
                  <li>Mejora la concentración y foco mental</li>
                  <li>Desarrolla disciplina y perseverancia</li>
                  <li>Proporciona herramientas de autodefensa</li>
                  <li>Fomenta el autocontrol emocional</li>
                  <li>Crea una comunidad de apoyo entre practicantes</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Nuestras clases de Kickboxing en Olimpo
            </h3>
            <p className="text-gray-700 mb-4">
              En Olimpo, nuestras clases de kickboxing son impartidas por
              instructores certificados con amplia experiencia tanto en
              competición como en enseñanza. Ofrecemos diferentes niveles para
              que puedas progresar adecuadamente, desde principiantes hasta
              avanzados, en un ambiente seguro y motivador.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nivel Iniciación</h4>
                <p className="text-gray-700">
                  Aprende las técnicas básicas, posiciones y movimientos
                  fundamentales. Ideal para personas sin experiencia previa en
                  artes marciales.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nivel Intermedio</h4>
                <p className="text-gray-700">
                  Perfecciona tu técnica y aprende combinaciones más complejas.
                  Se introduce trabajo con compañero y ejercicios de mayor
                  intensidad.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nivel Avanzado</h4>
                <p className="text-gray-700">
                  Entrenamiento de alta intensidad con combinaciones complejas,
                  sparring técnico y preparación específica para quienes buscan
                  un reto mayor.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2">¿Es el kickboxing para mí?</h4>
              <p className="text-gray-700">
                ¡Absolutamente! El kickboxing es para todos, independientemente
                de tu edad, sexo o condición física actual. Adaptamos las clases
                para que cada persona trabaje a su propio ritmo y nivel. No
                necesitas experiencia previa, solo ganas de aprender y
                superarte. Muchos de nuestros estudiantes comenzaron sin ninguna
                experiencia en artes marciales y ahora disfrutan de todos los
                beneficios de esta disciplina.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Equipamiento necesario
            </h3>
            <p className="text-gray-700 mb-6">
              Para empezar, solo necesitas ropa cómoda deportiva. A medida que
              avances, recomendamos adquirir guantes de boxeo, protecciones para
              espinillas y vendas para las manos. En Olimpo disponemos de
              equipamiento básico para principiantes, para que puedas probar
              antes de invertir en tu propio material.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/register"
                className="bg-primary text-white px-8 py-3 rounded font-bold text-center hover:bg-primary-dark"
              >
                Probar Primera Clase Gratis
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded font-bold text-center hover:bg-gray-100"
              >
                Horarios y Más Información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KickboxingPage;
