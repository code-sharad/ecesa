import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import getUpcomingEvents from '@/actions/UpcomingEvents';


async function UpcomingEventCard() {
    const upcoming_event = await getUpcomingEvents();
    return (
        <div className="flex flex-col justify-center items-center">
            <Badge className="w-fit  text-orange-400 text-sm mt-24 mb-8 px-4 bg-orange-950/50 border-orange-500/20">
                Upcoming Event
            </Badge>
            <Card className="mb-12 max-w-[1200px] border-zinc-900 bg-gradient-to-r from-orange-900/10 to-orange-900/20 p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-sm inset-ring-zinc-900  rounded-2xl">
                {/* Background elements */}


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
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default UpcomingEventCard