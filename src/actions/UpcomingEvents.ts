'use server'
import { prisma } from "@/lib/prisma"



const getUpcomingEvents = async () => {

    const workshops = await prisma.workshop.findMany({
        where: {
            status: "upcoming"
        },
        include: { students: true },
        cacheStrategy: { ttl: 60 }
    });
    return workshops.reverse();
}

export default getUpcomingEvents;