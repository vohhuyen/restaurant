<<<<<<< HEAD

import Footer from '../components/layout/Footer';
import CardDish from '../components/CardDish';
import Chef from '../components/Chef';
import React from 'react';
import Menu from '@/components/Menu';
import Navbar  from '@/components/layout/Navbar ';
import Slide from '@/components/Slide';
import Booking from '@/pages/Booking';
import Layout from '@/components/layout';
import Blog from '@/components/blog';
import Index from '@/components/auth/Index';
import BannerHome from '@/components/bannerHome';
import Profiles from '@/components/profile_user/Profile'
import Bookings from '@/components/Booking/Booking'
import DateTimeForm from '@/components/DateTimeForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Error from '@/components/ui/Error';
import ResetPassword from '@/components/auth/ResetPassword';
import DeskReservation from '@/components/Booking/DeskReservations';
import FormBooking1 from '@/components/Booking/FormBooking1';
import ResetPasswords from '@/components/aut/Login';
import PortPage from '@/components/PortPage';
import DishDetails from '@/components/DishDetails';
import BlogClassic from '@/components/BlogClassic';



export default function Home() {
  const { status, message } = useSelector((state: RootState) => state.error);
  return (
    <div>
        <div className="z-10">
            {status && message && <Error state={status} message={message} />}
            </div>
{/* <Menu></Menu> */}
      {/* <Footer /> */}
      {/* <CardDish /> */}
      {/* <Chef/> */}
      {/* <Slide/> */}
      {/* <Menu/> */}
     {/* <Booking/> */}
     {/* <Blog/> */}
     {/* <BlogClassic/> */}
     {/* <PortPage/>  */}
      {/* <DishDetails/> */}
     {/* <Login /> */}
     {/* <Index/> */}
      {/* <Navbar /> */}
      {/* <Layout/> */}
      {/* <FormBooking/> */}
      <BannerHome></BannerHome>
      {/* <ResetPassword></ResetPassword> */}
      {/* <DateTimeForm/> */}
      {/* <UpdateProfile /> */}
      {/* <Profiles /> */}
      {/* <DeskReservation></DeskReservation> */}
      {/* <FormBooking1/> */}
     {/* <ResetPasswords/> */}
    </div>
  );
}




=======
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
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
