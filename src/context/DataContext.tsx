import { createContext, useContext } from "react";
import { DataContextType } from "../types/DataContextTypes";

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export function useDataContext() {
  const dataApi = useContext(DataContext);

  if (dataApi === undefined) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }

  return dataApi;
}
