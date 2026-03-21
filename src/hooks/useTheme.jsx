import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const KEY = 'lp-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(KEY) || 'night');

  useEffect(() => {
    if (theme === 'day') {
      document.documentElement.setAttribute('data-theme', 'day');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'day' ? 'night' : 'day';
      if (next === 'day') localStorage.setItem(KEY, 'day');
      else localStorage.removeItem(KEY);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
