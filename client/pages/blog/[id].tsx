import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { GET_NEW_ENDPOINT } from "@/utils/constants/endpoint";
import Layout from "@/components/layout";

interface Post {
  _id: string;
  content: string;
  image: string[];
  slug: string;
  title: string;
  type: string;
  createdAt?: string;
  updatedAt?: string;
}

const BlogDetails = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = router.query; 

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          console.log(`Fetching data for id: ${id}`);
          const response = await axios.get(GET_NEW_ENDPOINT(id));
          console.log('API Response:', response.data); // Kiểm tra dữ liệu trả về từ API
          setPost(response.data);
        } catch (error) {
          console.log("Have error when call api", error);
          setError("Không thể tải bài viết.");
        }
      };
      fetchData();
    }
  }, [id]);

  if (error) {
    console.error('Error:', error); 
    return <div className="text-white">{error}</div>;
  }

  if (!post) {
    console.log('Loading...'); 
    return <div className="text-white">Loading...</div>;
  }

  return (
    <Layout>
      <div className="h-[200px]"></div>
   <div style={{ backgroundColor: "black", minHeight: "100vh", transform: "scale(0.8)", transformOrigin: "top left" }} className="text-white">
  <div className="container mx-auto p-6 ml-52">
    <div className="space-y-10">
      <div className="">
        {post.image && post.image.length > 0 ? (
          <img src={post.image[0]} alt={post.title} className="rounded-lg shadow-lg" />
        ) : (
          <div className="text-white">No image available</div>
        )}
      </div>
      <div className="flex items-center space-x-3">
        <span>Diane Johnson</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="w-2 h-2 mt-2 text-custom-yellow">
          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" fill="" stroke="currentColor" strokeWidth="1"></polyline>
          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" fill="none" stroke="currentColor" strokeWidth="1"></polyline>
        </svg>
        <span>{new Date(post.createdAt || "").toLocaleDateString()}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="w-2 h-2 mt-2 text-custom-yellow">
          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" fill="" stroke="currentColor" strokeWidth="1"></polyline>
          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" fill="none" stroke="currentColor" strokeWidth="1"></polyline>
        </svg>
        <span>{post.type}</span>
      </div>
      <div className="uppercase text-4xl mt-5 tracking-[5px] text-custom-yellow">
        {post.title}
      </div>
      <div className="mt-7 leading-loose">
        <p>{post.content}</p>
      </div>
      <div className="mt-10">
        {post.image && post.image.length > 2 ? (
          <img src={post.image[2]} alt={post.title} className="rounded-lg shadow-lg" />
        ) : (
          <div className="text-white">No additional image available</div>
        )}
        <p className="leading-loose mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut
          aliquip ex ea commodo consequat. Duis auteirm ure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupin datat non proident
          tusunt.Ut enim ad minim veniam, quis nostrud exercitation ullamco
          labori nisi ut aliquip ex ea commodo consequat enderit in
          voluptate velitess
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2 mt-10">
          <a href="#" className="text-white">Food</a>
          <span>,</span>
          <a href="#" className="text-white">Restaurant</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
};

export default BlogDetails;
