"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("11f5d6b9-1d3e-4403-99e6-de076f7eb965");
  }, []);

  return null;
};
