"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeDisplay = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="ml-2">Loading theme...</div>;
  }

  return (
    <div className="ml-2 text-l" onClick={toggleTheme}>
      {theme
        ? theme.charAt(0).toUpperCase() + theme.slice(1) + " Theme"
        : "System Theme"}
    </div>
  );
};
