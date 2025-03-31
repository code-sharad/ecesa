export interface Workshop {
    id?: string;
    name: string;
    description: string;
    location: string;
    date: string;
    capacity: number;
    duration: string;
    image?: string;
    instructor: string[];
    time: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Student {
    id?: string;
    name: string;
    email: string;
    phone: string;
    branch: string;
    year: number;
    workshopId?: string;
    workshop?: Workshop;
    createdAt: Date;
    updatedAt: Date;
}
