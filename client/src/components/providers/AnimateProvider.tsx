'use client';

import { AnimatePresence } from "framer-motion";

interface AnimateProviderProps {
  children: React.ReactNode;
}

export default function AnimateProvider({ children }: AnimateProviderProps) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
