"use client";

import { useEffect } from "react";

export const RedirectServer = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3000/invite/e9314f37-e131-4f93-b83f-0939fff2507f";
  }, []);

  return null;
};