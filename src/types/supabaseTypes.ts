// src/types/supabase.ts
export type Database = {
    public: {
      Tables: {
        users: {
          Row: {
            id: string;
            email: string;
            name: string | null;
            last_name: string | null;
            phone: string | null;
            dni: string | null;
            is_admin: boolean;
            created_at: string;
          };
          Insert: {
            id: string;
            email: string;
            name?: string | null;
            last_name?: string | null;
            phone?: string | null;
            dni?: string | null;
            is_admin: boolean;
            created_at?: string;
          };
          Update: {
            id?: string;
            email?: string;
            name?: string | null;
            last_name?: string | null;
            phone?: string | null;
            dni?: string | null;
            is_admin: boolean;
            created_at?: string;
          };
        };
      };
    };
  };