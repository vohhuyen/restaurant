import React from "react";
import Link from "next/link";
import Layout from '@/components/layout';
const MenuItem = () => {
  return (
    <Layout>
    <div className="p-4">
      <div className="flex items-center border-gray-600 pb-2">
        <div className="text-lg font-bold text-yellow-100">
          BEEF BURGER MEAL
        </div>
        <div className="flex-grow border-t mx-4 border-gray-600">
        <div className="flex-grow border-t border-gray-600 mt-2"></div>
        </div>
        <div className="text-lg font-bold text-yellow-100">$32</div>
      </div>
      <div className="text-gray-300 pt-2">
        Classic greek salad, barrel aged feta cheese, bread
      </div>
    </div>

    </Layout>
  );
};
export default function Menu() {
  return (
    <div className="container mx-auto bg-gray-800 text-white">
      <MenuItem />
    </div>
  );
}
