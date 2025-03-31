import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

export async function GET() {
    try {
        const students = await prisma.student.findMany({});
        return NextResponse.json(students);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch students', message: error });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const studentData: Prisma.StudentCreateInput = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            branch: body.branch,
            year: Number(body.year),
            createdAt: new Date(),
            updatedAt: new Date(),
            workshop: { connect: { id: body.workshopId } }
        };

        const student = await prisma.student.create({
            data: studentData
        });

        await prisma.workshop.update({
            where: { id: body.workshopId },
            data: {
                students: { connect: { id: student.id } }
            }
        })

        return NextResponse.json(student);
    } catch (error) {
        console.error('Student creation error:', error);
        return NextResponse.json(
            { error: 'Failed to create student', message: error },
            { status: 400 }
        );
    }
}

