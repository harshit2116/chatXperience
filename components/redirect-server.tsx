"use client";

import { useEffect } from "react";

export const RedirectServer = () => {
  useEffect(() => {
    window.location.href =
      "https://chatxperience-production.up.railway.app/invite/43e7065f-d80f-482d-82af-075b8ed51e5e";
  }, []);

  return null;
};
