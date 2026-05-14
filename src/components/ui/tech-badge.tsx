import { Badge } from "@/components/ui/badge";

export function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="border-border/40 bg-secondary/40 font-mono text-xs backdrop-blur-md"
    >
      {children}
    </Badge>
  );
}
