import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

const EventsSection = () => {
  const events = [
    {
      title: "Techno Spark 2025",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "College Auditorium",
      description:
        "Our flagship event featuring workshops, competitions, and industry expert talks.",
      category: "Major Event",
    },
    {
      title: "Arduino Workshop",
      date: "March 25, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Lab 101",
      description:
        "Learn the basics of Arduino programming and build your first project.",
      category: "Workshop",
    },

    {
      title: "Hackathon 2025",
      date: "April 15-16, 2025",
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
          <Badge className="text-orange-400 tracking-widest text-sm my-4 px-4 bg-orange-950/50 border-orange-500/20">
            EVENTS
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Technical Events
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Join us for exciting workshops, competitions, and networking opportunities.
          </p>
        </div>


        <div className="max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ">
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

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Button
            className="bg-black hover:bg-zinc-900 text-orange-300 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            asChild
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
