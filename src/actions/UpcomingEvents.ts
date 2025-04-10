'use server'
import { prisma } from "@/lib/prisma"



const getUpcomingEvents = async () => {

    const workshops = await prisma.workshop.findMany({
        where: {
            status: "upcoming"
        },
        include: { students: true },
        // cacheStrategy: { ttl: 60 }
    });
    console.log()
    if (workshops.length === 0) {
        return null
        throw new Error("No events found")
    } else {
        return workshops.reverse();

    }

}

export default getUpcomingEvents;