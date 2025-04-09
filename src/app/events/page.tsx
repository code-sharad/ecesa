// import PaymentButton from "@/components/PaymentButton";

import Image from "next/image";

export default function Page() {
    const response = [
        {
            "id": "cm8xfgj6u0000i15c4umjq7ef",
            "name": "Web Dev Workshop",
            "description": "IN this workshop we will be teaching mern stack overvioewe how the internet workshop, how website works ",
            "date": "13 March 2025",
            "time": "2pm",
            "duration": "5 hours",
            "location": "Mit camp",
            "capacity": 100,
            "instructor": [
                "sharad",
                "sanket"
            ],
            "fee": null,
            "image": "https://xaltiusacademy.com/wp-content/uploads/2024/04/gen-ai-11-12-may-sgt.png",
            "status": "upcoming",
            "createdAt": "2025-03-31T18:53:37.400Z",
            "updatedAt": "2025-03-31T18:53:37.400Z",
            "students": [
                {
                    "id": "cm8xfie5i0002i15cdjp6bh6l",
                    "name": "Sharad Bhadait",
                    "email": "codesharad@gmail.com",
                    "branch": "ECE",
                    "year": 3,
                    "phone": "23847289437",
                    "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
                    "createdAt": "2025-03-31T18:55:04.897Z",
                    "updatedAt": "2025-03-31T18:55:05.474Z"
                },
                {
                    "id": "cm8xfjout0003i15c0k01kfo7",
                    "name": "Nikhil Bhadait",
                    "email": "nikhil@gmail.com",
                    "branch": "ECE",
                    "year": 2,
                    "phone": "23942847987",
                    "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
                    "createdAt": "2025-03-31T18:56:05.523Z",
                    "updatedAt": "2025-03-31T18:56:05.992Z"
                },
                {
                    "id": "cm8xkth680001ju036z49639m",
                    "name": "Sharad  Bhadait ",
                    "email": "nik@gmail.com",
                    "branch": "ECE",
                    "year": 2,
                    "phone": "246499799775",
                    "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
                    "createdAt": "2025-03-31T21:23:39.979Z",
                    "updatedAt": "2025-03-31T21:23:41.349Z"
                },
                {
                    "id": "cm8y8onal0000l103izaot0my",
                    "name": "Mangesh  Patil",
                    "email": "mangesh.chopde@mit.asia",
                    "branch": "ECE",
                    "year": 3,
                    "phone": "56868686867656564676",
                    "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
                    "createdAt": "2025-04-01T08:31:45.421Z",
                    "updatedAt": "2025-04-01T08:31:47.437Z"
                },
                {
                    "id": "cm8zzn8z10000jr039j4nh2bw",
                    "name": "Aakashdeep  Kumar ",
                    "email": "akashdeepkumar0001@gmail.com",
                    "branch": "ECE",
                    "year": 3,
                    "phone": "9370581099",
                    "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
                    "createdAt": "2025-04-02T13:54:16.008Z",
                    "updatedAt": "2025-04-02T13:54:18.062Z"
                }
            ]
        }
    ]


    const workshop = response[0];
    const studentCount = workshop.students.length;

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-900 to-black text-white">
            {/* Hero Section */}

            <div className="relative py-20 pt-32">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Workshop Image */}
                    <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-16">
                        <Image
                            width={1000}
                            height={300}
                            src={workshop.image}
                            alt={workshop.name}
                            className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
                        />
                        <div className="absolute top-4 right-4 md:top-6 md:right-6">
                            <span className="bg-orange-500 px-3 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider">
                                {workshop.status}
                            </span>
                        </div>
                    </div>
                    <div className="relative z-10">
                        {/* Workshop Title and Description */}
                        <h1 className="text-6xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
                                {workshop.name}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
                            {workshop.description}
                        </p>

                        {/* <PaymentButton amount={50} /> */}

                        {/* Key Information */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Date & Time</p>
                                <p className="text-lg font-medium">{workshop.date}</p>
                                <p className="text-lg font-medium">{workshop.time}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Duration</p>
                                <p className="text-lg font-medium">{workshop.duration}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Location</p>
                                <p className="text-lg font-medium">{workshop.location}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Available Seats</p>
                                <p className="text-lg font-medium">{studentCount}/{workshop.capacity}</p>
                            </div>
                        </div>



                        {/* Instructors Section */}
                        <div className="mb-16"></div>
                        <h2 className="text-2xl font-semibold mb-6">Meet Your Instructors</h2>
                        <div className="flex flex-wrap gap-4">
                            {workshop.instructor.map((instructor, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur px-8 py-4 rounded-lg">
                                    <p className="text-lg font-medium capitalize">{instructor}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
