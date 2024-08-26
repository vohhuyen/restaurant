import React from 'react';
import Menu from '@/components/Menu';
import Chef from '@/components/Chef';
// import Login from '@/components/auth/login';
import Blog from '@/components/Blog';
import DishComponent from '@/components/DishComponent';
import HomeComponents from '@/components/HomeComponents';
import Blogclassic from './blog';


const Home = () => {
  return (
    <div>
        {/* <Menu></Menu>
        <Chef></Chef> */}
        {/* <Login></Login> */}
        {/* <Blog /> */}
        {/* <DishComponent selectedCategory={''} /> */}
        {/* <Blogclassic></Blogclassic> */}
        <HomeComponents />
    </div>
  )
}

export default Home
