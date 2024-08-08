    // import Image from "next/image";
// import { useEffect } from "react";

// const Login = () => {
//   useEffect(() => {
//     const images = document.querySelectorAll(".image-container img");
//     let index = 0;

//     const enlargeImage = () => {
//       images.forEach((img, i) => {
//         img.classList.toggle("enlarged", i === index);
//       });
//       index = (index + 1) % images.length;
//     };

//     const interval = setInterval(enlargeImage, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex h-screen relative">
//       <img
//         src="/images/wall1.jpg"
//         alt="wall"
//         className="absolute top-0 left-0 h-screen w-screen"
//       />
//       <img
//         src="/images/wall-hei.jpg"
//         alt="wall"
//         className="absolute top-0 h-screen w-60 left-60 bg-gray-600"
//       />
//       <div className="image-container relative h-full">
//         <Image
//           src="/images/dish1.png"
//           alt="Food"
//           width={330}
//           height={330}
//           className="transition-all duration-1000 absolute left-[-100px] top-[10px]"
//         />
//         <Image
//           src="/images/dish1.png"
//           alt="Food"
//           width={400}
//           height={400}
//           className="transition-all duration-1000 absolute left-[15px] top-[40px]"
//         />
//         <Image
//           src="/images/dish3.png"
//           alt="Food"
//           width={430}
//           height={430}
//           className="transition-all duration-1000 absolute left-[150px] top-[200px] z-[3]"
//         />
//         <Image
//           src="/images/dish1.png"
//           alt="Food"
//           width={400}
//           height={400}
//           className="transition-all duration-1000 absolute left-[15px] top-[310px] mt-20 z-[2]"
//         />
//         <Image
//           src="/images/dish1.png"
//           alt="Food"
//           width={330}
//           height={350}
//           className="transition-all duration-1000 absolute left-[-100px] top-[400px] mt-20"
//         />
//       </div>
//       <div className="w-1/2 flex flex-col justify-center items-center relative bg-yellow-50">
//         <h1 className="text-4xl font-bold mb-8">Login Form</h1>
//         <form className="w-3/4 max-w-md">
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Username"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border rounded-lg"
//             />
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <a href="#" className="text-sm text-blue-600">
//               Forgot Password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-3 bg-green-500 text-white rounded-lg"
//           >
//             Login
//           </button>
//           <div className="flex items-center my-4">
//             <span className="flex-grow border-t border-gray-300"></span>
//             <span className="mx-4 text-gray-300">Sau</span>
//             <span className="flex-grow border-t border-gray-300"></span>
//           </div>
//           <div className="flex justify-around mb-4">
//             <button className="w-1/2 p-3 bg-blue-600 text-white rounded-lg mr-2">
//               Google
//             </button>
//             <button className="w-1/2 p-3 bg-blue-800 text-white rounded-lg ml-2">
//               Facebook
//             </button>
//           </div>
//           <p className="text-sm text-center">
//             No Password?{" "}
//             <a href="#" className="text-green-600">
//               Register here
//             </a>
//           </p>
//         </form>
//       </div>

//       <style jsx>{`
//         .image-container {
//           display: flex;
//           flex-direction: column;
//           justify-content: space-around;
//           align-items: center;
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Login;
