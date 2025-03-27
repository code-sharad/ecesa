"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Wifi } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Home Automation",
      description:
        "An IoT-based home automation system using Arduino and mobile app control.",
      category: "IoT",
      icon: <Wifi className="w-6 h-6" />,
      technologies: ["Arduino", "React Native", "Node.js"],
    },
    {
      title: "AI Image Recognition",
      description:
        "Deep learning model for real-time object detection using TensorFlow.",
      category: "AI/ML",
      icon: <Cpu className="w-6 h-6" />,
      technologies: ["Python", "TensorFlow", "OpenCV"],
    },
    {
      title: "Web Development",
      description:
        "Full-stack web application for project management and collaboration.",
      category: "Web Dev",
      icon: <Code className="w-6 h-6" />,
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="circuit-pattern absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent mb-4">
            Student Projects
          </h2>
          <p className="text-muted-foreground">
            Explore innovative projects created by our talented students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project,i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-accent/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary group-hover:text-accent transition-colors duration-300">
                  {project.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {project.category}
                </span>
              </div>
              <h3 className="text-card-foreground font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech,i) => (
                  <span key={i} className="px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <Button className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300">
                View Project
              </Button>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
            asChild
          >
            <a href="/projects">View All Projects</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
