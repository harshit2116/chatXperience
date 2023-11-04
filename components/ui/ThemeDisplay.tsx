"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeDisplay = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="ml-2">Loading theme...</div>;
  }

  return (
    <div className="ml-2">
      {theme ? theme.charAt(0).toUpperCase() + theme.slice(1) + " Theme" : 'System Theme'}
    </div>
  );
};