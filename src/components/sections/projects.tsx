"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

// Safe projects data - define directly if import fails
const fallbackProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard",
    image: "/placeholder.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/partharajsarker/market-place",
    liveUrl: "https://market-place-seven-amber.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features",
    image: "/placeholder.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Responsive weather application with location-based forecasts and interactive maps",
    image: "/placeholder.jpg",
    tags: ["React", "OpenWeather API", "Charts.js", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  const projects = fallbackProjects;

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video relative bg-gray-200">
                    {/* Placeholder for image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      {project.title}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>Code</span>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <p>No projects found</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
