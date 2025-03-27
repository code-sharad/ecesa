import {motion} from "motion/react";
import {Button} from "@/components/ui/button";

function CTASection() {
    return (
        <section className="bg-gradient-to-b from-black to-zinc-900 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="rounded-2xl border-zinc-800 bg-zinc-900/80 backdrop-blur-sm relative overflow-hidden  p-8 text-center sm:p-16 border  hover:border-orange-500/10 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-900/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-100 transition-colors duration-300 group-hover:text-orange-300">
                        Ready to Join Our Tech Community?
                    </h2>
                    <p className="mb-8 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                        Become a member of ECESA and grow your technical skills while
                        building lasting connections.
                    </p>
                    <Button
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 group"
                        asChild
                    >
                        <a href="/contact">
                            <span className="relative z-10 transition-colors duration-300">
                                Contact Us Today
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-orange-500/30"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default CTASection;