// src/types/index.ts
import { Session } from "@supabase/supabase-js";

export enum UserRole {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
}

export interface User {
  id: string;
  email: string;
  name: string;
  lastName: string;
  phone: string;
  dni: string;
  isAdmin: boolean; // Cambiado de role: boolean
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}
