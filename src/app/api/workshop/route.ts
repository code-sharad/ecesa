import { prisma } from '@/lib/prisma';
import { Workshop } from '@/types';
import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
    try {

        const workshops = await prisma.workshop.findMany({
            include: { students: true },
            cacheStrategy: { ttl: 60 }
        });
        return NextResponse.json(workshops.reverse());
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch workshops', message: error });
    }
}



export async function POST(req: Request) {
    try {
        const body = await req.json();
        const workshop_data: Workshop = {
            name: body.name,
            description: body.description,
            location: body.location,
            capacity: Number(body.capacity),
            duration: body.duration,
            image: body.image || '',
            instructor: body.instructor,
            time: body.time,
            date: body.date,
            price: body.price,
            isTeamWorkshop: body.isTeamWorkshop,
            maxTeamSize: body.isTeamWorkshop ? Number(body.maxTeamSize) : 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Validate required fields
        if (!workshop_data.name || !workshop_data.description || !workshop_data.date || !workshop_data.location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const workshop = await prisma.workshop.create({
            data: {
                name: workshop_data.name,
                description: workshop_data.description,
                location: workshop_data.location,
                capacity: workshop_data.capacity,
                duration: workshop_data.duration,
                instructor: workshop_data.instructor,
                time: workshop_data.time,
                date: workshop_data.date,
                price: Number(workshop_data.price) || 0,
                isTeamWorkshop: workshop_data.isTeamWorkshop,
                max_team_size: workshop_data.maxTeamSize || 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                image: workshop_data.image || ''
            }
        });

        return NextResponse.json(workshop);
    } catch (error) {
        console.error('Workshop creation error:', error);
        return NextResponse.json(
            { error: 'Failed to create workshop', message: error },
            { status: 500 }
        );
    }
}

