// app/api/workshop/[id]/students/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    try {
        // Get the workshop ID from params
        const workshopId = req.url.split('/').pop() as string;
        console.log(workshopId)
        // Fetch enrolled students from database
        // Replace this with your actual database query
        const enrolledStudents = await prisma.workshop.findMany({
            where: {
                id: workshopId
            },
            include: {
                students: true // Include student details
            }
        });

        // Return the enrolled students
        return NextResponse.json({
            success: true,
            enrolledStudents
        });
    } catch (error) {
        console.error('Error fetching enrolled students:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch enrolled students' },
            { status: 500 }
        );
    }
}