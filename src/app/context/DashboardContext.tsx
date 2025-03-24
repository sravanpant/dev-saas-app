// src/context/DashboardContext.tsx
"use client";

import React, { 
  createContext, 
  useContext, 
  useState, 
  ReactNode 
} from "react";

// Define the shape of the context
type DashboardContextType = {
  selectedApplications: string[];
  setSelectedApplications: React.Dispatch<React.SetStateAction<string[]>>;
  // Add more shared state as needed
};

// Create the context
const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// Provider component
export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);

  return (
    <DashboardContext.Provider 
      value={{ 
        selectedApplications, 
        setSelectedApplications 
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the dashboard context
export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  
  if (context === undefined) {
    throw new Error("useDashboardContext must be used within a DashboardProvider");
  }
  
  return context;
};