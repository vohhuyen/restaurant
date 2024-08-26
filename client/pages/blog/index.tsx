import React from 'react';
import DishComponent from '@/components/DishComponent';
import Blogclassic from '../blog';

const BlogIndex = () => {
  return (
    <div>
      <Blogclassic />
      <DishComponent selectedCategory={''} />

    </div>
  );
};

export default BlogIndex;
