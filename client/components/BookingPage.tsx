// src/BookingPage.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import Link from "next/link";
import style from "../styles/component/Navbar.module.css";
import Navbar from '@/components/Navbar ';
import styles from "../styles/component/BookingPage.module.css";
import Footer from '../components/Footer';
import Head from 'next/head';

const BookingPage = () => {
    return (
        <>

            <Head>
               
                <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"></script>

            </Head>
            <div className="relative">
                {/* <div className=" left-4 absolute  border-[#C9AB81] border-[0.2px] mt-[100px] mx-[83px] h-full "></div>
                <div className="absolute right-4 border-[0.2px] border-[#C9AB81] mt-[100px] mx-[83px] h-full"></div> */}
                {/* <div className="w-full border-t border-custom-brown absolute mt-24"></div>  */}
                <div className=" w-px border-l border-custom-brown absolute left-28 h-full"></div>
                <div className=" w-px border-l border-custom-brown absolute right-28 top-0 h-full"></div>
                <header className={`${styles.parallax} bg-center main-header bg-cover mx-auto`} style={{ backgroundImage: "url('https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Booking-page-title-img.jpg')" }} data-rate="scrolled * 0.1">
                    <div className="">
                        <div className="float-left  justify-center items-center   p-[25px]">
                            <svg
                                className="w-14 h-14"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="34.875px"
                                height="46.938px"
                                viewBox="0 0 34.875 46.938"
                                xmlSpace="preserve" // Đổi từ xml:space thành xmlSpace
                            >
                                <polyline
                                    fill="none"
                                    stroke="#C9AB81"
                                    strokeMiterlimit="10" // Đổi từ stroke-miterlimit thành strokeMiterlimit
                                    points="0.5,0.003 0.5,36.438 22.875,36.438"
                                ></polyline>
                                <polyline
                                    fill="none"
                                    stroke="#C9AB81"
                                    strokeMiterlimit="10" // Đổi từ stroke-miterlimit thành strokeMiterlimit
                                    points="6.5,5.003 6.5,41.438 28.875,41.438"
                                ></polyline>
                                <polyline
                                    fill="none"
                                    stroke="#C9AB81"
                                    strokeMiterlimit="10" // Đổi từ stroke-miterlimit thành strokeMiterlimit
                                    points="12.5,10.003 12.5,46.438 34.875,46.438"
                                ></polyline>
                            </svg>
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

                        
                        {/* <div className="border-[#C9AB81] border-[1px] mx-[100px]">
                            <ul className="flex  justify-center items-center font-thin my-[37.5px]  ">
                                <li className="dropdown">
                                    <a className="horizontal-text text-white mx-[36px] hover:text-gray-300 " href="#">HOME</a>
                                </li>
                                <li className="dropdown">
                                    <a className="horizontal-text text-white mx-[36px] hover:text-gray-300" href="#">PAGES</a>
                                </li>
                                <li className="dropdown">
                                    <a className="horizontal-text text-white mx-[36px] hover:text-gray-300" href="#">PORTFOLIO</a>
                                </li>
                                <li className="dropdown">
                                    <a className="horizontal-text text-white mx-[36px] hover:text-gray-300" href="#">BLOG</a>
                                </li>
                                <li className="dropdown">
                                    <a className="horizontal-text text-white mx-[36px] hover:text-gray-300" href="#">SHOP</a>
                                </li>
                            </ul>
                        </div>  */}
                       
                            
                         <Navbar />
                         
                         
                       


                    </div>

                    <div className=" items-center justify-center mt-[24px] border-t-[1px] border-[none] 
                    w-full border-t border-custom-brown absolute ">
                        <div className=" flex items-center justify-center space-x-2 my-[210px]  ">
                            {/* <!-- PNG Image Left --> */}
                            <svg className="mx-[4px]" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                </path>
                                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                </path>
                            </svg>
                            {/* <!-- Booking Page Text --> */}
                            <h1 className="text-x2 font-normal text-center  text-5xl text-[#C9AB81] ">BOOKING PAGE</h1>


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
                </header>

                <div className="bg-black">
                    <div className="container mx-auto py-[11%]  border-b-black">
                        <div className=" reservation-container text-center text-[#C9AB81] mt-10 mb-3 ">
                            <div className="elds-st-tagline">Your table </div>
                            <div className=" flex items-center justify-center  ">
                                {/* <!-- PNG Image Left --> */}
                                <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                    <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                                        <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />

                                    </path>
                                    <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                                        <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />


                                    </path>
                                </svg>
                                <div className="reservation-title text-3xl text-[#C9AB81]  text-5xl">RESERVATION</div>
                                {/* <!-- PNG Image Right --> */}
                                <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                    <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                                        <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                        <animate attributeName="stroke-dashoffset" from="0" to="0" dur="1s" repeatCount="1" />
                                    </path>
                                    <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                                        <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                        <animate attributeName="stroke-dashoffset" from="0" to="0" dur="1s" repeatCount="1" />
                                    </path>
                                </svg>





                            </div>
                            <div className="form flex justify-center space-x-7 mt-16">
                                <select className="reservation-input  text-white w-[18%]  border  border-custom-brown p-2 bg-black">
                                    <option value=" 1">1 person</option>
                                    <option value=" 2">2 people</option>
                                    <option value=" 3">3 people</option>
                                    <option value=" 4">4 people</option>
                                    <option value=" 5">5 people</option>
                                    <option value=" 6">6 people</option>
                                    <option value=" 7">7 people</option>
                                    <option value=" 8">8 people</option>
                                    <option value=" 9">9 people</option>
                                    <option value=" 10">10 people</option>

                                </select>


                                <div className="bg-none relative w-[18%]  ">
                                    <input type="date" className="  text-white w-[100%]  reservation-input border  border-custom-brown p-2 bg-black" placeholder="Date black" />
                                    {/* <i className="fas fa-calendar-alt absolute top-1/2 right-2 transform -translate-y-1/2 text-white"></i>  */}

                                </div>

                                <select className="reservation-input  text-white  border  border-custom-brown p-2 bg-black w-[18%]  ">
                                    <option value="1">0:30 am</option>
                                    <option value="2">1:00 am</option>
                                    <option value="3">1:30 am</option>
                                    <option value="4">2:00 am</option>
                                    <option value="5">2:30 am</option>
                                    <option value="6">3:30 am</option>
                                    <option value="7">4:00 am</option>
                                    <option value="8">4:30 am</option>
                                    <option value="9">5:00 am</option>
                                    <option value="10">5:30 am</option>
                                    <option value="11">7:00 am</option>
                                    <option value="12">7:30 am</option>
                                    <option value="13">8:30 am</option>
                                    <option value="14">9:00 am</option>
                                    <option value="15">9:30 am</option>
                                    <option value="16">10:00 am</option>
                                    <option value="17">10:30 am</option>

                                    {/* <!-- Add more options here --> */}
                                </select>
                                <button className="book-now-button  border  border-custom-brown text-white w-[15%]  p-2">BOOK NOW</button>
                            </div>

                        </div>
                        <div className="powered-by text-[#BAC5C0] ml-[11.5%] "> *Powered by OpenTable</div>
                    </div>

                    <div className="w-full  border-custom-brown absolute border-t  my-0 width-full"></div>

                    <div className="LocationContactInformation bg-black mx-[70px]">
                        <div className=" flex justify-between  my-[100px]">


                            <div className=" ml-12  items-center justify-center shadow-md " id="map"></div>
                            <iframe className=" ml-2 w-auto my-[10%]  h-[350px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.748817!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594b7eaf1555%3A0x8e0ad7a3b6a4a3b!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1632512345678!5m2!1sen!2sus"></iframe>

                            {/* <!-- Include the Google Maps script --> */}


                            <div className="w-2/5  shadow-md bg-transparent  justify-between item-center  mr-[10%]  ">
                                {/* <!-- Right section with location information --> */}
                                <div className="form1 mt-12">
                                    <h6 className="text-center text-custom text-[#C9AB81] font-miniver font-thin italic">Visit us</h6>
                                    <div className=" flex items-center justify-center  ">
                                        {/* <!-- PNG Image Left --> */}
                                        <svg className="mx-[10px]" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                            <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                                                <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                            </path>
                                            <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                                                <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                            </path>
                                        </svg>
                                        <h1 className="text-center text-custom text-[#C9AB81] text-5xl">FIND US</h1>
                                        {/* <!-- PNG Image Right --> */}
                                        <svg className="mx-[10px]" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                            <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                                                <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                            </path>
                                            <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                                                <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                                            </path>
                                        </svg>


                                    </div>
                                </div>

                                <div className="row flex flex-wrap justify-between text-center text-lg my-[80px]">
                                    <ul className="flex flex-wrap w-full justify-between ">
                                        <li className="mx-[5px] w-[calc(50%-20px)] mb-10">
                                            <strong className="text-custom text-[#C9AB81]">MANHATTAN</strong>
                                            <p className="text-white mt-2 font-thin">71 Madison Ave</p>
                                            <p className="text-white mt-2 font-thin">914-309-7011 , 914-329-213</p>
                                            <p className="text-white mt-2 font-thin">reservations@laurent.com</p>
                                        </li>
                                        <li className="mx-[5px] w-[calc(50%-20px)] mb-10">
                                            <strong className="text-custom text-[#C9AB81]">RAHWAY</strong>
                                            <p className="text-white mt-2 font-thin">71 Madison Ave</p>
                                            <p className="text-white mt-2 font-thin">914-309-7011 , 914-329-213</p>
                                            <p className="text-white mt-2 font-thin">reservations@laurent.com</p>
                                        </li>
                                        <li className="mx-[5px] w-[calc(50%-20px)]">
                                            <strong className="text-custom text-[#C9AB81]">BROOKLYN</strong>
                                            <p className="text-white mt-2 font-thin">71 Madison Ave</p>
                                            <p className="text-white mt-2 font-thin">914-309-7011 , 914-329-213</p>
                                            <p className="text-white mt-2 font-thin">reservations@laurent.com</p>
                                        </li>
                                        <li className="mx-[5px] w-[calc(50%-20px)]">
                                            <strong className="text-custom text-[#C9AB81]">NEW JERSEY</strong>
                                            <p className="text-white mt-2">71 Madison Ave</p>
                                            <p className="text-white mt-2">914-309-7011 , 914-329-213</p>
                                            <p className="text-white mt-2">reservations@laurent.com</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="separator border-t border-custom-brown   my-0 width-full"></div>

                </div>

                {/* <footer className="bg-black flex justify-center ">
                    <div className="footer-content text-center py-[5%]">
                        <div className="logo-footer mb-[36px]">
                            <svg className="w-20 h-20 my-auto mx-auto" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.875px" height="46.938px" viewBox="0 0 34.875 46.938" enableBackground="new 0 0 34.875 46.938" xmlSpace="preserve">
                                <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438"></polyline>
                                <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438"></polyline>
                                <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438"></polyline>
                            </svg>
                        </div>
                        <div className="restaurant-info-footer text-white text-lg leading-loose">
                            <h2>Laurent Restaurant & Fine Dining 71 Madison Ave</h2>
                            <p>10013 New York, 914-309-7030, reservations@laurent.com</p>
                            <p>Open: 09:00 am – 01:00 pm</p>
                        </div>
                        <ul id="menu-footer-menu" className="menu text-white text-lg flex space-x-24 mt-4">
                            <li id="menu-item-69" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-69">
                                <a className="inline-block text-center py-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/QodeInteractive/">
                                    Facebook
                                   <span className=" elds-btn-first-line border border-[#C9AB81] mt-1 block w-full'}"></span>
                                    <span className="elds-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
                                </a>
                            </li>
                            <li id="menu-item-70" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-70">
                                <a className="inline-block text-center py-2" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/qodeinteractive/">
                                    Instagram
                                    <span className="elds-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
                                    <span className="elds-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
                                </a>
                            </li>
                            <li id="menu-item-71" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-71">
                                <a className="inline-block text-center py-2" target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.com/">
                                    Trip Advisor
                                    <span className="elds-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
                                    <span className="elds-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer> */}
                <Footer /> {/* Thêm Footer vào đây */}
            </div>
        </>
    );
}

export default BookingPage;
