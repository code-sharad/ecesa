import { prisma } from "@/lib/prisma";


const GetEventById = async (eventId: string) => {
    const event = await prisma.workshop.findUnique({
        where: {
            id: eventId,
        },
        include: { students: true },
    });

    return event;
}

export default GetEventById;