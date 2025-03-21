// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider} from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

// Layouts y componentes comunes
import Navbar from "./components/layout/Navbar";
import TemporaryPage from "./components/ui/TemporaryPage";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Páginas públicas
import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import ContactPage from "./pages/public/ContactPage";
import LocationPage from "./pages/public/LocationPage";
import MuscleTrainingPage from "./pages/public/MuscleTrainingPage";
import KickboxingPage from "./pages/public/KickboxingPage";
import PersonalTrainingPage from "./pages/public/PersonalTrainingPage";

// Dashboards
import AdminDashboard from "./pages/admin/AdminDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";

// Componente para redirigir según el rol del usuario
const RoleRedirect = () => {
  const { authState, isAdmin } = useAuth();
  const { user, loading } = authState;

  console.log("RoleRedirect - user:", user);
  console.log("RoleRedirect - isAdmin:", isAdmin());
  console.log("RoleRedirect - loading:", loading);

  if (loading) {
    console.log("Loading user data...");
    return <LoadingSpinner />;
  }

  if (!user) {
    console.log("No user found, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  if (isAdmin()) {
    console.log("Admin user, redirecting to admin dashboard");
    return <Navigate to="/admin/dashboard" replace />;
  }

  console.log("Regular user, redirecting to client dashboard");
  return <Navigate to="/client/dashboard" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/muscle-training" element={<MuscleTrainingPage />} />
              <Route path="/kickboxing" element={<KickboxingPage />} />
              <Route path="/personal-training" element={<PersonalTrainingPage />} />
              <Route
                path="/access-denied"
                element={<TemporaryPage title="Acceso Denegado" />}
              />

              {/* Ruta de redirección */}
              <Route path="/dashboard" element={<RoleRedirect />} />

              {/* Dashboards */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/client/dashboard" element={<ClientDashboard />} />

              {/* Ruta por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
