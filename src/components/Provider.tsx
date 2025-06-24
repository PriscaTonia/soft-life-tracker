"use client";

import { useThemeStore } from "@/store/useThemeStore";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Apply theme on initial mount
    const stored = localStorage.getItem("theme") as "light" | "dark";
    if (stored) {
      setTheme(stored);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>; // this passes the app content through
};

export default Provider;
