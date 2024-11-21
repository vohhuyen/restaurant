import React, { useEffect, useState } from "react";
import axios from "axios";
import DishDetails from "@/components/DishDetails"; 
import PortfolioComponent from "@/components/DishDetails";
import { GET_DISHS_ENDPOINT } from "@/utils/constants/endpoint";

type Evalue = {
  star: number;
  comment: string;
  idUser: string;
  userName: string;
  userAvatar: string;
};

type Post = {
  star: React.ReactNode;
  _id: string;
  name: string;
  chef: string[]; 
  type: string;
  image: string[];
  slug: string;
  evalue: Evalue[];
  description: string;
  price: string;
  rating: number;
  createdAt?: string;
  updatedAt?: string;
};

const PortPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(GET_DISHS_ENDPOINT);
        setPost(response.data[0]);  
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  const renderReviews = () => {
    if (!post || !post.evalue) return null;

    return post.evalue.map((review, index) => (
      <div key={index} className="flex items-start mb-6 bg-gray-800 p-4 rounded-lg shadow-lg">
        <img src={review.userAvatar} alt={review.userName} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-lg font-semibold text-white">{review.userName}</p>
          <div className="flex items-center mb-2">
            {[...Array(review.star)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.387 4.26h4.48c.969 0 1.37 1.24.588 1.81l-3.628 2.63 1.387 4.26c.3.921-.755 1.688-1.538 1.118l-3.628-2.63-3.628 2.63c-.783.57-1.838-.197-1.538-1.118l1.387-4.26-3.628-2.63c-.783-.57-.381-1.81.588-1.81h4.48l1.387-4.26z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-300">{review.comment}</p>
        </div>
      </div>
    ));
  };

  if (isLoading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ backgroundColor: "#0b1315" }}>
      <div className="min-h-screen w-full flex flex-col">
        <div className="flex justify-between items-center p-10">
          <div className="flex text-custom-yellow uppercase text-2xl">
            <p className="tracking-[5px]">Shrimp</p>
            <p className="tracking-[5px] ml-5">Pasta</p>
          </div>
          <div className="flex text-white text-lg">
            <p>Home</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.3 8.5"
              className="w-2 h-2 text-custom-yellow mt-1 ml-2"
            >
              <polyline
                points="0.4 0.4 3.6 4.2 0.4 8.1"
                fill=""
                stroke="currentColor"
                strokeWidth="1"
              ></polyline>
              <polyline
                points="4.5 0.4 7.7 4.2 4.5 8.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              ></polyline>
            </svg>
            <p className="ml-2">Main Course</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.3 8.5"
              className="w-2 h-2 text-custom-yellow mt-1 ml-2"
            >
              <polyline
                points="0.4 0.4 3.6 4.2 0.4 8.1"
                fill=""
                stroke="currentColor"
                strokeWidth="1"
              ></polyline>
              <polyline
                points="4.5 0.4 7.7 4.2 4.5 8.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              ></polyline>
            </svg>
            <p className="ml-2">Shrimp Pasta</p>
          </div>
        </div>

        <div className="flex-grow px-10">
          <PortfolioComponent />
        </div>

        <div className="bg-gray-900 p-10 mt-10">
          <h2 className="text-3xl font-bold text-white mb-6">Reviews</h2>
          <div className="space-y-4">
            {renderReviews()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortPage;
