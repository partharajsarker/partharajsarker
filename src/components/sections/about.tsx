"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Smartphone } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "laravel", "PostgreSQL", "MongoDB", "MySQL"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            I am a diploma engineer in computer technology experienced in web
            development across WordPress, Laravel, React, Next.js, and Node.js.
            I build everything from fast WordPress sites and secure Laravel apps
            to modern React projects, always keeping code clean and users happy.
            I enjoy learning new tools and taking on jobs that solve real
            problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
