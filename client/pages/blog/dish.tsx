import React, { useEffect, useState } from "react";
import DishComponent from "@/components/DishComponent";
import { GET_DISHS_ENDPOINT } from "@/utils/constants/endpoint";
import Layout from "@/components/layout";

const BlogDishPage: React.FC = () => {
  return (
    <div
      className="min-h-screen relative z-0"
      style={{ backgroundColor: "#0b1315" }}
    >
      <Layout>
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-10">
            <div className="flex-1 text-custom-yellow uppercase mt-36 ml-32 text-xl tracking-[5px]">
            <p>Three Columns Portfolio</p>
          </div>
            <div className="flex items-center text-white mt-36 mr-32 text-base">
            <p className="mr-3">Home</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.3 8.5"
              className="w-2 h-2 text-custom-yellow"
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
            <p className="ml-3">Three Columns Portfolio</p>
          </div>
          </div>

          <DishComponent selectedCategory={""} />
        </div>
      </Layout>
    </div>
  );
};

export default BlogDishPage;
