"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

function clientMounted() {
  return typeof window !== "undefined";
}

const trackClass =
  "relative box-border flex h-8 w-14 shrink-0 items-stretch rounded-full glass-pill p-1";

const thumbClass =
  "pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-background/85 shadow-md ring-1 ring-black/5 backdrop-blur-md transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] dark:ring-white/10";

const iconBtnClass =
  "relative z-10 flex flex-1 cursor-pointer items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    clientMounted,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div
        className={cn(trackClass, "pointer-events-none opacity-40")}
        aria-hidden
      >
        <span className={cn(thumbClass, "translate-x-0")} />
        <span className={iconBtnClass}>
          <Sun className="h-4 w-4 text-muted-foreground" />
        </span>
        <span className={iconBtnClass}>
          <Moon className="h-4 w-4 text-muted-foreground" />
        </span>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={trackClass}
      role="group"
      aria-label="Color theme"
    >
      <span
        className={cn(thumbClass, isDark && "translate-x-full")}
        aria-hidden
      />
      <button
        type="button"
        className={cn(
          iconBtnClass,
          !isDark ? "text-foreground" : "text-muted-foreground"
        )}
        aria-pressed={!isDark}
        aria-label="Use light theme"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        className={cn(
          iconBtnClass,
          isDark ? "text-foreground" : "text-muted-foreground"
        )}
        aria-pressed={isDark}
        aria-label="Use dark theme"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
