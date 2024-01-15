import React, { useState, createContext, useContext, ReactNode } from "react";
import cicLogo from "../assets/images/cicLogo.png";

interface AppConfig {
  name: string;
  image: string;
}

interface AppConfigContextValue {
  config: AppConfig;
  setConfig: React.Dispatch<React.SetStateAction<AppConfig>>;
}

const AppConfigContext = createContext<AppConfigContextValue | undefined>(
  undefined
);

interface AppConfigProviderProps {
  children: ReactNode;
}

const AppConfigProvider: React.FC<AppConfigProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<AppConfig>({
    // initial config settings
    name: "UBC CG22",
    image: cicLogo,
  });

  return (
    <AppConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </AppConfigContext.Provider>
  );
};

const useAppConfig = (): AppConfigContextValue => {
  const context = useContext(AppConfigContext);
  if (!context) {
    throw new Error("useAppConfig must be used within a AppConfigProvider");
  }
  return context;
};

export { AppConfigProvider, useAppConfig };
