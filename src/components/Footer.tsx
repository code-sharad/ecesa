"use client";

import React from "react";
import Link from "next/link";
import {  Github, Linkedin, X, Youtube } from "lucide-react";
// import { Icons } from "@/components/docknav";

export default function Footer() {
    return (
        <footer className="bg-black text-zinc-400 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Logo and Description */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-lg font-bold text-orange-500">ECESA</h2>
                        <p className="text-sm">
                            Empowering students in electronics and computing.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                        <Link href="/about" className="hover:text-orange-500 transition-colors">
                            About
                        </Link>
                        <Link href="/events" className="hover:text-orange-500 transition-colors">
                            Events
                        </Link>
                        <Link href="/contact" className="hover:text-orange-500 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <Link href="#" aria-label="GitHub" className="hover:text-orange-500">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="hover:text-orange-500">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" aria-label="X" className="hover:text-orange-500">
                            <X className="w-5 h-5" />
                        </Link>
                        <Link href="#" aria-label="YouTube" className="hover:text-orange-500">
                            <Youtube className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-sm">
                    © {new Date().getFullYear()} ECESA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
