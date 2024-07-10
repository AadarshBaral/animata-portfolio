import  { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export interface AppContextType {
  aboutActive: boolean;
  setAboutActive: Dispatch<SetStateAction<boolean>>;
  projectsActive: boolean;
  setProjectsActive: Dispatch<SetStateAction<boolean>>;
}

const initialAppContext: AppContextType = {
  aboutActive: false,
  setAboutActive: () => {}, // Placeholder function
  projectsActive: false,
  setProjectsActive: () => {}, // Placeholder function
};

export const AppContext = createContext<AppContextType>(initialAppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [aboutActive, setAboutActive] = useState(initialAppContext.aboutActive);
  const [projectsActive, setProjectsActive] = useState(initialAppContext.projectsActive);

  const contextValue: AppContextType = {
    aboutActive,
    setAboutActive,
    projectsActive,
    setProjectsActive,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
