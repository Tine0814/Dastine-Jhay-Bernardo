import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme as "light" | "dark";

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const [mode, setMode] = useState<"light" | "dark">(getInitialTheme);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    console.log(`Toggling theme to ${newMode}`);
    setMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
    }
  };

  useEffect(() => {
    const isDark = mode === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    console.log("HTML classes:", document.documentElement.className);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
