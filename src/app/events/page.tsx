'use client'
import { Workshop } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
    const [allEvents, setAllEvents] = useState<Workshop[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/workshop`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setAllEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin text-4xl">⌛</div>
                <p className="ml-2 text-lg text-white">Loading events ...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-900 to-black text-white">
            <div className="relative py-20 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl mb-8 text-center py-12 font-light">Events</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allEvents.map((event, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="relative">
                                    <Image
                                        width={400}
                                        height={200}
                                        src={event.image || ''}
                                        alt={event.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${event.status === 'upcoming' ? 'bg-green-500' :
                                                event.status === 'ongoing' ? 'bg-orange-500' :
                                                    'bg-red-500'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-4 text-orange-300">{event.name}</h2>
                                    <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                                    <div className="space-y-2 mb-6">
                                        <p className="text-sm flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            {event.date}
                                        </p>
                                        <p className="text-sm flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            {event.time}
                                        </p>
                                        <p className="text-sm flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            {event.location}
                                        </p>
                                    </div>
                                    <Link href={`/events/${event.id}`}>
                                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
