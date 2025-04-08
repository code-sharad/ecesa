import { prisma } from '@/lib/prisma';
import { Workshop } from '@/types';
import { NextResponse } from 'next/server'

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
        const data: Workshop = {
            name: body.name,
            description: body.description,
            location: body.location,
            capacity: Number(body.capacity),
            duration: body.duration,
            image: body.image || '',
            instructor: body.instructor,
            time: body.time,
            date: body.date,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Validate required fields
        if (!data.name || !data.description || !data.date || !data.location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const workshop = await prisma.workshop.create({
            data: {
                ...data,
                image: data.image || ''
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

