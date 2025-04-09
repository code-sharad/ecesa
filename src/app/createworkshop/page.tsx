import createWorkshop from "@/actions/CreateWorkshop";
import { uploadToCloudinary } from "@/actions/UploadImage";


export default function CreateWorkshop() {
    async function createEvent(formData: FormData) {
        'use server'

        try {

            const isTeamWorkshop = formData.get('isTeamWorkshop') === 'true' ? true : false;
            // Handle image upload
            const imageUrl = await uploadToCloudinary(formData)

            const workshopData = {
                name: formData.get('name') || '',
                description: formData.get('description') || '',
                location: formData.get('location') || '',
                date: formData.get('date') || '',
                capacity: Number(formData.get('capacity')) || 0,
                instructor: formData.get('instructor')?.toString().split(',') || [],
                duration: formData.get('duration') || '',
                time: formData.get('time') || '',
                price: formData.get('price') || 0,
                image: imageUrl.data?.image || '',
                isTeamWorkshop: isTeamWorkshop || false,
                maxTeamSize: isTeamWorkshop ? Number(formData.get('maxTeamSize')) : 1,
            }


            // Here you would typically upload the image to a storage service
            // and get back a URL to store in the database
            // console.log(imageUrl)
            // Add your API call or database operation here
            console.log(workshopData)
            // const response = await fetch('/api/workshop', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(workshopData)
            // })
            // @ts-expect-error => becuase of the type error
            const res = await createWorkshop(workshopData)
            console.log(res)


        } catch (error) {
            console.error('Error creating workshop:', error)
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-4 text-white mt-32">
            <h1 className="text-2xl font-bold mb-6">Create New Workshop</h1>
            <form action={createEvent} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2">Workshop Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full p-2 border rounded h-32"
                        required
                        placeholder="Enter description in markdown format..."
                    />
                </div>

                <div>
                    <label htmlFor="location" className="block mb-2">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="date" className="block mb-2">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="capacity" className="block mb-2">Capacity</label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="instructor" className="block mb-2">Instructors (comma-separated)</label>
                    <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="isTeamWorkshop" className="block mb-2">Workshop Type</label>
                    <select

                        id="isTeamWorkshop"
                        name="isTeamWorkshop"
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="false">Individual Workshop</option>
                        <option value="true">Team Workshop</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="isTeamWorkshop" className="block mb-2">Max Team Size</label>
                    <input
                        type="number"
                        id="maxTeamSize"
                        name="maxTeamSize"
                        className="w-full p-2 border rounded"
                        placeholder="Max Team Size"
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block mb-2">Workshop Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="duration" className="block mb-2">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="time" className="block mb-2">Time</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block mb-2">Fee</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Create Workshop
                </button>
            </form>
        </div>
    );
}