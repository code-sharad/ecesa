"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Cpu, Lightbulb, Target, Users,  Book, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technical Excellence",
      description:
        "Fostering innovation and technical expertise in electronics and computer engineering.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Hub",
      description:
        "Creating an environment that encourages creative thinking and problem-solving.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Growth",
      description:
        "Providing opportunities for skill development and industry exposure.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Building",
      description:
        "Building a strong network of passionate students and industry professionals.",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Learning Resources",
      description:
        "Access to workshops, tutorials, and resources to enhance learning.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Hackathons & Competitions",
      description: "Participate in hackathons and competitions to showcase your skills and win exciting prizes."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/circuit-pattern.svg')] bg-repeat"></div>

      {/* Glowing orbs resembling electrical nodes */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
            About ECESA
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-center leading-relaxed">
            Empowering students to become future innovators in electronics and
            computer engineering through hands-on learning, industry
            connections, and collaborative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="max-w-[400px]">
              <Card className="p-6 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300 h-full">
                <div className="text-orange-500 p-3 bg-orange-500/10 rounded-xl inline-flex mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-orange-100">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 mb-16 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10 text-orange-200">
              Our Vision
            </h3>

            <p className="text-zinc-300 mb-6 leading-relaxed relative z-10">
              ECESA aims to bridge the gap between academic learning and industry requirements by creating
              a vibrant community where innovation thrives. We believe in preparing students not just with technical
              skills, but with the mindset and network needed to excel in the rapidly evolving field of electronics
              and computer engineering.
            </p>

            <div className="flex flex-wrap gap-3 relative z-10">
              <div className="px-4 py-2 bg-orange-500/10 rounded-full text-orange-400 text-sm font-medium">
                Student-Driven
              </div>
              <div className="px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium">
                Industry-Connected
              </div>
              <div className="px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 text-sm font-medium">
                Innovation-Focused
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
            Learn More About Our Vision
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;