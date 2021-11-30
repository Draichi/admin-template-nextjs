import { createContext, useState, useEffect } from "react";

// type Theme = "dark" | "";

interface AppContextProps {
  theme?: string;
  updateTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setTheme(savedTheme)
  }, [])

  function updateTheme() {
    const newTheme = theme === "" ? "dark" : ""
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
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
