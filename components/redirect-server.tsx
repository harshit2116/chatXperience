"use client";

import { useEffect } from "react";

export const RedirectServer = () => {
  useEffect(() => {
    window.location.href =
      "https://chatxperience-production.up.railway.app/invite/5415af12-10c6-4e5b-88bb-7a548f2f66cc";
  }, []);

  return null;
};
