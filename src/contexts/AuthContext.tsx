import { createContext, useEffect, useState, ReactNode } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { AuthState, User } from "../types";

export interface AuthContextType {
  authState: AuthState;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (
    email: string,
    password: string,
    userData: Partial<User>
  ) => Promise<{ error: Error | null; userId?: string }>;
  signOut: () => Promise<void>;
  isAdmin: () => boolean;
  loading: boolean;
}

// Define un tipo para los errores
type AuthError = Error | null;

// Exporta el contexto para que pueda ser importado por useAuth.ts
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    loading: false,
  });

  // Efecto para comprobar la sesión actual al cargar
  useEffect(() => {
    console.log("Auth context initialized");

    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(
        "Auth state changed:",
        event,
        session ? "session exists" : "no session"
      );

      if (session) {
        // Obtener datos del usuario
        await fetchUserData(session);
      } else {
        setAuthState({
          user: null,
          session: null,
          loading: false,
        });
      }
    });
  }, []);

  // Función para obtener los datos del usuario desde la tabla personalizada
  const fetchUserData = async (session: Session) => {
    try {
      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }

      // Si se encontraron datos del usuario, los guardamos en el estado
      if (userData) {
        setAuthState({
          user: {
            id: userData.id,
            email: session.user.email || "",
            name: userData.name || "",
            lastName: userData.last_name || "",
            phone: userData.phone || "",
            dni: userData.dni || "",
            isAdmin: userData.is_admin || false, // Cambiado de role
            createdAt: userData.created_at || new Date().toISOString(),
          },
          session,
          loading: false,
        });
      } else {
        // Si no se encontraron datos, usamos los datos básicos de auth
        setAuthState({
          user: {
            id: session.user.id,
            email: session.user.email || "",
            name: "",
            lastName: "",
            phone: "",
            dni: "",
            isAdmin: false, // Por defecto, los usuarios no son admin
            createdAt: session.user.created_at || new Date().toISOString(),
          },
          session,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error in fetchUserData:", error);
      setAuthState({
        user: null,
        session: null,
        loading: false,
      });
    }
  };

  // Iniciar sesión
  const signIn = async (email: string, password: string) => {
    try {
      setAuthState((prevState) => ({ ...prevState, loading: true }));
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Verifica si data.user existe y actualiza el estado
      if (data && data.user) {
        console.log("User signed in:", data.user);

        // Asegúrate de obtener los datos del usuario después de iniciar sesión
        await fetchUserData(data.session);
      }

      return { error: null };
    } catch (error) {
      console.error("Error in signIn:", error);
      setAuthState((prevState) => ({ ...prevState, loading: false }));
      return { error: error as Error };
    }
  };

  // Registrar usuario
  const signUp = async (
    email: string,
    password: string,
    userData: Partial<User>
  ): Promise<{ error: AuthError; userId?: string }> => {
    try {
      setAuthState((prevState) => ({ ...prevState, loading: true }));
      // 1. Crear usuario en auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      if (!data.user) throw new Error("No user returned from signUp");

      const userId = data.user.id;

      // 2. Insertar datos adicionales en la tabla users
      const { error: profileError } = await supabase.from("users").insert({
        id: userId,
        email: email,
        name: userData.name || "",
        last_name: userData.lastName || "",
        phone: userData.phone || "",
        dni: userData.dni || "",
        is_admin: false, // Por defecto, los usuarios son clientes
        created_at: new Date().toISOString(),
      });

      if (profileError) throw profileError;

      // Asegúrate de obtener los datos del usuario después de registrarse
      if (data.session) {
        await fetchUserData(data.session);
      }

      return { error: null, userId };
    } catch (error) {
      console.error("Error in signUp:", error);
      setAuthState((prevState) => ({ ...prevState, loading: false }));
      return { error: error as Error };
    }
  };

  // Cerrar sesión
  const signOut = async (): Promise<void> => {
    try {
      setAuthState((prevState) => ({ ...prevState, loading: true }));
      await supabase.auth.signOut();
      setAuthState({
        user: null,
        session: null,
        loading: false,
      });
    } catch (error) {
      console.error("Error in signOut:", error);
      setAuthState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  // Comprobar si el usuario es administrador
  const isAdmin = (): boolean => {
    return !!authState.user?.isAdmin;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signUp,
        signOut,
        isAdmin,
        loading: authState.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
