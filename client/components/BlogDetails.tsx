// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { GET_NEWS_ENDPOINT } from "@/utils/constants/endpoint";
// ;

// interface Post {
//   _id: string;
//   content: string;
//   image: string[];
//   slug: string;
//   title: string;
//   type: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// const BlogDetails = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(GET_NEWS_ENDPOINT, {
//             });
//             setPosts(response.data)
//         } catch (error) {
//             console.log("Have error when call api", error);
//         }
//     };
//     fetchData();
// }, []);

//   if (error) {
//     return <div className="text-white">{error}</div>;
//   }

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post._id} className="post-item">
//           <div className="mt-32">
//             <img src={post.image[0]} alt={post.title} />
//           </div>
//           <div className="flex mt-10">
//             <a className="text-white">Diane Johnson</a>
//             <div className="ml-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 8.3 8.5"
//                 className="w-2 h-2 mt-2 text-custom-yellow"
//               >
//                 <polyline
//                   points="0.4 0.4 3.6 4.2 0.4 8.1"
//                   fill=""
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 ></polyline>
//                 <polyline
//                   points="4.5 0.4 7.7 4.2 4.5 8.1"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 ></polyline>
//               </svg>
//             </div>
//             <a className="text-white ml-3">
//               {new Date(post.createdAt || "").toLocaleDateString()}
//             </a>
//             <div className="ml-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 8.3 8.5"
//                 className="w-2 h-2 mt-2 text-custom-yellow"
//               >
//                 <polyline
//                   points="0.4 0.4 3.6 4.2 0.4 8.1"
//                   fill=""
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 ></polyline>
//                 <polyline
//                   points="4.5 0.4 7.7 4.2 4.5 8.1"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 ></polyline>
//               </svg>
//             </div>
//             <a className="text-white ml-3">{post.type}</a>
//           </div>
//           <div className="flex text-custom-yellow uppercase text-4xl mt-5">
//             <p className="tracking-[5px]">{post.title}</p>
//           </div>
//           <div className="mt-7 text-white">
//             <p className="leading-loose text-white">{post.content}</p>
//           </div>
//           <div className="mt-10">
//             <img src={post.image[2]} alt={post.title} />
//             <p className="leading-loose text-white mt-10">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//               eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco labori
//               nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupin datat non proident
//               tusunt.Ut enim ad minim veniam, quis nostrud exercitation ullamco
//               labori nisi ut aliquip ex ea commodo consequat enderit in
//               voluptate velitess
//             </p>
//           </div>
//           <div className="flex justify-between">
//             <div className="text-white flex mt-10">
//               <a href="">Food</a>
//               <p>,</p>
//               <a href="" className="ml-2">
//                 Restaurant
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogDetails;
