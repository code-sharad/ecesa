
import React from "react";
import Link from "next/link";
import { Github, Linkedin, X, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-zinc-400 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold text-orange-500">ECESA</h2>
                        <p className="text-sm mt-2">
                            Empowering students in electronics and computing.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                        <Link href="/about" className="hover:text-orange-500 transition-colors">
                            About
                        </Link>
                        <Link href="/events" className="hover:text-orange-500 transition-colors">
                            Events
                        </Link>
                        <Link href="/legal" className="hover:text-orange-500 transition-colors">
                            Terms and Conditions
                        </Link>
                        <Link href="/refund" className="hover:text-orange-500 transition-colors">
                            Refund Policy
                        </Link>
                        <Link href="/contact-us" className="hover:text-orange-500 transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-end gap-4">
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
                <div className="mt-8 text-center text-sm border-t border-zinc-800 pt-8">
                    © {new Date().getFullYear()} ECESA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
