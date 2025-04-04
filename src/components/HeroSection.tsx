
import Image from "next/image";
import { RegisterDialog } from "@/components/RegisterDialog";
import { Workshop } from "@/types";
import UpcomingEventSkeleton from "@/components/skeleton/UpcomingEvent";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { HyperText } from "@/components/magicui/hyper-text";
import { Cpu, CircuitBoard, Zap, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";


export default function HeroSection() {

    const [showRegisterDialog, setShowRegisterDialog] = useState(false);
    const [upcoming_event, setUpcomingEvent] = useState<Workshop[]>([]);
    const [windowsWidth, setWindowWidth] = useState<number>(0);
    const fethUpcomingEvent = async () => {
        const res = await fetch("/api/workshop", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setUpcomingEvent(data)
        console.log(data);
    };
    useEffect(() => {
        fethUpcomingEvent()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        console.log(window.innerWidth);

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial width

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <section className={`relative min-h-[90vh]  px-4 sm:px-6 lg:px-8 bg-${colors.background.primary} text-${colors.text.primary} overflow-hidden  sm:py-16 lg:py-20 flex flex-col gap-12   md:items-center`}>
            <div className="w-full mt-0 lg:mt-32">
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-[85vw]  sm:max-w-2xl lg:max-w-4xl mx-auto"
                    >

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="relative "
                        >
                            <motion.div
                                className={`absolute -inset-4 bg-${colors.background.glow.orange} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, ease: "easeInOut" }}
                            />
                            <div className={`relative group  `}>
                                {/* Circuit Lines */}
                                <motion.div
                                    className={`absolute -inset-24 -inset-y-32 border border-orange-500/10 rounded-lg  ${windowsWidth > 600 ? 'visible' : ' border-none'} `}
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
                                <div>
                                    <motion.div className="relative z-50 mt-8 mx-auto">
                                        <div className="flex justify-center mb-9 mt-32 md:mt-0 ">
                                            <motion.div
                                                className="relative"
                                                initial={{ opacity: 0.2 }}
                                                animate={{
                                                    opacity: [0.5, 1, 0.5],
                                                    scale: [0.95, 1.05, 0.95],
                                                    rotate: [0, 5, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                {/* Multiple glow layers for depth */}
                                                <motion.div
                                                    className="absolute inset-0 blur-3xl opacity-30"
                                                    animate={{
                                                        scale: [0.8, 1.2, 0.8]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <Zap className="w-32 h-32" fill="url(#zapGradient)" />
                                                </motion.div>

                                                {/* High voltage lines */}
                                                <motion.div
                                                    className="absolute inset-0 z-20"
                                                    initial={{ opacity: 0.7 }}
                                                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    {/* Falling star 1 - diagonal top-left to bottom-right */}
                                                    <motion.div
                                                        className="absolute top-[-20px] left-[-20px] w-20 h-[2px] bg-gradient-to-br from-orange-200 to-transparent rotate-45"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{
                                                            x: [0, 60],
                                                            y: [0, 60],
                                                            opacity: [0, 1, 0],
                                                            scale: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 1.2
                                                        }}
                                                    />

                                                    {/* Falling star 2 - diagonal top-right to bottom-left */}
                                                    <motion.div
                                                        className="absolute top-[-20px] right-[-20px] w-20 h-[2px] bg-gradient-to-br from-orange-200 to-transparent rotate-45"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{
                                                            x: [-60, 0],
                                                            y: [0, 60],
                                                            opacity: [0, 1, 0],
                                                            scale: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 0.8,
                                                            delay: 0.5
                                                        }}
                                                    />

                                                    {/* Falling star 3 - vertical top to bottom */}
                                                    <motion.div
                                                        className="absolute top-[-20px] left-[50%] w-[2px] h-20 bg-gradient-to-b from-orange-200 to-transparent"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{
                                                            y: [0, 60],
                                                            opacity: [0, 1, 0],
                                                            scale: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 1.2,
                                                            repeat: Infinity,
                                                            repeatDelay: 1.5,
                                                            delay: 1
                                                        }}
                                                    />

                                                    {/* Trailing particles for star 1 */}
                                                    <motion.div
                                                        className="absolute top-[-15px] left-[-15px] w-2 h-2 rounded-full bg-orange-300"
                                                        animate={{
                                                            x: [0, 55],
                                                            y: [0, 55],
                                                            opacity: [0, 0.8, 0],
                                                            scale: [0.5, 0.2, 0]
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 1.2
                                                        }}
                                                    />

                                                    {/* Trailing particles for star 2 */}
                                                    <motion.div
                                                        className="absolute top-[-15px] right-[-15px] w-2 h-2 rounded-full bg-orange-300"
                                                        animate={{
                                                            x: [-55, 0],
                                                            y: [0, 55],
                                                            opacity: [0, 0.8, 0],
                                                            scale: [0.5, 0.2, 0]
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 0.8,
                                                            delay: 0.5
                                                        }}
                                                    />

                                                    {/* Small twinkling stars around the icon */}
                                                    <motion.div
                                                        className="absolute left-[10%] top-[20%] w-1 h-1 rounded-full bg-orange-200"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                                    />
                                                    <motion.div
                                                        className="absolute right-[10%] bottom-[20%] w-1 h-1 rounded-full bg-orange-200"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                                                    />
                                                </motion.div>

                                                <svg width="0" height="0">
                                                    <defs>
                                                        <linearGradient id="zapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="0%" stopColor="#f97316" />
                                                            <stop offset="50%" stopColor="#ea580c" />
                                                            <stop offset="100%" stopColor="#c2410c" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>

                                                <Zap
                                                    className="w-32 h-32 relative z-10"
                                                    fill="url(#zapGradient)"
                                                    stroke="#ffa066"
                                                    strokeWidth={1.5}
                                                />

                                                {/* Flickering glow effect */}
                                                <motion.div
                                                    className="absolute inset-0 blur-md z-0"
                                                    animate={{
                                                        opacity: [0.2, 0.6, 0.2],
                                                        scale: [0.9, 1.1, 0.9]
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        repeat: Infinity,
                                                        repeatType: "reverse"
                                                    }}
                                                >
                                                    <Zap
                                                        className="w-32 h-32"
                                                        fill="none"
                                                        stroke="rgba(249, 115, 22, 0.6)"
                                                        strokeWidth={3}
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </div>
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
                                                <span className="text-xl font-mono">Electronics & Computer Engineering Student Association</span>
                                            </motion.span>
                                        </h1>
                                    </motion.div>
                                </div>

                                {/* Tech Icons with Animations */}
                                <motion.div
                                    className="absolute -right-4 -top-4 group-hover:text-accent/30 text-orange-600/20"
                                    animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Cpu className="w-24 h-24" />
                                </motion.div>
                                <motion.div
                                    className="absolute -left-4 -bottom-4 text-orange-500/20 transition-all duration-300 group-hover:text-orange-500/30"
                                    animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
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

                        </motion.div>

                        {/* <motion.p
              className={`mb-6 sm:mb-8 text-base sm:text-lg mt-24 lg:mt-12 lg:text-xl max-w-xl sm:max-w-2xl mx-auto text-${colors.text.secondary} relative group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <span className="transition-colors duration-300 text-balance ">
                Empowering students through technical workshops, projects, <br />
                and industry connections in electronics and computing.
              </span>
            </motion.p> */}

                        <motion.div
                            className="flex flex-col sm:flex-row mt-12 items-center justify-center gap-3 sm:gap-4 relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                        >

                            <Button asChild className={`px-8 py-6 group relative -inset-2.5 shadow-inner overflow-hidden bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-500 text-white border-none  shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300`} >
                                <Link href="/contact" >

                                    <ShinyButton >
                                        Join Now
                                    </ShinyButton>

                                    <motion.div
                                        className="absolute -inset-1 rounded-xl blur-sm opacity-70 bg-orange-500/30 scale-0 group-hover:scale-100 transition-all duration-300"
                                    />
                                </Link>
                            </Button>

                            {/* <Link href="/about" >
                <Button className="px-8 group border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300">
                  <span className="relative z-10 transition-colors duration-300">
                    Explore Events
                  </span>
                </Button>
              </Link> */}
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

            </div>
            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col justify-center items-center mt-18  ">
                <Badge className="w-fit  text-orange-400 text-sm mt-24 mb-8 px-4 bg-orange-950/50 border-orange-500/20">
                    Upcoming Event
                </Badge>
                {
                    upcoming_event.length !== 0 ? (
                        upcoming_event.length > 0 && (
                            <Card className="mb-12 max-w-[1200px] border-zinc-900 bg-gradient-to-r from-black/80 to-zinc-900/80 p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-sm shadow-2xl shadow-orange-900/30 rounded-2xl">
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
                                            {upcoming_event[0].name}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 lg:gap-8 text-sm sm:text-base text-zinc-200 mb-6">
                                            <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                <span className="text-orange-400">📅</span> {upcoming_event[0].date}
                                            </div>
                                            <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                <span className="text-orange-400">⏰</span> {upcoming_event[0].time}
                                            </div>
                                            <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                <span className="text-orange-400">📍</span> {upcoming_event[0].location}
                                            </div>
                                        </div>
                                        <p className="text-zinc-300 mb-8 text-base sm:text-lg max-w-3xl leading-relaxed">
                                            {upcoming_event[0].description}
                                        </p>
                                        <Button onClick={() => setShowRegisterDialog(true)} className="relative cursor-pointer group w-fit overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-none px-8 py-6 text-base font-medium transition-all duration-300 shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 hover:scale-105">
                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                            <span className="relative flex items-center gap-2 ">Register Now <span className="ml-1 group-hover:translate-x-1 transition-all duration-300"> <ArrowRight className="w-8 h-8" /></span></span>
                                            <RegisterDialog
                                                workshop_id={upcoming_event[0].id || ''}
                                                open={showRegisterDialog}
                                                showDialog={setShowRegisterDialog}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        )
                    ) : <UpcomingEventSkeleton />
                }
            </motion.div>
        </section>
    );
}