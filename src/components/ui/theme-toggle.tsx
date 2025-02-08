import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/theme-provider";
import { cn } from "../../lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black" />
      )}
    </button>
  );
} 