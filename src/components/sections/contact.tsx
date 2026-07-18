"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { SocialIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="// contact"
          title="Let's Build Something"
          description="If you need help with Shopify, headless commerce, or modernization work, let’s connect."
        />

        <FadeIn>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="mb-8 space-y-4">
                <a
                  href="mailto:brandonbowles@gmail.com"
                  className="group inline-flex items-center gap-2 text-lg font-mono text-primary transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  BrandonBowles@gmail.com
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="flex justify-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    <SocialIcon name={social.icon} className="mr-2 h-4 w-4" />
                    {social.name}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
