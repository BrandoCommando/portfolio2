"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Eye,
  Code,
  Workflow,
  ImageIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Eye,
  Code,
  Workflow,
  Image: ImageIcon,
};

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// projects"
          title="What I've Built"
          description="A selection of commerce and product engineering work."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] ?? Code;
            return (
              <motion.div key={project.title} variants={staggerItem}>
                <Card className="group relative h-full overflow-hidden transition-all duration-300 glass-hover-lift">
                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <CardContent className="relative p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="glass-chip flex h-10 w-10 items-center justify-center rounded-xl">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
