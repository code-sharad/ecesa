"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
// import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";

import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import HeroSection from "@/components/HeroSection";

// import { DockNav } from "@/components/docknav";


// Hero Section Component


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
    <main className="min-h-screen !transform-gpu">
      {/* <DockNav /> */}
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      {/* <AboutSection /> */}
      <EventsSection />
      {/* <ProjectsSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
