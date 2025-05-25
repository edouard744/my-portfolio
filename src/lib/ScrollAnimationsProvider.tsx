"use client";
import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/scrollAnimation";

export default function ScrollAnimationsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return <>{children}</>;
}