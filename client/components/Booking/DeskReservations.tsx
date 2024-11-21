// import { useState, useEffect } from 'react';
// import Layout from '@/components/layout';
// import axios from 'axios';
// import router, { Router, useRouter } from "next/router";
// import {
//   GET_TABLES_ENDPOINT,

// } from "@/utils/constants/endpoints";

// interface BookingData {
//   table: string,
//   user: string,
//   startTime: string,
//   endTime: string,
//   date: string,
//   dish: string[],
//   totalmoney: number,
//   type: string
// }

// interface UserDetails {
//   _id: string;
//   name: string;
//   email: string;
//   gender: string;
//   phone: string;
//   img: string;
// }


// const DeskReservations = () => {
//   const [tables, setTables] = useState<{ _id: string; name: string }[]>([]);
//   const [details, setDetails] = useState<UserDetails>();
//   const [selectedTableName, setSelectedTableName] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUserDeskReservations = async () => {
//       try {
//         const res = await axios.get(GET_TABLES_ENDPOINT, {
//           withCredentials: true,
//         });
//         setDetails(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchUserDeskReservations();
//   }, []);

//   return (
//     <Layout>
//       <div className="relative top-[110px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
//         <div className="w-full md:w-1/2 p-5">
//           <h1 className="text-center text-2xl text-[#C9AB81]">Profil personnel</h1>
//           <div className="mt-5 ml-[25%] text-white h-[100%] w-[60%] justify-items-center">
//             {details?.img ? (
//               <img src={details.img} alt="DeskReservations" />
//             ) : (
//               <p>No image available</p>
//             )}
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 p-20">
//           {/* Hiển thị thông tin */}
//           <div className="flex items-center my-4">
//             <label htmlFor="name" className="block text-lg font-medium text-[#C9AB81] w-1/3">Name:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="name" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {details?.name || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Phone:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {details?.phone || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="Table" className="block text-lg font-medium text-[#C9AB81] w-1/3">Table:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="Table" className="h-10 text-[#f9f9f8] rounded pl-2">
//               {selectedTableName || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="Date" className="block text-lg font-medium text-[#C9AB81] w-1/3">Date:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="Date" className="h-10 text-[#f9f9f8] rounded pl-2">
//               {BookingData.date || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="Time" className="block text-lg font-medium text-[#C9AB81] w-1/3">Time:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="Time" className="h-10 text-[#f9f9f8] rounded pl-2">
//               {BookingData.startTime || "Not specified"} - {BookingData.endTime || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default DeskReservations;


///////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GET_TABLES_ENDPOINT, GET_PROFILE_USE } from "@/utils/constants/endpoints";

