

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../layout";
// import { GET_PROFILE_USE, GET_TABLES_ENDPOINT } from "@/utils/constants/endpoints";

// interface FormData {
//   table: string;
//   user: string;
//   startTime: string;
//   endTime: string;
//   date: string;
//   dish: string[];
//   totalmoney: number;
//   type: string;
// }

// interface UserDetails {
//   _id: string;
//   name: string;
//   email: string;
//   gender: string;
//   phone: string;
//   img: string;
// }

// const DeskReservation: React.FC = () => {
//   const [details, setDetails] = useState<UserDetails >();
//   const [formData, setFormData] = useState<FormData >();
//   // const [selectedTableName, setSelectedTableName] = useState<string >();
//   // const [selectedTableName, setSelectedTableName] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Gọi API để lấy thông tin người dùng
//         const profileResponse = await axios.get(GET_PROFILE_USE, { withCredentials: true });
//         setDetails(profileResponse.data);
  
//         // Lấy thông tin đặt bàn từ API (hoặc từ localStorage nếu cần)
//         const tableResponse = await axios.get(GET_TABLES_ENDPOINT, { withCredentials: true });
//         setFormData(tableResponse.data);
  
//         // const table = tableResponse.data.find((t: { _id: string }) => t._id === tableId);
//         // setSelectedTableName(table?.name || "Not specified");
    
//         // Xử lý nếu có thêm thông tin khác cần thiết lập sau khi nhận được dữ liệu
//         // Ví dụ: 
//         // setSelectedTableName(tableResponse.data.someField);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Xử lý lỗi hoặc gán giá trị mặc định
//         // setSelectedTableName("Error fetching table name");
//       }
//     };
  
//     fetchData();
//   }, []);
  


//   return (
//     <Layout>
//       <div className="relative top-[110px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
//         <div className="w-full md:w-1/2 p-5">
//           <h1 className="text-center text-2xl text-[#C9AB81]">Reservation Details</h1>
//           {/* <div className="mt-5 ml-[25%] text-white h-[100%] w-[60%] justify-items-center">
//             {details.img ? (
//               <img src={details.img} alt="Profile" />
//             ) : (
//               <p>No image available</p>
//             )}
//           </div> */}
//         </div>
//         <div className="w-full md:w-1/2 p-20">
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
//             <label htmlFor="table" className="block text-lg font-medium text-[#C9AB81] w-1/3">Table:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="table" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {/* {selectedTableName || "Not specified"} */}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="date" className="block text-lg font-medium text-[#C9AB81] w-1/3">Date:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="date" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {formData?.date || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="time" className="block text-lg font-medium text-[#C9AB81] w-1/3">Time:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="time" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {formData?.startTime || "Not specified"} - {formData?.endTime || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default DeskReservation;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../layout";
// import { GET_PROFILE_USE, GET_TABLES_ENDPOINT } from "@/utils/constants/endpoints";

// interface FormData {
//   table: string;
//   user: string;
//   startTime: string;
//   endTime: string;
//   date: string;
//   dish: string[];
//   totalmoney: number;
//   type: string;
// }

// interface UserDetails {
//   _id: string;
//   name: string;
//   email: string;
//   gender: string;
//   phone: string;
//   img: string;
// }

// const DeskReservation: React.FC = () => {
//   const [details, setDetails] = useState<UserDetails >();
//   const [formData, setFormData] = useState<FormData >();
//   const [tableName, setTableName] = useState<string >();
//   // const [formData, setFormData] = useState<FormData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Gọi API để lấy thông tin người dùng
//         const profileResponse = await axios.get(GET_PROFILE_USE, { withCredentials: true });
//         setDetails(profileResponse.data);

//         // Gọi API để lấy thông tin các bảng
//         const tableResponse = await axios.get(GET_TABLES_ENDPOINT, { withCredentials: true });
//         const tables = tableResponse.data;

          
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setTableName("Error fetching table name");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <div className="relative top-[110px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
//         <div className="w-full md:w-1/2 p-5">
//           <h1 className="text-center text-2xl text-[#C9AB81]">Reservation Details</h1>
//           <div className="mt-5 ml-[25%] text-white h-[100%] w-[60%] justify-items-center">
//             {details?.img ? (
//               <img src={details.img} alt="Profile" />
//             ) : (
//               <p>No image available</p>
//             )}
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 p-20">
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
//             <label htmlFor="table" className="block text-lg font-medium text-[#C9AB81] w-1/3">Table:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="table" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {tableName || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="date" className="block text-lg font-medium text-[#C9AB81] w-1/3">Date:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="date" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {/* {formData?.date || "Not specified"}  */}
//                 {formData?.date}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>

//           <div className="flex items-center my-4">
//             <label htmlFor="time" className="block text-lg font-medium text-[#C9AB81] w-1/3">Time:</label>
//             <div className="w-2/3 ml-[-40px]">
//               <span id="time" className="h-10 text-[#f9f9f8] rounded pl-2">
//                 {formData?.startTime || "Not specified"} - {formData?.endTime || "Not specified"}
//               </span>
//               <div className="border-b border-[#C9AB81] mt-1"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default DeskReservation;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '@/components/layout/Navbar';
import { GET_TABLES_ENDPOINT, GET_PROFILE_USE } from "@/utils/constants/endpoint";

interface Booking {
  table: {
    name: string;
    type: string;
  };
  startTime: string;
  endTime: string;
}

interface UserDetails {
  _id: string;
  name: string;
  phone: string;
  bookings: Booking[];
}

const DeskReservation: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(GET_PROFILE_USE, {
          withCredentials: true,
        });
        const userData = userResponse.data;

        const bookingsResponse = await axios.get(
          `${GET_TABLES_ENDPOINT}/${userData._id}`,
          {
            withCredentials: true,
          }
        );
        const bookingsData = bookingsResponse.data;

        const updatedUserData = { ...userData, bookings: bookingsData };
        setUserDetails(updatedUserData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userDetails && (
        <div className="relative top-[110px] bg-black min-h-screen container mx-auto flex flex-wrap items-center">
          <div>
            <h1 className="text-[#C9AB81]">User Details</h1>
            <p className="text-[#C9AB81]">Name: {userDetails.name}</p>
            <p className="text-[#C9AB81]">Phone: {userDetails.phone}</p>
            <h2 className="text-[#C9AB81]">Bookings</h2>
            {userDetails.bookings.map((booking, index) => (
              <div key={index}>
                <p>Table Name: {booking.table.name}</p>
                <p>Table Type: {booking.table.type}</p>
                <p>Start Time: {new Date(booking.startTime).toLocaleString()}</p>
                <p>End Time: {new Date(booking.endTime).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeskReservation;
