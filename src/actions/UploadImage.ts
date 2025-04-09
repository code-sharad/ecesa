// app/actions.js
'use server'
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(formData: FormData) {
    try {
        const workshopData = {
            name: formData.get('name'),
            description: formData.get('description'),
            location: formData.get('location'),
            date: formData.get('date'),
            capacity: Number(formData.get('capacity')),
            instructor: formData.get('instructor')?.toString().split(','),
            duration: formData.get('duration'),
            time: formData.get('time'),
            price: formData.get('fee'),
            image: formData.get('image') as File,
        }

        if (!workshopData.image) {
            return { error: 'Image is required' };
        }

        let imageUrl = null;
        // let publicId = null;

        // Upload to Cloudinary if there's an image
        if (workshopData.image && workshopData.image.size > 0) {
            // Convert the file to base64
            const arrayBuffer = await workshopData.image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const base64String = `data:${workshopData.image.type};base64,${buffer.toString('base64')}`;

            // Upload to Cloudinary
            const uploadResult = await cloudinary.uploader.upload(base64String, {
                folder: 'ecesa/workshop-images',
            });

            imageUrl = uploadResult.secure_url;
        }

        // Save to your database here
        // const post = await prisma.post.create({
        //   data: {
        //     title,
        //     imageUrl,
        //     imagePublicId: publicId,
        //   }
        // });
        // const workshop = await prisma.workshop.create({
        //     data: {
        //         name: workshopData.name?.toString() || '',
        //         description: workshopData.description?.toString() || '',
        //         location: workshopData.location?.toString() || '',
        //         date: workshopData.date?.toString() || '',
        //         capacity: workshopData.capacity,
        //         instructor: workshopData.instructor || [],
        //         duration: workshopData.duration?.toString() || '',
        //         time: workshopData.time?.toString() || '',
        //         fee: Number(workshopData.price) || 0,
        //         image: imageUrl || ''
        //     }
        // })

        // For this example, just return the data
        revalidatePath('/events'); // Revalidate any page that displays this data
        return {
            success: true,
            data: {
                image: imageUrl,
            }
        };
    } catch (error) {
        console.error('Upload error:', error);
        const message = error instanceof Error ? error.message : 'Unknown error occurred';
        return { error: 'Failed to upload: ' + message };
    }
}