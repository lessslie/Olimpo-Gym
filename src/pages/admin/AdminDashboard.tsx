// src/pages/admin/AdminDashboard.tsx
import React, { useState, useEffect } from "react";
import { FiUsers, FiSearch, FiPlus, FiCalendar } from "react-icons/fi";

// Tipos temporales para el ejemplo
interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  membershipStatus: "active" | "inactive" | "pending";
  services: string[];
  lastPaymentDate: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"clients" | "calendar">("clients");
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  // Datos de ejemplo - en producción vendrían de Supabase
  useEffect(() => {
    // Simulación de carga de datos
    const mockClients: Client[] = [
      {
        id: "1",
        name: "Juan",
        lastName: "Pérez",
        email: "juan@example.com",
        phone: "123-456-7890",
        membershipStatus: "active",
        services: ["Musculación", "Kickboxing"],
        lastPaymentDate: "2023-03-15",
      },
      {
        id: "2",
        name: "María",
        lastName: "González",
        email: "maria@example.com",
        phone: "987-654-3210",
        membershipStatus: "active",
        services: ["Musculación"],
        lastPaymentDate: "2023-03-10",
      },
      {
        id: "3",
        name: "Carlos",
        lastName: "Rodríguez",
        email: "carlos@example.com",
        phone: "555-123-4567",
        membershipStatus: "inactive",
        services: ["Kickboxing"],
        lastPaymentDate: "2023-02-28",
      },
    ];

    setClients(mockClients);
  }, []);

  const filteredClients = clients.filter((client) =>
    `${client.name} ${client.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const handleCloseDetails = () => {
    setSelectedClient(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-8">
          <button
            className={`py-3 px-6 font-medium flex items-center ${
              activeTab === "clients" 
                ? "border-b-2 border-primary text-primary" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("clients")}
          >
            <FiUsers className="mr-2" /> Clientes
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center ${
              activeTab === "calendar" 
                ? "border-b-2 border-primary text-primary" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("calendar")}
          >
            <FiCalendar className="mr-2" /> Calendario de Asistencias
          </button>
        </div>

        {activeTab === "clients" && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Buscar clientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center">
                <FiPlus className="mr-2" /> Nuevo Cliente
              </button>
            </div>

            {selectedClient ? (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold">Detalles del Cliente</h2>
                  <button
                    onClick={handleCloseDetails}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Volver
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-gray-500 text-sm">Información Personal</h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Nombre Completo</p>
                        <p className="font-medium">
                          {selectedClient.name} {selectedClient.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{selectedClient.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Teléfono</p>
                        <p className="font-medium">{selectedClient.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-500 text-sm">Membresía</h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Estado</p>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            selectedClient.membershipStatus === "active"
                              ? "bg-green-100 text-green-800"
                              : selectedClient.membershipStatus === "inactive"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {selectedClient.membershipStatus === "active"
                            ? "Activo"
                            : selectedClient.membershipStatus === "inactive"
                            ? "Inactivo"
                            : "Pendiente"}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Servicios</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedClient.services.map((service) => (
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
                        <p className="text-sm text-gray-500">Último pago</p>
                        <p className="font-medium">
                          {new Date(selectedClient.lastPaymentDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                  <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Editar Cliente
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
                    Registrar Pago
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Contacto
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Servicios
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Último Pago
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredClients.map((client) => (
                      <tr
                        key={client.id}
                        onClick={() => handleClientClick(client)}
                        className="hover:bg-gray-50 cursor-pointer"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {client.name} {client.lastName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{client.email}</div>
                          <div className="text-sm text-gray-500">{client.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              client.membershipStatus === "active"
                                ? "bg-green-100 text-green-800"
                                : client.membershipStatus === "inactive"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {client.membershipStatus === "active"
                              ? "Activo"
                              : client.membershipStatus === "inactive"
                              ? "Inactivo"
                              : "Pendiente"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {client.services.map((service) => (
                              <span
                                key={service}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(client.lastPaymentDate).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === "calendar" && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Calendario de Asistencias</h2>
            <p className="text-gray-500">
              Esta sección mostrará un calendario con las asistencias de los clientes.
              Aquí podrás ver quién ingresó al gimnasio escaneando el código QR.
            </p>
            {/* Aquí iría el componente de calendario */}
            <div className="mt-8 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center">
              <p className="text-gray-500">
                El componente de calendario se implementará en una fase posterior.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;