"use client";

import { useEffect } from "react";

export const RedirectServer = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3000/dashboard";
  }, []);

  return null;
};