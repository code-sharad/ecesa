import Image from 'next/image';
import { Linkedin, Github, Inbox } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    social?: {
        linkedin?: string;
        github?: string;
        email?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        name: "Akash Deep Kumar",
        role: "President",
        image: "/team/president.jpg",
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
            email: "mailto:john@ecesa.org"
        }
    },
    {
        name: "Sharad Bhadait",
        role: "Vice President",
        image: "/team/vice_president.jpg"
    }, {
        name: "Sharad Bhadait",
        role: "Vice President",
        image: "/team/vice_president.jpg"
    }, {
        name: "Sharad Bhadait",
        role: "Vice President",
        image: "/team/vice_president.jpg"
    }, {
        name: "Sharad Bhadait",
        role: "Vice President",
        image: "/team/vice_president.jpg"
    }, {
        name: "Sharad Bhadait",
        role: "Vice President",
        image: "/team/vice_president.jpg"
    },
    // Add more team members as needed
];

const TeamSection = () => {
    return (
        <section className="relative py-32 px-4 bg-gradient-to-b from-orange-900 via-orange-800 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute -top-48 -left-48 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="relative z-10 mb-20">
                    <h2 className="text-5xl font-bold text-center mb-6 tracking-tight">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 
                                       animate-text-shimmer">Meet Our Team</span>
                    </h2>
                   
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index}
                            className="relative group transform transition-all duration-500 hover:-translate-y-2 hover:z-10
                                     before:absolute before:inset-0 before:opacity-20
                                     before:mix-blend-overlay before:pointer-events-none">
                            <div className="rounded-md absolute inset-0 ring-1 ring-offset-2 ring-offset-black/50 ring-orange-500/30
                                          group-hover:ring-orange-500/50 bg-black/70 backdrop-blur-[12px] 
                                          transition-all duration-500 group-hover:bg-black/50
                                          border border-orange-500/20 
                                          group-hover:border-orange-500/40 shadow-xl shadow-black/40" />
                            <div className="relative p-4 text-white">
                                {/* Profile Image Container */}
                                <div className="rounded-full w-32 h-32 mx-auto mb-4 overflow-hidden 
                                               transition-all duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="object-cover transform transition-transform duration-500 
                                                 group-hover:scale-110 group-hover:sepia-0
                                                 group-hover:contrast-100 group-hover:saturate-100"
                                    />
                                </div>

                                {/* Member Info */}
                                <h3 className="text-2xl font-bold text-center mb-2 
                                             text-transparent bg-clip-text bg-gradient-to-r 
                                             from-orange-200 to-orange-400">{member.name}</h3>
                                <p className="text-center text-orange-400/80 font-medium mb-4 
                                            tracking-wider uppercase text-xs">{member.role}</p>

                                {/* Social Links */}
                                {member.social && (
                                    <div className="flex justify-center gap-4">
                                        {member.social.linkedin && (
                                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                                                className="text-orange-400/60 hover:text-orange-400 
                                                         transform hover:scale-110 transition-transform duration-300">
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                                                className="text-orange-400/60 hover:text-orange-400
                                                         transform hover:scale-110 transition-transform duration-300">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {member.social.email && (
                                            <a href={member.social.email}
                                                className="text-orange-400/60 hover:text-orange-400 transition-colors
                                                         transform hover:scale-110 transition-transform duration-300">
                                                <Inbox size={18} />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade-out overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </section>
    );
};

export default TeamSection;