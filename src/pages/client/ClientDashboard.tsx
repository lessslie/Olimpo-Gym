// src/pages/client/ClientDashboard.tsx
import React, { useState } from "react";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

// Tipos temporales para el ejemplo
interface ClientProfile {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  membershipStatus: "active" | "inactive" | "pending";
  services: string[];
  nextPaymentDate: string;
  remainingEntries: number;
}

interface AttendanceRecord {
  id: string;
  date: string;
  checkInTime: string;
}

const ClientDashboard: React.FC = () => {
  // Datos de ejemplo - en producción vendrían de Supabase
  const [profile] = useState<ClientProfile>({
    id: "1",
    name: "Juan",
    lastName: "Pérez",
    email: "juan@example.com",
    phone: "123-456-7890",
    membershipStatus: "active",
    services: ["Musculación", "Kickboxing"],
    nextPaymentDate: "2023-04-15",
    remainingEntries: 12,
  });

  // Historial de asistencia de ejemplo
  const [attendanceHistory] = useState<AttendanceRecord[]>([
    { id: "1", date: "2023-03-15", checkInTime: "09:30" },
    { id: "2", date: "2023-03-13", checkInTime: "18:45" },
    { id: "3", date: "2023-03-10", checkInTime: "17:20" },
    { id: "4", date: "2023-03-08", checkInTime: "08:15" },
    { id: "5", date: "2023-03-05", checkInTime: "19:00" },
  ]);

  const getDaysUntilPayment = () => {
    const today = new Date();
    const paymentDate = new Date(profile.nextPaymentDate);
    const diffTime = paymentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta de información personal */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 p-3 rounded-full mr-4">
                <FiUser className="text-gray-600 text-xl" />
              </div>
              <h2 className="text-xl font-bold">Información Personal</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Nombre Completo</p>
                <p className="font-medium">
                  {profile.name} {profile.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </div>
          </div>

          // src/pages/client/ClientDashboard.tsx (continuación)
          {/* Tarjeta de membresía */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 p-3 rounded-full mr-4">
                <FiCalendar className="text-gray-600 text-xl" />
              </div>
              <h2 className="text-xl font-bold">Mi Membresía</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Estado</p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    profile.membershipStatus === "active"
                      ? "bg-green-100 text-green-800"
                      : profile.membershipStatus === "inactive"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {profile.membershipStatus === "active"
                    ? "Activo"
                    : profile.membershipStatus === "inactive"
                    ? "Inactivo"
                    : "Pendiente"}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Servicios</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Entradas restantes</p>
                <p className="font-medium">{profile.remainingEntries}</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de próximo pago */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 p-3 rounded-full mr-4">
                <FiClock className="text-gray-600 text-xl" />
              </div>
              <h2 className="text-xl font-bold">Próximo Pago</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Fecha de pago</p>
                <p className="font-medium">
                  {new Date(profile.nextPaymentDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Días restantes</p>
                <p
                  className={`font-medium ${
                    getDaysUntilPayment() <= 3 ? "text-red-600" : ""
                  }`}
                >
                  {getDaysUntilPayment()} días
                </p>
              </div>
              <div className="mt-6">
                <div
                  className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden ${
                    getDaysUntilPayment() <= 3 ? "bg-red-100" : ""
                  }`}
                >
                  <div
                    className={`h-full ${
                      getDaysUntilPayment() <= 3 ? "bg-red-600" : "bg-green-600"
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(0, (30 - getDaysUntilPayment()) / 30) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historial de asistencia */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Historial de Asistencia</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hora de Entrada
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceHistory.map((record) => (
                  <tr key={record.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(record.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.checkInTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;