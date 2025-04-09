import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import getUpcomingEvents from '@/actions/UpcomingEvents';
import { Button } from "../ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


async function UpcomingEventCard() {
    const upcoming_event = await getUpcomingEvents();
    return (
        <div className="flex flex-col justify-center items-center mb-12">
            <Badge className=" text-orange-400 text-sm mt-24 mb-8 px-4 bg-orange-950/50 border-orange-500/20">
                Upcoming Event
            </Badge>
            {upcoming_event && upcoming_event.length > 0 ? (
                <Carousel className="  dark">
                    <CarouselContent >
                        {upcoming_event.map((event, index) => (
                            <CarouselItem key={index} className="">
                                {/* <div key={index}> */}
                                <div className="">
                                    <Card className="p-0">
                                        <CardContent className="flex  items-center justify-center p-0 ">
                                            <Card className="max-w-[1200px]   border-zinc-900 bg-gradient-to-r from-orange-900/10 to-orange-900/20 p-0 sm:p-6 lg:p-10 relative overflow-hidden backdrop-blur-sm inset-ring-zinc-900  rounded-2xl">
                                                {/* Background elements */}


                                                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                                                    <div className="md:w-2/5 flex-shrink-0 mb-6 md:mb-0">
                                                        <div className="relative rounded-xl overflow-hidden h-64 md:h-full group transform transition-all duration-500 hover:scale-[1.02] shadow-xl">
                                                            <Image
                                                                src={event.image}
                                                                priority
                                                                alt={event.name}
                                                                width={3000}
                                                                height={2000}
                                                                className=" object-cover aspect-square transition-transform duration-700 hover:scale-110"
                                                            />
                                                            <div className="absolute  inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                                            <div className="flex gap-1 absolute bottom-0 left-0 p-4">
                                                                <div className="mt-2 flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-700/30">
                                                                    <span className="text-orange-400">👥</span>
                                                                    <span className="text-zinc-200 text-sm font-medium">{event.students?.length || 20} Attendees</span>
                                                                </div>

                                                            </div>
                                                            {event.price && (<span className="absolute top-2 right-2 p-4 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-full border border-zinc-700/30">
                                                                ₹{event.price}
                                                            </span>)}
                                                        </div>
                                                    </div>
                                                    <div className="md:w-3/5 md:my-12 flex flex-col md:gap-2 ">
                                                        <div className="flex justify-between items-center mx-4">
                                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight bg-clip-text  bg-gradient-to-r from-orange-300 to-orange-100">
                                                                {event.name}
                                                            </h3>

                                                        </div>
                                                        <div className="flex flex-wrap gap-4 mx-4 lg:gap-8 text-sm sm:text-base text-zinc-200 mb-6">
                                                            <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                                <span className="text-orange-400">📅</span> {event.date}
                                                            </div>
                                                            {/* <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                                    <span className="text-orange-400">⏰</span> {event.time}
                                                                </div> */}
                                                            <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                                <span className="text-orange-400">📍</span> {event.location}
                                                            </div>

                                                            <div className="hidden md:block  items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                                {event.description.slice(1, 100)}
                                                            </div>
                                                        </div>

                                                        <Link href={`/events/${event.id}`} className="w-full mt-12 md:w-56 rounded-lg transition-all duration-300">
                                                            <Button variant={"secondary"} className="w-full py-8 md:w-56 bg-black hover:bg-zinc-900 text-orange-300 border border-orange-500/20 hover:border-orange-500/40 transition-all  cursor-pointer  group">
                                                                Join Event 🎉
                                                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex justify-center items-center mt-4">{index + 1} / {upcoming_event.length}</div>
                            </CarouselItem>
                            // </div>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant={"secondary"} className="left-4" />
                    <CarouselNext variant={"secondary"} className="right-4" />

                </Carousel>

            ) : <Card className="mb-12 max-w-[1200px] border-zinc-900 bg-gradient-to-r from-orange-900/10 to-orange-900/20 p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-sm inset-ring-zinc-900  rounded-2xl">
                {/* Background elements */}


                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/5 flex-shrink-0 mb-6 md:mb-0">
                        <div className="relative rounded-xl overflow-hidden h-64 md:h-full group transform transition-all duration-500 hover:scale-[1.02] shadow-xl">
                            <Image
                                src={upcoming_event[0].image}
                                priority
                                alt={upcoming_event[0].name}
                                width={3000}
                                height={2000}
                                className=" object-cover aspect-square transition-transform duration-700 hover:scale-110"
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
                            {`${upcoming_event[0].description.slice(1, 190)} ...`}
                        </p>
                    </div>
                    <Link href={`/events/${upcoming_event[0].id}`} className="absolute bottom-4 right-4">
                        <Button className="bg-orange-500/80 text-white hover:bg-orange-500 backdrop-blur-sm px-6 py-2 text-sm font-medium">
                            View Event
                        </Button>
                    </Link>
                </div>
            </Card>
            }
        </div >
    )
}

export default UpcomingEventCard