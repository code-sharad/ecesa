
// const response = [
//     {
//         "id": "cm8xfgj6u0000i15c4umjq7ef",
//         "name": "Web Dev Workshop",
//         "description": "IN this workshop we will be teaching mern stack overvioewe how the internet workshop, how website works ",
//         "date": "13 March 2025",
//         "time": "2pm",
//         "duration": "5 hours",
//         "location": "Mit camp",
//         "capacity": 100,
//         "instructor": [
//             "sharad",
//             "sanket"
//         ],
//         "fee": null,
//         "image": "https://xaltiusacademy.com/wp-content/uploads/2024/04/gen-ai-11-12-may-sgt.png",
//         "status": "upcoming",
//         "createdAt": "2025-03-31T18:53:37.400Z",
//         "updatedAt": "2025-03-31T18:53:37.400Z",
//         "students": [
//             {
//                 "id": "cm8xfie5i0002i15cdjp6bh6l",
//                 "name": "Sharad Bhadait",
//                 "email": "codesharad@gmail.com",
//                 "branch": "ECE",
//                 "year": 3,
//                 "phone": "23847289437",
//                 "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
//                 "createdAt": "2025-03-31T18:55:04.897Z",
//                 "updatedAt": "2025-03-31T18:55:05.474Z"
//             },
//             {
//                 "id": "cm8xfjout0003i15c0k01kfo7",
//                 "name": "Nikhil Bhadait",
//                 "email": "nikhil@gmail.com",
//                 "branch": "ECE",
//                 "year": 2,
//                 "phone": "23942847987",
//                 "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
//                 "createdAt": "2025-03-31T18:56:05.523Z",
//                 "updatedAt": "2025-03-31T18:56:05.992Z"
//             },
//             {
//                 "id": "cm8xkth680001ju036z49639m",
//                 "name": "Sharad  Bhadait ",
//                 "email": "nik@gmail.com",
//                 "branch": "ECE",
//                 "year": 2,
//                 "phone": "246499799775",
//                 "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
//                 "createdAt": "2025-03-31T21:23:39.979Z",
//                 "updatedAt": "2025-03-31T21:23:41.349Z"
//             },
//             {
//                 "id": "cm8y8onal0000l103izaot0my",
//                 "name": "Mangesh  Patil",
//                 "email": "mangesh.chopde@mit.asia",
//                 "branch": "ECE",
//                 "year": 3,
//                 "phone": "56868686867656564676",
//                 "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
//                 "createdAt": "2025-04-01T08:31:45.421Z",
//                 "updatedAt": "2025-04-01T08:31:47.437Z"
//             },
//             {
//                 "id": "cm8zzn8z10000jr039j4nh2bw",
//                 "name": "Aakashdeep  Kumar ",
//                 "email": "akashdeepkumar0001@gmail.com",
//                 "branch": "ECE",
//                 "year": 3,
//                 "phone": "9370581099",
//                 "workshopId": "cm8xfgj6u0000i15c4umjq7ef",
//                 "createdAt": "2025-04-02T13:54:16.008Z",
//                 "updatedAt": "2025-04-02T13:54:18.062Z"
//             }
//         ]
//     }
// ]

// function WorkshopDetails() {
//     const workshop = response[0]; // Since response is an array with one workshop

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             {/* Workshop Header */}
//             <div className="flex flex-col md:flex-row gap-6 mb-8">
//                 <div className="md:w-1/2">
//                     <img
//                         src={workshop.image}
//                         alt={workshop.name}
//                         className="w-full h-[300px] object-cover rounded-lg"
//                     />
//                 </div>
//                 <div className="md:w-1/2">
//                     <h1 className="text-3xl font-bold mb-4">{workshop.name}</h1>
//                     <p className="text-gray-600 mb-4">{workshop.description}</p>

//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">Date:</span>
//                             <span>{workshop.date}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">Time:</span>
//                             <span>{workshop.time}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">Duration:</span>
//                             <span>{workshop.duration}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">Location:</span>
//                             <span>{workshop.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">Capacity:</span>
//                             <span>{workshop.capacity}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">Status:</span>
//                             <span className="capitalize">{workshop.status}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Instructors Section */}
//             <div className="mb-8">
//                 <h2 className="text-2xl font-bold mb-4">Instructors</h2>
//                 <div className="flex gap-4">
//                     {workshop.instructor.map((instructor, index) => (
//                         <span key={index} className="bg-blue-100 px-3 py-1 rounded-full capitalize">
//                             {instructor}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Registered Students Section */}
//             <div>
//                 <h2 className="text-2xl font-bold mb-4">Registered Students ({workshop.students.length})</h2>
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
//                                 <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
//                                 <th className="px-6 py-3 text-left text-sm font-semibold">Branch</th>
//                                 <th className="px-6 py-3 text-left text-sm font-semibold">Year</th>
//                                 <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-200">
//                             {workshop.students.map((student) => (
//                                 <tr key={student.id}>
//                                     <td className="px-6 py-4">{student.name}</td>
//                                     <td className="px-6 py-4">{student.email}</td>
//                                     <td className="px-6 py-4">{student.branch}</td>
//                                     <td className="px-6 py-4">{student.year}</td>
//                                     <td className="px-6 py-4">{student.phone}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }