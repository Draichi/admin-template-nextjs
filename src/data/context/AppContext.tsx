import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  updateTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState<Theme>("dark");

  function updateTheme() {
    setTheme(theme === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        updateTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
