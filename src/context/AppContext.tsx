"use client"
import React, { useState, useContext, createContext } from 'react';

type AppState = {
  selectedCuisines: string[];
  setSelectedCuisines: React.Dispatch<React.SetStateAction<string[]>>,
  
};

type AppContextType = {
  state: AppState,
}

const AppContext = createContext<AppState>({ selectedCuisines: [], setSelectedCuisines: () => { } });

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

  return (
    <AppContext.Provider value={{ selectedCuisines, setSelectedCuisines }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
