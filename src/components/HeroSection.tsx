
// import { Workshop } from "@/types";
// import UpcomingEventSkeleton from "@/components/skeleton/UpcomingEvent";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { Zap } from "lucide-react";
// import { motion } from "framer-motion";
import UpcomingEventCard from "./events/UpcomingEventCard";





export default function HeroSection() {


    return (
        <section className={`relative min-h-[90vh]  px-4 sm:px-6 lg:px-8 bg-${colors.background.primary} text-${colors.text.primary} overflow-hidden  sm:py-16 lg:py-20 flex flex-col gap-12   md:items-center`}>
            <div className="w-full mt-0 lg:mt-32">
                
                <div className="container mx-auto relative z-10">
                    <div

                        className="text-center max-w-[85vw]  sm:max-w-2xl lg:max-w-4xl mx-auto"
                    >
                        

                        <div

                            className="relative "
                        >
                            
                            <div
                                className={`absolute -inset-4 bg-${colors.background.glow.orange} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}

                            />
                            
                            <div className={`relative group  `}>
                                {/* Circuit Lines */}
                                {/* <div
                                    className={`absolute -inset-24 -inset-y-32 border border-orange-500/10 rounded-lg `}

                                >
                                    <div
                                        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-400"

                                    />
                                    <div
                                        className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-400"

                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-400"

                                    />
                                    <div
                                        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-400"

                                    />
                                </div> */}

                                

                                <div
                                    className="absolute -inset-1  to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"

                                />
                                <div>
                                    <div className="relative z-50 mt-8 mx-auto">
                                        <div className="flex justify-center mb-9 mt-32 md:mt-0 ">
                                            <div
                                                className="relative">

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
                                                <div
                                                    className="absolute inset-0 blur-md z-0"

                                                >
                                                    <Zap
                                                        className="w-32 h-32"
                                                        fill="none"
                                                        stroke="rgba(249, 115, 22, 0.6)"
                                                        strokeWidth={3}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="relative mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                            <span
                                                className={`inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-orange-200 to-orange-500`}

                                            >
                                                <span className="text-[64px] font-mono uppercase sm:text-4xl md:text-6xl lg:text-7xl">ECESA</span>
                                            </span>

                                            <br />

                                            <span
                                                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-100"

                                            >
                                                <span className="text-xl font-mono uppercase tracking-wider leading-0.5">Electronics & Computer Engineering Student Association</span>
                                            </span>
                                        </h1>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div
                            className="flex flex-col sm:flex-row mt-36 items-center justify-center gap-3 sm:gap-4 relative"

                        >

                            <Button asChild className={`px-8 py-6 group relative -inset-2.5 shadow-inner overflow-hidden bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-400 hover:to-orange-500 text-white border-none  shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300`} >
                                <Link href="/contact" >

                                    <ShinyButton >
                                        Join Now
                                    </ShinyButton>

                                    <div
                                        className="absolute -inset-1 rounded-xl blur-sm opacity-70 bg-orange-500/30 scale-0 group-hover:scale-100 transition-all duration-300"
                                    />
                                </Link>
                            </Button>


                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div
                        className="absolute left-[calc(50%-11rem)] top-1/2 -translate-y-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500/20 to-orange-600/20 opacity-30 blur-3xl sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"

                    />
                    <div
                        className="absolute right-[calc(50%-11rem)] top-1/2 -translate-y-1/2 aspect-[1155/678] w-[36.125rem] translate-x-1/2 -rotate-[30deg] bg-gradient-to-tr from-orange-600/20 to-orange-500/20 opacity-30 blur-3xl sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"

                    />
                </div>

                {/* Circuit pattern background */}
                <div className="absolute inset-0 -z-10 opacity-5">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"

                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

            </div>
            <div className="max-w-[1200px] mx-auto">
                <UpcomingEventCard />
            </div>
            {/* <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col justify-center items-center mt-18  ">

                {upcoming_event.length !== 0 ? (

                    <Suspense fallback={<UpcomingEventSkeleton />}>
                        <UpcomingEvent upcoming_event={upcoming_event} />
                    </Suspense>
                ) : ""}
            </motion.div> */}
        </section>
    );
}