import { useCallback, useState, useEffect } from "react";
import localstorage from "util/localstorage";

const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const darkmode = localstorage("darkmode");
  const getInitialTheme = useCallback(() => {
    let theme = "light";
    let temp = darkmode.getItem();

    if (temp && typeof temp !== null) {
      theme = temp;
    }

    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    darkmode.setItem((prev: string) => (prev === "dark" ? "light" : "dark"));
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("darkmode", theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
