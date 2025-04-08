import React, { useState } from 'react'
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { RegisterDialog } from "@/components/RegisterDialog";
import {  Workshop } from '@/types';


function UpcomingEvent({ upcoming_event }: { upcoming_event: Workshop[] }) {
    const [showRegisterDialog, setShowRegisterDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fistName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        branch: '',
        year: '',
        phone: '',
        workshopId: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        formData.name = `${fistName} ${lastName}`;
        formData.workshopId = upcoming_event[0].id || ''
        console.log(formData);
        try {
            const response = await fetch('/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            toast.message('Registration successful!', {
                description: "You have been registered successfully.",
            });
        } catch (error) {
            toast.error('Registration failed', {
                description: error instanceof Error ? error.message : "Something went wrong",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col'>
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

                        <Dialog >
                            <DialogTrigger asChild>
                                <Button className="relative cursor-pointer group w-fit overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-none px-8 py-6 text-base font-medium transition-all duration-300 shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 hover:scale-105">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                    <span className="relative flex items-center gap-2 ">Register Now <span className="ml-1 group-hover:translate-x-1 transition-all duration-300"> <ArrowRight className="w-8 h-8" /></span></span>
                                    <RegisterDialog
                                        workshop_id={upcoming_event[0].id || ''}
                                        open={showRegisterDialog}
                                        showDialog={setShowRegisterDialog}
                                    />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] border-zinc-800 dark text-white  fixed top-56">

                                <DialogHeader>
                                    <DialogTitle>Register for ECESA</DialogTitle>
                                    <DialogDescription>
                                        Join ECESA to participate in events and activities
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit} className="space-y-4 ">
                                    <div className="grid gap-4 ">
                                        <div className='flex gap-4'>
                                            <Input placeholder='First Name' id='firstname' value={fistName} onChange={e => setFirstName(e.target.value)} required />
                                            <Input placeholder='Last Name' id='lastname' value={lastName} onChange={e => setLastName(e.target.value)} required />
                                        </div>

                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                    <div className='flex gap-4'>
                                        <Select
                                            value={formData.branch}
                                            onValueChange={(value) => setFormData({ ...formData, branch: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Branch" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="CSE">Computer Science</SelectItem>
                                                <SelectItem value="ECE">ECE</SelectItem>
                                                <SelectItem value="EE">Electrical</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Select
                                            value={formData.year}
                                            onValueChange={(value) => setFormData({ ...formData, year: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1st Year</SelectItem>
                                                <SelectItem value="2">2nd Year</SelectItem>
                                                <SelectItem value="3">3rd Year</SelectItem>
                                                <SelectItem value="4">4th Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />

                                    <Button type="submit" className="w-full" disabled={loading}>
                                        {loading ? "Registering..." : "Register"}
                                    </Button>
                                </form>
                            </DialogContent>
                        </Dialog >
                    </div>
                </div>
            </Card></div>
    )
}

export default UpcomingEvent