import React, { ReactNode } from 'react';
import Navbar from './Navbar ';
import Footer from './Footer';
import Link from "next/link";
import style from "../styles/component/Navbar.module.css";
import styles from "../../styles/component/Booking.module.css";
import Head from 'next/head';
import FormBooking from '@/components/Booking/FormBooking';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="nav-md relative z-[1000]">

               <div className=" w-px z-50 border-l border-custom-brown absolute left-28 h-full"></div>
                <div className=" w-px z-50 border-l border-custom-brown absolute right-28 top-0 h-full"></div>
                {/* <header className={`${styles.parallax} bg-center main-header bg-cover mx-auto `}> */}
                    <div className="bg-none absolute flex justify-between w-full">
                        <div className="float-left  justify-center items-center   p-[25px]">
                            <svg
                                className="w-14 h-14"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="34.875px"
                                height="46.938px"
                                viewBox="0 0 34.875 46.938"
                                xmlSpace="preserve" 
                            >
                                <polyline
                                    fill="none"
                                    stroke="#C9AB81"
                                    strokeMiterlimit="10" 
                                    points="0.5,0.003 0.5,36.438 22.875,36.438"
                                ></polyline>
                                <polyline
                                    fill="none"
                                    stroke="#C9AB81"
                                    strokeMiterlimit="10" 
                                    points="6.5,5.003 6.5,41.438 28.875,41.438"
                                ></polyline>
                                <polyline
                                    fill="none"
                                    stroke="#C9AB81"
                                    strokeMiterlimit="10" 
                                    points="12.5,10.003 12.5,46.438 34.875,46.438"
                                ></polyline>
                            </svg>
                        </div>

                        <div className="">
                         <Navbar />
                         </div>


                        <div className="float-right   justify-center items-center p-[21.5px]  ">
                            <svg className={`${styles.elds_menu_opener} w-14 h-14`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 25.2" width="34.875px"
                                height="46.938px"
                                enableBackground="new 0 0 34.875 46.938"
                                xmlSpace="preserve"
                            >
                                <line className={`${styles.line1} `} stroke="#C9AB81" strokeMiterlimit="10" y1="7.6" x2="24" y2="7.6"></line>
                                <line className={`${styles.line2} `} stroke="#C9AB81" strokeMiterlimit="10" x1="4.1" y1="0.5" x2="28.1" y2="0.5"></line>
                                <line className={`${styles.line3} `} stroke="#C9AB81" strokeMiterlimit="10" x1="10.1" y1="24.6" x2="34.1" y2="24.6"></line>
                                <line className={`${styles.line4} `}stroke="#C9AB81" strokeMiterlimit="10" x1="13" y1="17.6" x2="37" y2="17.6"></line>
                            </svg>
                        </div>

                       
                        
                         
                    </div>

                    <div className=" items-center justify-center mt-[105px] border-t-[1px] border-[none] 
                    w-full border-t border-custom-brown absolute ">

                        
                        <div className=" flex items-center justify-center space-x-2 my-[210px]  ">
                          
                            <svg className="mx-[4px]" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                </path>
                                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                </path>
                            </svg>
                          
                            <h1 className="text-x2 font-normal text-center  text-5xl text-[#C9AB81] tracking-[5px] ">BOOKING PAGE</h1>


                            <svg className="m-[4px]" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" stroke-dasharray="50" stroke-dashoffset="0" d="M40.881 8.576L20.562.591.244 8.576">
                                    <animate attributeName="stroke-dashoffset" from="50" to="0" dur="1s" repeatCount="1" />
                                </path>
                                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" stroke-dasharray="50" stroke-dashoffset="0" d="M40.881.591L20.562 8.576.243.591">
                                    <animate className="-rotate-90" attributeName="stroke-dashoffset" from="50" to="0" dur="1s" repeatCount="1" />
                                </path>
                            </svg>

                        </div>
                    </div>
                {/* </header> */}

                <div className="right_col h-auto top-0" role="main">
                    {children}
                </div>
                <div className= "z-50left-28 w-full">
                <Footer></Footer>
                </div>
               
               
            </div>
       
  )
}

export default Layout






