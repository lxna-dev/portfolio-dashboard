"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
