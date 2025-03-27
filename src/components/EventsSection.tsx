"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const EventsSection = () => {
  const events = [
    {
      title: "Annual Tech Fest 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "College Auditorium",
      description:
        "Our flagship event featuring workshops, competitions, and industry expert talks.",
      category: "Major Event",
    },
    {
      title: "Arduino Workshop",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Lab 101",
      description:
        "Learn the basics of Arduino programming and build your first project.",
      category: "Workshop",
    },
    {
      title: "Project Showcase",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Hub",
      description:
        "Showcase your innovative projects and get feedback from industry experts.",
      category: "Showcase",
    },
    {
      title: "Hackathon 2024",
      date: "April 15-16, 2024",
      time: "24 Hours",
      location: "Computer Center",
      description:
        "Build innovative solutions in this 24-hour coding marathon.",
      category: "Competition",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-black to-orange-900/80 relative px-4 sm:px-6 lg:px-8">
      <div className="tech-gradient absolute inset-0 opacity-10" />

      {/* Updated glowing orbs with darker colors */}
      <div className="absolute hidden sm:block top-20 left-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute hidden sm:block bottom-40 right-10 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-orange-500/5 blur-3xl"></div>
      <div className="absolute hidden sm:block top-1/2 left-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="text-orange-400 text-sm my-4 px-4 bg-orange-950/50 border-orange-500/20">
            Upcoming & Past
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Technical Events
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Join us for exciting workshops, competitions, and networking opportunities.
          </p>
        </div>
        <Card className="mb-12 border-none bg-gradient-to-r from-black/80 to-zinc-900/80 p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-sm shadow-2xl shadow-orange-900/30 rounded-2xl">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-orange-600/5 rounded-2xl blur-sm opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5 flex-shrink-0 mb-6 md:mb-0">
              <div className="relative rounded-xl overflow-hidden h-64 md:h-full group transform transition-all duration-500 hover:scale-[1.02] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D"
                  alt="AI Workshop"
                  width={3000}
                  height={2000}
                  className=" object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute  inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-orange-500/80 text-white hover:bg-orange-500 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                    Featured Event
                  </Badge>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 md:my-12 flex flex-col md:gap-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight bg-clip-text  bg-gradient-to-r from-orange-300 to-orange-100">
                GenAI Workshop
              </h3>
              <div className="flex flex-wrap gap-4 lg:gap-8 text-sm sm:text-base text-zinc-200 mb-6">
                <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                  <span className="text-orange-400">📅</span> May 10, 2024
                </div>
                <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                  <span className="text-orange-400">⏰</span> 2:00 PM - 5:00 PM
                </div>
                <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                  <span className="text-orange-400">📍</span> Innovation Lab 202
                </div>
              </div>
              <p className="text-zinc-300 mb-8 text-base sm:text-lg max-w-3xl leading-relaxed">
                Dive into the world of AI with hands-on sessions on machine learning models, neural networks, and practical applications. Limited seats available!
              </p>
              <Button className="relative cursor-pointer group w-fit overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-none px-8 py-6 text-base font-medium transition-all duration-300 shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 hover:scale-105">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center gap-2 ">Register Now <span className="ml-1 group-hover:translate-x-1 transition-all duration-300"> <ArrowRight className="w-8 h-8" /></span></span>
              </Button>
            </div>
          </div>
        </Card>

        <div className="max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative border border-orange-500/10 bg-black/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full rounded-xl p-4 sm:p-5 lg:p-6">
                <span className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-orange-950/50 text-orange-300 mb-2 sm:mb-3">
                  {event.category}
                </span>
                <h3 className="text-base text-orange-200 sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-4">
                  {event.description}
                </p>
                <Button className="text-sm sm:text-base text-orange-400 hover:text-orange-300 hover:bg-orange-950/50">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <motion.div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Button
            className="bg-black hover:bg-zinc-900 text-orange-300 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            asChild
          >
            <a href="/events">View All Events</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
