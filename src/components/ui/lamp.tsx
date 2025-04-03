"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

export function LampContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("relative flex flex-col items-center justify-center w-full", className)}>
            <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
                {/* Lamp fixture */}
                <div className="absolute -top-2 z-50 w-28 h-1 bg-orange-400/80 rounded-full" />
                <div className="absolute -top-1 z-50 w-24 h-1 bg-orange-300/50 rounded-full" />
                <div className="absolute top-0 z-50 w-20 h-1 bg-orange-200/30 rounded-full" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.7, 1.1, 0.7],
                        rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 w-[650px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.25)_0%,rgba(255,170,59,0.15)_25%,rgba(249,115,22,0.08)_50%,transparent_70%)] backdrop-filter backdrop-blur-[1px] transform-gpu"
                />

                {/* Pulsing core */}
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{
                        opacity: [0.4, 0.6, 0.4],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,transparent_70%)]"
                />

                {/* Light particles */}


                {/* Content area */}
                <div className="relative z-50 ">
                    {children}
                </div>
            </div>
        </div>
    );
}