// const DeskReservations: React.FC = () => {
//   const [tables, setTables] = useState<{ _id: string; name: string }[]>([]);
//   const [details, setDetails] = useState<UserDetails>();
//   const [selectedTableName, setSelectedTableName] = useState<string | null>(null);
//   const [BookingData, setBookingData] = useState({
//     date: "",
//     startTime: "",
//     endTime: "",
//   });

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const ResponseType = await axios.get(GET_TABLES_ENDPOINT, {
//           withCredentials: true,
//         });
//         setTables(ResponseType.data);

//         const res = await axios.get(GET_PROFILE_USE, {
//           withCredentials: true,
//         });
//         setDetails(res.data);
//       } catch (error) {
//         console.log("Error USERRRRRR:", error);
//       }
//     };
//     fetch();
//   }, []);

//   return (
//     <div>
//       <div className="flex items-center my-4">
//         <label htmlFor="Table" className="block text-lg font-medium text-[#C9AB81] w-1/3">
//           Table:
//         </label>
//         <div className="w-2/3 ml-[-40px]">
//           <span id="Table" className="h-10 text-[#f9f9f8] rounded pl-2">
//             {selectedTableName || "Not specified"}
//           </span>
//           <div className="border-b border-[#C9AB81] mt-1"></div>
//         </div>
//       </div>

//       <div className="flex items-center my-4">
//         <label htmlFor="Date" className="block text-lg font-medium text-[#C9AB81] w-1/3">
//           Date:
//         </label>
//         <div className="w-2/3 ml-[-40px]">
//           <span id="Date" className="h-10 text-[#f9f9f8] rounded pl-2">
//             {BookingData.date || "Not specified"}
//           </span>
//           <div className="border-b border-[#C9AB81] mt-1"></div>
//         </div>
//       </div>

//       <div className="flex items-center my-4">
//         <label htmlFor="Time" className="block text-lg font-medium text-[#C9AB81] w-1/3">
//           Time:
//         </label>
//         <div className="w-2/3 ml-[-40px]">
//           <span id="Time" className="h-10 text-[#f9f9f8] rounded pl-2">
//             {BookingData.startTime || "Not specified"} - {BookingData.endTime || "Not specified"}
//           </span>
//           <div className="border-b border-[#C9AB81] mt-1"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeskReservations;
////////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { useEffect, useState } from 'react';

// interface BookingData {
//   table: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   user: string;
//   phone: string;
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData | null>(null);

//   useEffect(() => {
//     const storedData = localStorage.getItem('bookingData');
//     if (storedData) {
//       setBookingData(JSON.parse(storedData));
//     }
//   }, []);

//   // if (!bookingData) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>Table:</strong> {bookingData.table}</p>
//       <p><strong>Date:</strong> {bookingData.date}</p>
//       <p><strong>Time:</strong> {bookingData.startTime} - {bookingData.endTime}</p>
//       <p><strong>User:</strong> {bookingData.user}</p>
//       <p><strong>Phone:</strong> {bookingData.phone}</p>
//     </div>
//   );
// }

// export default DeskReservations;

///////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';

// interface BookingData {
//   table: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   user: string;
//   phone: string;
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData | null>(null);

//   useEffect(() => {
//     const storedData = localStorage.getItem('bookingData');
//     if (storedData) {
//       setBookingData(JSON.parse(storedData));
//     }
//   }, []);

//   // if (!bookingData) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>Table:</strong> {bookingData.table}</p>
//       <p><strong>Date:</strong> {bookingData.date}</p>
//       <p><strong>Time:</strong> {bookingData.startTime} - {bookingData.endTime}</p>
//       <p><strong>User:</strong> {bookingData.user}</p>
//       <p><strong>Phone:</strong> {bookingData.phone}</p>
//     </div>
//   );
// }

// export default DeskReservations;
///////////////////////////////////////////////////////////////////////////////////////////////////////

// import { CREATE_BOOKING_ENDPOINT } from '@/utils/constants/endpoints';
// import axios from 'axios';
// import router from 'next/dist/client/router';
// import React, { ChangeEvent, useEffect, useState } from 'react';

// interface BookingData {
//   table: string,
//   user: string,
//   startTime: string,
//   endTime: string,
//   date: string,
//   dish: string[],
//   totalmoney: number,
//   type: string
// }

// const DeskReservations: React.FC = () => {


//   const [bookingData, setbookingData] = useState<bookingData>({
//     table: "",
//     user: "",
//     startTime: "",
//     endTime: "",
//     date: "",
//     dish: [],
//     totalmoney: 0,
//     type: ""
//   });


//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const ResponseType = await axios.get(GET_TABLES_ENDPOINT, {
//           withCredentials: true,
//         });
//         setTables(ResponseType.data);
//         // const ResponseDish = await axios.get(GET_DISHS_ENDPOINT, {
//         //   withCredentials: true,
//         // });
//         // setDishs(ResponseDish.data);

//         setDetails(res.data);
//         console.log("data", details);
//       } catch (error) {
//         console.log("Error USERRRRRR:", error);
//       }
//     }
//     fetch();
//   }, []);

//   const [BookingData, setBookingData] = useState<BookingData>({
//     table: "",
//     user: "",
//     startTime: "",
//     endTime: "",
//     date: "",
//     dish: [],
//     totalmoney: 0,
//     type: ""
//   });

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setBookingData({ ...BookingData, [name]: value });
//   };

//   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setBookingData({ ...BookingData, [name]: value });
//     const selectedOption = event.target.selectedOptions[0];
//     const dataName = selectedOption.getAttribute("data-name");
//     // console.log("ten nam o day", dataName);
//     if (dataName) {
//       setSelectedTableName(dataName); // Lưu tên bảng đã chọn vào state
//     }

//     console.log("Tên bảng đã chọn:", dataName);
//   };
// const [showConfirmation, setShowConfirmation] = useState(false)
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowConfirmation(true);

//   };
//   const handleCancel = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowConfirmation(false);

//   };

//   const handleAccept = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const startDateTime = new Date(`${BookingData.date}T${BookingData.startTime}:00Z`);
//     const endDateTime = new Date(`${BookingData.date}T${BookingData.endTime}:00Z`);
//     if(details){
//       // const validationErrors = validate(BookingData);
//     // if (Object.keys(validationErrors).length === 0) {

//       try {
//         const data = {
//           ...BookingData, 
//           startTime: startDateTime.toISOString(), 
//           endTime: endDateTime.toISOString(), 
//           type: "new",
//         };

//         const response = await axios.put(CREATE_BOOKING_ENDPOINT(BookingData.table), data);
//         if (response.status === 200) {
//           alert('User has been created.');
//            setShowConfirmation(false);
//         } else {
//           alert('Error creating user.');
//         }
//       } catch (error) {
//         console.error('Error creating user:', error);
//         alert('Error creating user.');
//       }
//     // } else {
//     //   setErrors(validationErrors);
//     // }
//     }
//     else{
//       router.push("/login");
//     }

//   }


//   // if (!bookingData) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>Table:</strong> {bookingData.table}</p>
//       <p><strong>Date:</strong> {bookingData.date}</p>
//       <p><strong>Time:</strong> {bookingData.startTime} - {bookingData.endTime}</p>
//       <p><strong>User:</strong> {bookingData.user}</p>
//       <p><strong>Phone:</strong> {bookingData.phone}</p>
//     </div>
//   );
// }

// export default DeskReservations;
// function setSelectedTableName(dataName: any) {
//   throw new Error('Function not implemented.');
// }

// function setTables(data: any) {
//   throw new Error('Function not implemented.');
// }

// function setDetails(data: any) {
//   throw new Error('Function not implemented.');
// }

///////////////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';
// import router from 'next/dist/client/router';
// import React, { useEffect, useState } from 'react';

// interface Booking {
//   time: string;
//   dish: string[];
//   totalmoney: number;
//   user: string;
//   type: string;
// }

// interface BookingData {
//   _id: string;
//   type: string;
//   quantity: number;
//   description: string;
//   image: string[];
//   booking: Booking[];
//   name: string;
//   updatedAt: string;
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData>();
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     const fetchBookingData = async () => {
//       try {
//         const response = await axios.get('/api/getBookingDetails', {
//           withCredentials: true,
//         });
//         setBookingData(response.data);
//       } catch (error) {
//         console.log("Error fetching booking data:", error);
//       }
//     };

//     fetchBookingData();
//   }, []);

//   const handleAccept = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (bookingData) {
//       try {
//         const response = await axios.put(`/api/updateBooking/${bookingData._id}`, bookingData);
//         if (response.status === 200) {
//           alert('Booking has been updated.');
//           setShowConfirmation(false);
//         } else {
//           alert('Error updating booking.');
//         }
//       } catch (error) {
//         console.error('Error updating booking:', error);
//         alert('Error updating booking.');
//       }
//     } else {
//       router.push("/login");
//     }
//   };

//   // if (!bookingData) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>ID:</strong> {bookingData._id}</p>
//       <p><strong>Name:</strong> {bookingData.name}</p>
//       <p><strong>Type:</strong> {bookingData.type}</p>
//       <p><strong>Description:</strong> {bookingData.description}</p>
//       <p><strong>Quantity:</strong> {bookingData.quantity}</p>
//       <p><strong>Images:</strong> {bookingData.image.join(', ')}</p>
//       {bookingData.booking.map((booking, index) => (
//         <div key={index}>
//           <p><strong>Booking Time:</strong> {new Date(booking.time).toLocaleString()}</p>
//           <p><strong>Dishes:</strong> {booking.dish.join(', ')}</p>
//           <p><strong>Total Money:</strong> {booking.totalmoney}</p>
//           <p><strong>User:</strong> {booking.user}</p>
//           <p><strong>Status:</strong> {booking.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeskReservations;

///////////////////////////////////////////////////////////////////////////////////////////


// import axios from 'axios';
// import router from 'next/dist/client/router';
// import React, { useEffect, useState } from 'react';

// interface Booking {
//   time: string;
//   dish: string[];
//   totalmoney: number;
//   user: string;
//   type: string;
// }

// interface BookingData {
//   _id: string;
//   type: string;
//   quantity: number;
//   description: string;
//   image: string[];
//   booking: Booking[];
//   name: string;
//   updatedAt: string;
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData | null>(null);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     const fetchBookingData = async () => {
//       try {
//         const response = await axios.get('/api/getBookingDetails', {
//           withCredentials: true,
//         });
//         setBookingData(response.data);
//       } catch (error) {
//         console.log("Error fetching booking data:", error);
//       }
//     };

//     fetchBookingData();
//   }, []);

//   const handleAccept = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (bookingData) {
//       try {
//         const response = await axios.put(`/api/updateBooking/${bookingData._id}`, bookingData);
//         if (response.status === 200) {
//           alert('Booking has been updated.');
//           setShowConfirmation(false);
//         } else {
//           alert('Error updating booking.');
//         }
//       } catch (error) {
//         console.error('Error updating booking:', error);
//         alert('Error updating booking.');
//       }
//     } else {
//       router.push("/login");
//     }
//   };

//   // Render loading state if bookingData is null
//   // if (bookingData === null) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>ID:</strong> {bookingData._id}</p>
//       <p><strong>Name:</strong> {bookingData.name}</p>
//       <p><strong>Type:</strong> {bookingData.type}</p>
//       <p><strong>Description:</strong> {bookingData.description}</p>
//       <p><strong>Quantity:</strong> {bookingData.quantity}</p>
//       <p><strong>Images:</strong> {bookingData.image.join(', ')}</p>
//       {bookingData.booking.map((booking, index) => (
//         <div key={index}>
//           <p><strong>Booking Time:</strong> {new Date(booking.time).toLocaleString()}</p>
//           <p><strong>Dishes:</strong> {booking.dish.join(', ')}</p>
//           <p><strong>Total Money:</strong> {booking.totalmoney}</p>
//           <p><strong>User:</strong> {booking.user}</p>
//           <p><strong>Status:</strong> {booking.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeskReservations;

////////////////////////////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import {
//     GET_TABLES_ENDPOINT,

//   } from "@/utils/constants/endpoints";
// interface BookingData {
//   _id: string;
//   type: string;
//   quantity: number;
//   description: string;
//   image: string[];
//   booking: {
//     time: string;
//     dish: string[];
//     totalmoney: number;
//     user: string;
//     type: string;
//   }[];
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData >();

//   useEffect(() => {
//     const fetchBookingData = async () => {
//       try {
//         const response = await axios.get('/api/getTables', {
//           withCredentials: true,
//         });
//         setBookingData(response.data);
//       } catch (error) {
//         console.error("Error fetching booking data:", error);
//       }
//     };

//     fetchBookingData();
//   }, []);

//   // if (!bookingData) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>Table ID:</strong> {bookingData._id}</p>
//       <p><strong>Type:</strong> {bookingData.type}</p>
//       <p><strong>Quantity:</strong> {bookingData.quantity}</p>
//       <p><strong>Description:</strong> {bookingData.description}</p>
//       <p><strong>Images:</strong></p>
//       <ul>
//         {bookingData.image.map((img, index) => (
//           <li key={index}>{img}</li>
//         ))}
//       </ul>
//       <h2>Booking Details:</h2>
//       {bookingData.booking.map((booking, index) => (
//         <div key={index}>
//           <p><strong>Time:</strong> {new Date(booking.time).toLocaleString()}</p>
//           <p><strong>Dishes:</strong> {booking.dish.join(', ')}</p>
//           <p><strong>Total Money:</strong> {booking.totalmoney}</p>
//           <p><strong>User:</strong> {booking.user}</p>
//           <p><strong>Status:</strong> {booking.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeskReservations;
////////////////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { GET_TABLES_ENDPOINT } from "@/utils/constants/endpoints";

// interface BookingData {
//   _id: string;
//   type: string;
//   quantity: number;
//   description: string;
//   image: string[];
//   booking: {
//     time: string;
//     dish: string[];
//     totalmoney: number;
//     user: string;
//     type: string;
//   }[];
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData | null>(null);

//   useEffect(() => {
//     const fetchBookingData = async () => {
//       try {
//         const response = await axios.get(GET_TABLES_ENDPOINT, {
//           withCredentials: true,
//         });
//         setBookingData(response.data);
//       } catch (error) {
//         console.error("Error fetching booking data:", error);
//       }
//     };

//     fetchBookingData();
//   }, []);

//   // Kiểm tra nếu `bookingData` là `null` hoặc `undefined` trước khi hiển thị
//   if (!bookingData) {
//     return <p>No booking data available</p>;
//   }

//   return (
//     <div>
//       <h1>Booking Details</h1>
//       <p><strong>Table ID:</strong> {bookingData._id}</p>
//       <p><strong>Type:</strong> {bookingData.type}</p>
//       <p><strong>Quantity:</strong> {bookingData.quantity}</p>
//       <p><strong>Description:</strong> {bookingData.description}</p>
//       <p><strong>Images:</strong></p>
//       <ul>
//         {bookingData.image.map((img, index) => (
//           <li key={index}>{img}</li>
//         ))}
//       </ul>
//       <h2>Booking Details:</h2>
//       {bookingData.booking.map((booking, index) => (
//         <div key={index}>
//           <p><strong>Time:</strong> {new Date(booking.time).toLocaleString()}</p>
//           <p><strong>Dishes:</strong> {booking.dish.join(', ')}</p>
//           <p><strong>Total Money:</strong> {booking.totalmoney}</p>
//           <p><strong>User:</strong> {booking.user}</p>
//           <p><strong>Status:</strong> {booking.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeskReservations;
//////////////////////////////////////////////////////////


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import router, { Router, useRouter } from "next/router";
// import Layout from '@/components/layout';
// import { GET_TABLES_ENDPOINT } from "@/utils/constants/endpoints";

// interface BookingData {
//   img: string;
//   _id: string;
//   type: string;
//   quantity: number;
//   description: string;
//   image: string[];
//   booking: {
//     time: Date;
//     dish: Array[];
//     totalmoney: number;
//     user: string;
//     type: string;
//   }[];
// }

// const DeskReservations: React.FC = () => {
//   const [bookingData, setBookingData] = useState<BookingData>();

//   useEffect(() => {
//     const fetchBookingData = async () => {
//       try {
//         const response = await axios.get(GET_TABLES_ENDPOINT, {
//           withCredentials: true,
//         });
//         setBookingData(response.data);
//       } catch (error) {
//         console.error("Error fetching booking data:", error);
//       }
//     };

//     fetchBookingData();
//   }, []);

//   // Kiểm tra nếu `bookingData` là `null` hoặc `undefined` trước khi hiển thị
//   // if (!bookingData) {
//   //   return <p>No booking data available</p>;
//   // }

//   return (
//     <Layout>
//     <div className="container mx-auto py-[11%] border-b-black">
//       <div className="relative top-[110px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
//         <div className="w-full md:w-1/2 p-5">
//           <h1 className="text-center text-2xl text-[#C9AB81]">Booking Details</h1>
//           <div className="mt-5 ml-[25%] text-white h-[100%] w-[60%] justify-items-center">
//             {bookingData?.img ? (
//               <img src={bookingData.img || "Not specified"} alt="Profile" />
//             ) : (
//               <p>No image available</p>
//             )}
//           </div>


//           <div className="flex items-center my-4">
//             <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Table ID:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {bookingData?._id || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>


//           <div className="flex items-center my-4">
//             <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Type:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {bookingData?.type || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Quantity:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {bookingData?.quantity || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>


//           <div className="flex items-center my-4">
//             <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Description:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {bookingData?.description || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>
//         </div>
//       </div>



     
       
//           {/* {bookingData?.booking.map((booking, index) => (
//              <div className="top-[510] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
//              <div className="w-full md:w-1/2 p-5">
//              <h1 className="text-center text-2xl text-[#C9AB81]">Booking Details:</h1>
   
//             <div key={index}>

//               <div className="flex items-center my-4">
//                 <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Time:</label>
//                 <div className="w-2/3 ml-[-40px]">
//                   <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                     {new Date(booking?.time).toLocaleString() || "Not specified"}
//                   </span>
//                   <div className="border-b border-[#C9AB81] mt-1"></div>
//                 </div>
//               </div>

//               <div className="flex items-center my-4">
//                 <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Dishes:</label>
//                 <div className="w-2/3 ml-[-40px]">
//                   <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                     {booking?.dish.join(', ') || "Not specified"}
//                   </span>
//                   <div className="border-b border-[#C9AB81] mt-1"></div>
//                 </div>
//               </div>

//               <div className="flex items-center my-4">
//                 <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Total Money:</label>
//                 <div className="w-2/3 ml-[-40px]">
//                   <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                     {booking?.totalmoney || "Not specified"}
//                   </span>
//                   <div className="border-b border-[#C9AB81] mt-1"></div>
//                 </div>
//               </div>

//               <div className="flex items-center my-4">
//                 <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">User:</label>
//                 <div className="w-2/3 ml-[-40px]">
//                   <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                     {booking?.user || "Not specified"}
//                   </span>
//                   <div className="border-b border-[#C9AB81] mt-1"></div>
//                 </div>
//               </div>

//               <div className="flex items-center my-4">
//                 <label htmlFor="phone" className="block text-lg font-medium text-[#C9AB81] w-1/3">Status:</label>
//                 <div className="w-2/3 ml-[-40px]">
//                   <span id="phone" className="h-10 text-[#f9f9f8] rounded pl-2">
//                     {booking?.type || "Not specified"}
//                   </span>
//                   <div className="border-b border-[#C9AB81] mt-1"></div>
//                 </div>
//               </div>

//             </div>
//             </div>
//             </div>
//           ))} */}
        
      


//     </div>
//     </Layout>
//   );
// };

// export default DeskReservations;

////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import { GET_TABLES_ENDPOINT } from "@/utils/constants/endpoints";

interface BookingData {
  _id: string;
  type: string;
  quantity: number;
  description: string;
  image: string[];
  booking: Booking[];
}

interface Booking {
  time: Date;
  dish: string[]; // Đảm bảo dish là mảng string
  totalmoney: number; // Chuyển đổi kiểu dữ liệu từ string sang number
  user: string;
  type: string;
}



const DeskReservations: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingData>();

  // const GET_TABLES_ENDPOINT = `http://localhost:8800/api/Table?userId`;
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(GET_TABLES_ENDPOINT, {
          withCredentials: true,
        });
        setBookingData(response.data);
        console.log("gygyugu",bookingData);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };
    // const [showConfirmation, setShowConfirmation] = useState(false)

    fetchBookingData();
  }, []);

  // if (!bookingData) {
  //   return <p>No booking data available</p>;
  // }

  return (
    <Layout>
      <div className="container mx-auto py-[11%] border-b-black">
        <div className="relative top-[110px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-5">
          
            <h1 className="text-center text-2xl text-[#C9AB81]">Booking Details:</h1>
            <div className="mt-5 ml-[25%] text-white h-[100%] w-[60%] justify-items-center">
              {bookingData?.image && bookingData.image.length > 0 ? (
                bookingData.image.map((img, index) => (
                  <img key={index} src={img} alt={`Image ${index + 1}`} />
                ))
              ) : (
                <p>No image available</p>
              )}
            </div>

            <div className="flex items-center my-4">
              <label htmlFor="tableId" className="block text-lg font-medium text-[#C9AB81] w-1/3">Table ID:</label>
              <div className="w-2/3 ml-[-40px]">
                <span id="tableId" className="h-10 text-[#f9f9f8] rounded pl-2">
                  {bookingData?._id || "Not specified"}
                </span>
                <div className="border-b border-[#C9AB81] mt-1"></div>
              </div>
            </div>

            <div className="flex items-center my-4">
              <label htmlFor="type" className="block text-lg font-medium text-[#C9AB81] w-1/3">Type:</label>
              <div className="w-2/3 ml-[-40px]">
                <span id="type" className="h-10 text-[#f9f9f8] rounded pl-2">
                  {bookingData?.type || "Not specified"}
                </span>
                <div className="border-b border-[#C9AB81] mt-1"></div>
              </div>
            </div>

            <div className="flex items-center my-4">
              <label htmlFor="quantity" className="block text-lg font-medium text-[#C9AB81] w-1/3">Quantity:</label>
              <div className="w-2/3 ml-[-40px]">
                <span id="quantity" className="h-10 text-[#f9f9f8] rounded pl-2">
                  {bookingData?.quantity || "Not specified"}
                </span>
                <div className="border-b border-[#C9AB81] mt-1"></div>
              </div>
            </div>

            <div className="flex items-center my-4">
              <label htmlFor="description" className="block text-lg font-medium text-[#C9AB81] w-1/3">Description:</label>
              <div className="w-2/3 ml-[-40px]">
                <span id="description" className="h-10 text-[#f9f9f8] rounded pl-2">
                  {bookingData?.description || "Not specified"}
                </span>
                <div className="border-b border-[#C9AB81] mt-1"></div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Hiển thị các booking */}
        <div className="relative top-[-70px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-5">
          <h2 className="text-center text-2xl text-[#C9AB81] ">Booking Details Details :</h2>
            {bookingData?.booking.map((booking, index) => (
              <div key={index} >
    
                <div className="flex items-center my-4">
                  <label htmlFor={`time-${index}`} className="block text-lg font-medium text-[#C9AB81] w-1/3">Time:</label>
                  <div className="w-2/3 ml-[-40px]">
                    <span id={`time-${index}`} className="h-10 text-[#f9f9f8] rounded pl-2">
                      {new Date(booking.time).toLocaleString() || "Not specified"}
                    </span>
                    <div className="border-b border-[#C9AB81] mt-1"></div>
                  </div>
                </div>

                <div className="flex items-center my-4">
                  <label htmlFor={`dishes-${index}`} className="block text-lg font-medium text-[#C9AB81] w-1/3">Dishes:</label>
                  <div className="w-2/3 ml-[-40px]">
                    <span id={`dishes-${index}`} className="h-10 text-[#f9f9f8] rounded pl-2">
                      {booking.dish.join(', ') || "Not specified"}
                    </span>
                    <div className="border-b border-[#C9AB81] mt-1"></div>
                  </div>
                </div>

                <div className="flex items-center my-4">
                  <label htmlFor={`totalmoney-${index}`} className="block text-lg font-medium text-[#C9AB81] w-1/3">Total Money:</label>
                  <div className="w-2/3 ml-[-40px]">
                    <span id={`totalmoney-${index}`} className="h-10 text-[#f9f9f8] rounded pl-2">
                      {booking.totalmoney || "Not specified"}
                    </span>
                    <div className="border-b border-[#C9AB81] mt-1"></div>
                  </div>
                </div>

                <div className="flex items-center my-4">
                  <label htmlFor={`user-${index}`} className="block text-lg font-medium text-[#C9AB81] w-1/3">User:</label>
                  <div className="w-2/3 ml-[-40px]">
                    <span id={`user-${index}`} className="h-10 text-[#f9f9f8] rounded pl-2">
                      {booking.user || "Not specified"}
                    </span>
                    <div className="border-b border-[#C9AB81] mt-1"></div>
                  </div>
                </div>

                <div className="flex items-center my-4">
                  <label htmlFor={`status-${index}`} className="block text-lg font-medium text-[#C9AB81] w-1/3">Status:</label>
                  <div className="w-2/3 ml-[-40px]">
                    <span id={`status-${index}`} className="h-10 text-[#f9f9f8] rounded pl-2">
                      {booking.type || "Not specified"}
                    </span>
                    <div className="border-b border-[#C9AB81] mt-1"></div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            </div>
      </div>
    </Layout>
  );
};

export default DeskReservations;
