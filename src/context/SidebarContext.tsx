"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedState = localStorage.getItem("sidebarOpen");
    if (savedState !== null) {
      setIsOpen(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
    }
  }, [isOpen, mounted]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
