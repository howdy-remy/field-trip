import { ReactNode, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { createContext } from "react";
const supabaseUrl = "https://tmglwtybylbbayxcuwyx.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseKey);

type SupabaseContextValues = {
  supabase: any;
};

// create context --------------------------------------------------------------
export const SupabaseContext = createContext<SupabaseContextValues | undefined>(
  undefined
);

// context provider ------------------------------------------------------------
export const SupabaseContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
};

// use context hook ------------------------------------------------------------
export const useSupabaseContext = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error(
      "`useSupabaseContext` must be used withing a `SupabaseContextProvider`"
    );
  }
  return context;
};
