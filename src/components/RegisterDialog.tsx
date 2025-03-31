import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface RegisterDialogProps {
    open: boolean;
    showDialog: (open: boolean) => void;
    workshop_id: string;
}

export function RegisterDialog({ open, showDialog, workshop_id }: RegisterDialogProps) {
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
        formData.workshopId = workshop_id
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
            showDialog(false);
        } catch (error) {
            toast.error('Registration failed', {
                description: error instanceof Error ? error.message : "Something went wrong",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Dialog open={open} onOpenChange={showDialog} >
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
            </Dialog ></>
    );
}
