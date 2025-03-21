// src/pages/public/MuscleTrainingPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const MuscleTrainingPage: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-8">
          Importancia del Entrenamiento de Fuerza
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Entrenamiento de musculación"
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              Beneficios de la Musculación
            </h2>

            <p className="text-gray-700 mb-6">
              El entrenamiento de fuerza o musculación es mucho más que
              simplemente construir músculos. Es una actividad física integral
              que ofrece numerosos beneficios para la salud física y mental.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Beneficios físicos
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Aumento de la fuerza y resistencia muscular</li>
                  <li>
                    Mejora de la densidad ósea, reduciendo el riesgo de
                    osteoporosis
                  </li>
                  <li>
                    Aumento del metabolismo basal, ayudando a controlar el peso
                  </li>
                  <li>Mejor postura y equilibrio</li>
                  <li>Reducción del riesgo de lesiones</li>
                  <li>Mejor control de la glucosa en sangre</li>
                  <li>Mejora de la salud cardiovascular</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Beneficios mentales
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Reducción del estrés y la ansiedad</li>
                  <li>Mejora del estado de ánimo y autoestima</li>
                  <li>Mayor confianza en uno mismo</li>
                  <li>Mejora de la calidad del sueño</li>
                  <li>Aumento de la energía y la concentración</li>
                  <li>Desarrollo de disciplina y constancia</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              ¿Por qué entrenar en Olimpo?
            </h3>
            <p className="text-gray-700 mb-4">
              En Olimpo contamos con instalaciones de última generación,
              equipamiento completo y entrenadores certificados que te guiarán
              en cada paso de tu entrenamiento. Nuestro enfoque personalizado
              asegura que cada rutina esté adaptada a tus objetivos y
              capacidades, maximizando los resultados y minimizando el riesgo de
              lesiones.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-2">¿Sabías que?</h4>
              <p className="text-gray-700">
                El entrenamiento de fuerza no solo construye músculos, sino que
                también puede revertir la pérdida de masa muscular relacionada
                con la edad (sarcopenia), mejorando la calidad de vida a medida
                que envejecemos.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Cómo empezar</h3>
            <p className="text-gray-700 mb-6">
              Si eres nuevo en el entrenamiento de fuerza, te recomendamos
              comenzar con una evaluación inicial con uno de nuestros
              entrenadores. Ellos evaluarán tu condición física actual, tus
              objetivos y cualquier limitación que puedas tener para crear un
              plan personalizado que te ayude a progresar de manera segura y
              efectiva.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/register"
                className="bg-primary text-white px-8 py-3 rounded font-bold text-center hover:bg-primary-dark"
              >
                Comenzar Ahora
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded font-bold text-center hover:bg-gray-100"
              >
                Consultar con un Entrenador
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuscleTrainingPage;
