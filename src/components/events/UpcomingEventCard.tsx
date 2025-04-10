'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { Button } from "../ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useEffect, useState } from "react";
import { Workshop } from "@/types";
import UpcomingEventSkeleton from "../skeleton/UpcomingEvent";


function UpcomingEventCard() {
    const [upcoming_event, setUpcomingEvent] = useState<Workshop[]>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getUpcomingEvents()
    }, []);

    const getUpcomingEvents = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/workshop`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()
        if (data.length === 0) {
            setUpcomingEvent([]);
        } else {
            setUpcomingEvent([...data].reverse());
        }
        setLoading(false);
    }
    if (loading) {
        return <UpcomingEventSkeleton />
    }

    return (
        <div className="flex flex-col justify-center items-center mb-12">

            {(upcoming_event?.length !== 0) ? (
                <div className="flex flex-col justify-center items-center mb-12">
                    <Badge className=" text-orange-400 text-sm mt-24 mb-8 px-4 bg-orange-950/50 border-orange-500/20">
                        Upcoming Event
                    </Badge>
                    <Carousel className="  dark">
                        <CarouselContent >
                            {upcoming_event?.map((event, index) => (
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
                                                                    src={event.image || ''}
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
                                                                <div className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-700/30">
                                                                    <span className="text-emerald-400">💰</span>
                                                                    <span className="text-emerald-100">Registration Fee: ₹{event.price}</span>
                                                                </div>
                                                            </div>

                                                            <Link href={`/events/${event.id}`} className="cursor-pointer">
                                                                <Button
                                                                    variant="ghost"
                                                                    className="w-full py-6 bg-orange-950/20 cursor-pointer hover:bg-orange-950/40 text-orange-300 border border-orange-500/20 hover:border-orange-500/40"
                                                                >
                                                                    View Details →
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

                </div >
            ) : ''}
        </div>
    )
}

export default UpcomingEventCard