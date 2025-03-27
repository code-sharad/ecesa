"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import { colors } from "@/constants/colors";
import { HyperText } from "@/components/magicui/hyper-text";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import Footer from "@/components/Footer";
// import { DockNav } from "@/components/docknav";

// Hero Section Component
function HeroSection() {

  return (
    <section className={`relative min-h-[90vh]  px-4 sm:px-6 lg:px-8 bg-${colors.background.primary} text-${colors.text.primary} overflow-hidden py-12 sm:py-16 lg:py-20 flex  md:items-center`}>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-[85vw] sm:max-w-2xl lg:max-w-4xl mx-auto"
        >
          {/* Circuit Lines Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative mt-18 md:mt-0"
          >
            <Badge
              variant="outline"
              className="flex justify-center items-center gap-4 mx-auto w-fit mb-8 px-4 py-1 text-base relative group hover:border-accent transition-colors duration-300 border-orange-400/20 bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent"
            >
              <span className="text-muted-foreground group-hover:text-accent transition-colors duration-300 ">
                Welcome to ECESA
              </span>
              <span className="fill-none text-black">🎉</span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-orange-400/30 to-orange-600/40 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </Badge>
          </motion.div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >

            </motion.div>
          </div>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative "
          >
            <motion.div
              className={`absolute -inset-4 bg-${colors.background.glow.orange} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative group  ">
              {/* Circuit Lines */}
              <motion.div
                className="absolute  -inset-24 -inset-y-32 border border-orange-500/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-400"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-400"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-400"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-400"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>

              <motion.div
                className="absolute -inset-1  to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <LampContainer>
                <motion.div className="relative z-50 mt-8">
                  <h1 className="relative mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <motion.span
                      className={`inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-orange-200 to-orange-500`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <HyperText className="text-[64px] sm:text-4xl md:text-6xl lg:text-7xl">ECESA</HyperText>
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      <HyperText>Student Association</HyperText>
                    </motion.span>
                  </h1>
                </motion.div>
              </LampContainer>

              {/* Tech Icons with Animations */}
              <motion.div
                className="absolute -right-4 -top-4 group-hover:text-accent/30 text-orange-600/20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-24 h-24" />
              </motion.div>
              <motion.div
                className="absolute -left-4 -bottom-4 text-orange-500/20 transition-all duration-300 group-hover:text-orange-500/30"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <CircuitBoard className="w-24 h-24" />
              </motion.div>

              {/* Animated Zap Icons */}
              <motion.div
                className="absolute -top-5 -left-16 -translate-y-1/2 text-orange-500/20 rotate-[20deg]"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-16 h-16 fill-orange-400" />
              </motion.div>
              <motion.div
                className="absolute rotate-[25deg] -bottom-28 -right-8 -translate-y-1/2 text-orange-500/20"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Zap className="w-16 h-16" />
              </motion.div>
            </div>
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          <motion.p
            className={`mb-6 sm:mb-8 text-base sm:text-lg mt-12 lg:text-xl max-w-xl sm:max-w-2xl mx-auto text-${colors.text.secondary} relative group`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <span className="transition-colors duration-300 text-balance">
              Empowering students through technical workshops, projects, <br />
              and industry connections in electronics and computing.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row mt-24 items-center justify-center gap-3 sm:gap-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >

            <Link href="/contact" >
              <Button className={`px-8 group relative overflow-hidden bg-${colors.interactive.primary} hover:bg-${colors.interactive.hover} text-primary-foreground transition-all duration-300`}>
                <span className="relative z-10 transition-colors duration-300 text-black">
                  Join Us
                </span>
                <motion.div
                  className="absolute inset-0 bg-orange-600/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </Button>
            </Link>

            <Link href="/about" >
              <Button className="px-8 group border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300">
                <span className="relative z-10 transition-colors duration-300">
                  Explore Events
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-[calc(50%-11rem)] top-1/2 -translate-y-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500/20 to-orange-600/20 opacity-30 blur-3xl sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [30, 35, 30],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[calc(50%-11rem)] top-1/2 -translate-y-1/2 aspect-[1155/678] w-[36.125rem] translate-x-1/2 -rotate-[30deg] bg-gradient-to-tr from-orange-600/20 to-orange-500/20 opacity-30 blur-3xl sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-30, -35, -30],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Circuit pattern background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-orange-500/20 rounded-full p-1 group hover:border-orange-500/40 transition-colors duration-300">
          <motion.div
            className="w-1.5 h-1.5 bg-orange-500 rounded-full mx-auto group-hover:bg-orange-600 transition-colors duration-300"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      title: "Technical Workshops",
      description:
        "Hands-on learning sessions on electronics, programming, and emerging technologies.",
      icon: "🔧",
    },
    {
      title: "Project Showcases",
      description:
        "Platform to showcase your innovative projects and get valuable feedback.",
      icon: "💡",
    },
    {
      title: "Industry Connect",
      description:
        "Networking opportunities with industry professionals and tech companies.",
      icon: "🤝",
    },
    {
      title: "Competitions",
      description:
        "Participate in technical competitions and hackathons to test your skills.",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Badge className="text-orange-600 text-sm  my-4 px-4 bg-orange-100 ">What We Offer</Badge>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-orange-100">
            Opportunities
          </h2>
          <p className="text-orange-200/70">
            Comprehensive solutions for a sustainable future
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:scale-[102%]  bg-zinc-900/80 border-orange-300/20 transition-all duration-300 group hover:shadow-sm hover:shadow-orange-800/50">
                <motion.div
                  className="mb-4 text-4xl transform transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ rotate: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-orange-100 transition-colors duration-300 ">
                  {feature.title}
                </h3>
                <p className="text-orange-100 transition-colors duration-300 ">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Main Landing Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <DockNav /> */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <EventsSection />
      {/* <ProjectsSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
