
// import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";

import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import HeroSection from "@/components/HeroSection";

// import { DockNav } from "@/components/docknav";


// Hero Section Component


// Features Section Component
// function FeaturesSection() {
//   const features = [
//     {
//       title: "Technical Workshops",
//       description:
//         "Hands-on learning sessions on electronics, programming, and emerging technologies.",
//       icon: "🔧",
//     },
//     {
//       title: "Project Showcases",
//       description:
//         "Platform to showcase your innovative projects and get valuable feedback.",
//       icon: "💡",
//     },
//     {
//       title: "Industry Connect",
//       description:
//         "Networking opportunities with industry professionals and tech companies.",
//       icon: "🤝",
//     },
//     {
//       title: "Competitions",
//       description:
//         "Participate in technical competitions and hackathons to test your skills.",
//       icon: "🏆",
//     },
//   ];

//   return (
//     <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-zinc-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="mb-16 text-center"

//         >
//           <Badge className="text-orange-600 text-sm  my-4 px-4 bg-orange-100 ">What We Offer</Badge>
//           <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-orange-100">
//             Opportunities
//           </h2>
//           <p className="text-orange-200/70">
//             Comprehensive solutions for a sustainable future
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}

//             >
//               <Card className="h-full p-6 hover:scale-[102%]  bg-zinc-900/80 border-orange-300/20 transition-all duration-300 group hover:shadow-sm hover:shadow-orange-800/50">
//                 <div
//                   className="mb-4 text-4xl transform transition-transform duration-300 group-hover:scale-110"
//                 >
//                   {feature.icon}
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-orange-100 transition-colors duration-300 ">
//                   {feature.title}
//                 </h3>
//                 <p className="text-orange-100 transition-colors duration-300 ">
//                   {feature.description}
//                 </p>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }


// Main Landing Page Component
export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* <DockNav /> */}
      <HeroSection />
      {/* <FeaturesSection /> */}
      <TeamSection />
      {/* <AboutSection /> */}
      <EventsSection />
      {/* <ProjectsSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
