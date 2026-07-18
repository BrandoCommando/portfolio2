import { SocialIcon } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { socials } from "@/data/socials";
import { Fragment } from "react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/25 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Brandon Bowles. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <Fragment key={social.id}>
              {index > 0 && (
                <Separator orientation="vertical" className="h-4" />
              )}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
