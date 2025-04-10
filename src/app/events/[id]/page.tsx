'use client'

// import GetEventById from "@/actions/GetEventById"
import { Workshop } from "@/types";
import { CalendarDays, MapPin, Users, IndianRupee, Users2, Timer, UserCheck } from 'lucide-react'
import Image from 'next/image'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState<Workshop>();



    useEffect(() => {
        async function getEvent() {
            const res = await fetch(`/api/workshop/${id}`);
            if (!res.ok) {
                throw new Error('Failed to fetch event data');
            }
            const data = await res.json();
            setEvent(data.enrolledStudents[0]);
        }
        getEvent();
    }, [id])



    async function handleEmail() {
        const res = await fetch('/api/resend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to: 'bhadaitsharad7@gmail.com', subject: 'Hello from Next.js' })
        });
        if (!res.ok) {
            throw new Error('Failed to send email');
        } else {
            console.log(res)
        }
        return res;
    }

    return (
        <div className="min-h-screen bg-black mt-24">
            <div className="container mx-auto px-4 py-12">
                {event ? (
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Section */}
                        <div className="relative rounded-t-2xl overflow-hidden h-[300px] mb-8">
                            <Image
                                src={event.image || ''}
                                alt={event.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                            <div className="absolute bottom-0 w-full p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div>
                                        {/* <span className="bg-orange-500/20 text-orange-400 rounded-full px-4 py-1 text-sm">
                                            {event.status.toUpperCase()}
                                        </span> */}
                                        {event.isTeamWorkshop && (

                                            <span className="text-sm bg-orange-500/20 text-orange-400 rounded-md p-2">Registrations {event.students?.length || 20}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-4xl font-bold text-white mb-2">{event.name}</h1>
                                </div>

                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Description */}
                                <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                                    <h2 className="text-2xl font-medium font-mono uppercase text-white mb-4">Description</h2>
                                    <p className="text-zinc-300 leading-relaxed">{event.description}</p>
                                </div>
                                {/* Event Details */}
                                <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                                    <h2 className="text-2xl font-medium text-white mb-6 font-mono uppercase">About this event</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-6">
                                            <InfoItem icon={<CalendarDays className="w-5 h-5" />}
                                                label="Date"
                                                value={new Date(event.date).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })} />
                                            <InfoItem icon={<Timer className="w-5 h-5" />}
                                                label="Event Duration"
                                                value={event.duration} />
                                            {/* <InfoItem icon={<Clock className="w-5 h-5" />}
                                                label="Time"
                                                value={event.time} /> */}
                                            <InfoItem icon={<MapPin className="w-5 h-5" />}
                                                label="Location"
                                                value={event.location} />
                                        </div>
                                        <div className="space-y-6">
                                            <InfoItem icon={<Users className="w-5 h-5" />}
                                                label="Remaining Seats"
                                                value={`${event.capacity / (event.students?.length || 20)} people`} />
                                            <InfoItem icon={<Users2 className="w-5 h-5" />}
                                                label="Team Size"
                                                value={`Maximum ${event.max_team_size} members`} />
                                            <InfoItem icon={<UserCheck className="w-5 h-5" />}
                                                label="Instructors"
                                                value={event.instructor.join(', ')} />
                                            <InfoItem icon={<IndianRupee className="w-5 h-5" />}
                                                label="Price"
                                                value={`₹${event.price}`} />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 sticky top-4">
                                    <h3 className="text-xl font-medium font-mono uppercase text-white mb-6">Registration</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-zinc-300">
                                            <span>Price</span>
                                            <span className="font-semibold text-white">₹{event.price}</span>
                                        </div>
                                        <div className="flex justify-between text-zinc-300">
                                            <span>Status</span>
                                            <span className="capitalize text-orange-400">{event.status}</span>
                                        </div>
                                    </div>
                                    <button onClick={handleEmail} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/20">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}

// Helper component for consistent info display
function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-center space-x-3">
            <div className="text-orange-500">{icon}</div>
            <div>
                <p className="text-sm text-zinc-400">{label}</p>
                <p className="text-white">{value}</p>
            </div>
        </div>
    )
}   