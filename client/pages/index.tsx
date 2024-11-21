
import Footer from '../components/layout/Footer';
import CardDish from '../components/CardDish';
import Chef from '../components/Chef';
import React from 'react';
import Menu from '@/components/Menu';
import Navbar from '@/components/layout/Navbar ';
import Slide from '@/components/Slide';
import Booking from '@/pages/Booking';
import Layout from '@/components/layout';
import Blog from '@/components/Blog';
import Index from '@/components/auth/Index';
import BannerHome from '@/components/bannerHome';
import Profiles from '@/components/profile_user/Profile'
import Bookings from '@/components/Booking/Booking'
import DateTimeForm from '@/components/DateTimeForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Error from '@/components/ui/Error';
import DeskReservation from '@/components/Booking/DeskReservations';
// import PortPage from '@/components/PortPage';
import DishDetails from '@/components/DishDetails';
import BlogClassic from '@/components/BlogClassic';
import HomeComponents from '@/components/HomeComponents';



export default function Home() {
  const { status, message } = useSelector((state: RootState) => state.error);
  return (
    <div>
      <div className="z-10">
        {status && message && <Error state={status} message={message} />}
      </div>
      <HomeComponents/>
      {/* <Footer /> */}
      {/* <CardDish /> */}
      {/* <Chef/> */}
      {/* <Slide/> */}
      {/* <Booking/> */}
      {/* <Blog/> */}
      {/* <BlogClassic/> */}
      {/* <PortPage/>  */}
      {/* <DishDetails/> */}
      {/* <Index/> */}
      {/* <Navbar /> */}
      {/* <Layout/> */}
      {/* <FormBooking/> */}
      {/* <Profiles /> */}
      {/* <Chef></Chef> */}
      {/* <Blog /> */}
    </div>
  );
}

