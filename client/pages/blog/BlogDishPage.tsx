import React, { useState } from 'react';
import DishComponent from "@/components/DishComponent";
import Layout from '@/components/layout';

const BlogDishPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Desserts', 'Main Courses', 'Recipes'];

  return (
    <Layout>
    <div
      className="relative z-0"
      style={{ backgroundColor: "#0b1315" }}
    >
      div
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-10">
          <div className="flex-1 text-custom-yellow uppercase text-xl tracking-[5px]">
            <p>Three Columns Portfolio</p>
          </div>
          <div className="flex items-center text-white text-base">
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

        <div className="flex justify-around mb-10 text-white text-lg">
          {categories.map((category) => (
            <p
              key={category}
              className={`cursor-pointer ${
                selectedCategory === category
                  ? "text-custom-yellow border-b-2 border-custom-yellow"
                  : "hover:text-custom-yellow"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>

        <DishComponent selectedCategory={selectedCategory} />
      </div>
    </div>
    </Layout>
  );
};

export default BlogDishPage;
