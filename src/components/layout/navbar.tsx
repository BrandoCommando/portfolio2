"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Work", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

function linkPillClass(active: boolean) {
  return cn(
    "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
    active
      ? "bg-muted text-foreground shadow-sm"
      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const syncHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (hash && links.some((l) => l.id === hash)) {
      setActiveId(hash);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/resume") {
      setActiveId("resume");
      return;
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    const sectionIds = links.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return () => window.removeEventListener("hashchange", syncHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id && sectionIds.includes(id as (typeof links)[number]["id"])) {
          setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-38% 0px -38% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
      },
    );

    for (const el of elements) observer.observe(el);

    const onScroll = () => {
      if (window.scrollY < 72 && !window.location.hash) {
        setActiveId(null);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname, syncHash]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <div className="pointer-events-auto w-max max-w-[calc(100vw-1.5rem)]">
        <nav className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 py-1.5 pl-2 pr-1.5 shadow-lg backdrop-blur-xl sm:gap-2 sm:pl-3">
          <a
            href="#"
            className="shrink-0 whitespace-nowrap pl-1 font-mono text-[11px] font-bold tracking-wide sm:text-xs"
          >
            <span className="gradient-text">brandonbowles</span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkPillClass(activeId === link.id)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume"
              rel="noopener noreferrer"
              className={linkPillClass(activeId === "resume")}
            >
              Résumé
            </a>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-0.5 md:ml-0">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1.5 overflow-hidden rounded-2xl border border-border/60 bg-background/90 shadow-lg backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-0.5 p-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(linkPillClass(activeId === link.id), "px-3 py-1.5")}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={cn(linkPillClass(activeId === "resume"), "px-3 py-1.5")}
                >
                  Résumé
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
