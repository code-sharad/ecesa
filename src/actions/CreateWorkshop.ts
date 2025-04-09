import { Workshop } from '../types/index';

const createWorkshop = async (workshopData: Workshop) => {
    try {
        console.log(process.env.NEXT_PUBLIC_BASE_URL)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/workshop`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workshopData),
        });

        if (!response.ok) {
            throw new Error('Failed to create workshop');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating workshop:', error);
    }
}

export default createWorkshop;