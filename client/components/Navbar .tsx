// import React from "react";
// import Link from "next/link";
// import style from "../styles/component/Navbar.module.css";

// const Navbar = () => {
//     return (
//         <>


//         <div className="relative">
//             <img src="/images/main-h-new-rev-img-1.jpg" className="absolute"></img>
//             <div className="w-full border-t border-custom-brown absolute mt-24"></div>
//             <div className="h-screen w-px border-l border-custom-brown absolute left-20"></div>
//             <div className="h-screen w-px border-l border-custom-brown absolute right-20 top-0"></div>
//             <nav className="p-4 flex relative justify-evenly">
//                 <ul className="list-none flex justify-center p-0 mt-5">
//                     <li className="relative mx-2 group">
//                         <Link href="/home" legacyBehavior>
//                             <div  className="relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
//                                 H O M E
//                                 <div className="absolute left-0 w-full mt-4">
//                                     <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                 </div>
//                             </div>
//                         </Link>
//                         <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                             <a id="mh" className="relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
//                                 Main Home
//                                 <div className="absolute left-0 w-full mt-4">
//                                     <div className= {` ${style.eltdf_btn_first_line}   absolute inset-x-0 bottom-0 border-t-2 border-custom-brown border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}></div>
//                                     <div className={` ${style.eltdf_btn_first_line}   absolute inset-x-0 bottom-0 border-t-2 border-custom-brown border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}></div>
//                                 </div>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Bar Home
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Restaurant Home
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Fine Dining
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Split Screen Showcase
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Haute Cuisine
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Restaurant Menu
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Fullscreen Showcase
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Carousel Showcase
//                                 <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
//                                 <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
//                             </a>
//                             <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                 Landing

//                             </a>
//                         </div>
//                     </li>

//                     <li className="relative mx-2 group">
//                         <Link href="/pages" legacyBehavior>
//                             <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                                 P A G E S
//                                 <div className="absolute left-0 w-full mt-4">
//                                     <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                 </div>
//                             </a>
//                         </Link>
//                         <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             About Us
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Meet The Chef
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Our Chefs
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Our Menu
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Our Kitchen
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Gallery Page
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Booking Page
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Contact Us
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Coming Us
//                         </a>
//                         </div>
//                     </li>

//                 <li className="relative mx-2 group">
//                     <Link href="/portfolio" legacyBehavior>
//                         <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                             P O R T F O L I O
//                             <div className="absolute left-0 w-full mt-4">
//                                 <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                 <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                             </div>
//                         </a>
//                     </Link>
//                     <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white hidden group-hover:block transition-transform duration-500 ease-in-out">
//                         <a href="#" className="relative block px-3 py-2 hover:bg-gray-700 group">
//                             Portfolio Types<div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Gallery Portfolio
//                                 </a>
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Standard Portfolio
//                                 </a>
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Slider Portfolio
//                                 </a>
//                             </div>
//                         </a>
//                         <a href="#" className="relative block px-3 py-2 hover:bg-gray-700 group">
//                             Portfolio Layout
//                             <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Layout 1
//                                 </a>
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Layout 2
//                                 </a>
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Layout 3
//                                 </a>
//                             </div>
//                         </a>
//                         <a href="#" className="relative block px-3 py-2 hover:bg-gray-700 group">
//                             Portfolio Single
//                             <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Single 1
//                                 </a>
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Single 2
//                                 </a>
//                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                                     Single 3
//                                 </a>
//                             </div>
//                         </a>
//                     </div>
//                 </li>



//                 <li className="relative mx-2 group">
//                     <Link href="/blog" legacyBehavior>
//                         <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                             B L O G
//                             <div className="absolute left-0 w-full mt-4">
//                                 <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                 <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                             </div>
//                         </a>
//                     </Link>
//                     <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Blog Standard
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Blog Left Sidebar
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Blog No Sidebar
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Blog Classic
//                         </a><a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Post Types
//                         </a>
//                     </div>
//                 </li>

//                 <li className="relative mx-2 group">
//                     <Link href="/shop" legacyBehavior>
//                         <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                             S H O P
//                             <div className="absolute left-0 w-full mt-4">
//                                 <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                 <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                             </div>
//                         </a>
//                     </Link>
//                     <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Product List
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Product Single
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Shop Layouts
//                         </a>
//                         <a href="#" className="block px-3 py-2 hover:bg-gray-700">
//                             Shop Pages
//                         </a>
//                     </div>
//                 </li>
//             </ul>
//         </nav>
//         </div >
//         </>
//     );
//         };

// export default Navbar;



// import React from "react";
// import Link from "next/link";
// import style from "../styles/component/Navbar.module.css";

// const Navbar = () => {
//     return (
//         <>
//             <div className="relative">
//                 <img src="/images/main-h-new-rev-img-1.jpg" className="absolute" />
//                 <div className="w-full border-t border-custom-brown absolute mt-24"></div>
//                 <div className="h-screen w-px border-l border-custom-brown absolute left-20"></div>
//                 <div className="h-screen w-px border-l border-custom-brown absolute right-20 top-0"></div>
//                 <nav className="p-4 flex relative justify-evenly">
//                     <ul className="list-none flex justify-center p-0 mt-5">
//                         <li className="relative mx-2 group">
//                             <Link href="/home" legacyBehavior>
//                                 <div className="relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
//                                     H O M E
//                                     <div className="absolute left-0 w-full mt-4">
//                                         <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                         <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     </div>
//                                 </div>
//                             </Link>
//                             <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                                 <a id="mh" className="relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
//                                     Main Home
//                                     <div className="absolute left-0 w-full mt-4">
//                                         <div className={`${style.eltdf_btn_first_line} absolute inset-x-0 bottom-0 border-t-2 border-custom-brown border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}></div>
//                                         <div className={`${style.eltdf_btn_second_line} absolute inset-x-0 bottom-1 border-t-2 border-custom-brown border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}></div>
//                                     </div>
//                                 </a>
//                                 {["Bar Home", "Restaurant Home", "Fine Dining", "Split Screen Showcase", "Haute Cuisine", "Restaurant Menu", "Fullscreen Showcase", "Carousel Showcase", "Landing"].map((item) => (
//                                     <a href="#" className="block relative px-3 py-2 hover:bg-gray-700" key={item}>
//                                         {item}
//                                         <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
//                                         <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
//                                     </a>
//                                 ))}
//                             </div>
//                         </li>

//                         <li className="relative mx-2 group">
//                             <Link href="/pages" legacyBehavior>
//                                 <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                                     P A G E S
//                                     <div className="absolute left-0 w-full mt-4">
//                                         <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                         <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     </div>
//                                 </a>
//                             </Link>
//                             <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                                 {["About Us", "Meet The Chef", "Our Chefs", "Our Menu", "Our Kitchen", "Gallery Page", "Booking Page", "Contact Us", "Coming Us"].map((item) => (
//                                     <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={item}>
//                                         {item}
//                                     </a>
//                                 ))}
//                             </div>
//                         </li>

//                         <li className="relative mx-2 group">
//                             <Link href="/portfolio" legacyBehavior>
//                                 <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                                     P O R T F O L I O
//                                     <div className="absolute left-0 w-full mt-4">
//                                         <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                         <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     </div>
//                                 </a>
//                             </Link>
//                             <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white hidden group-hover:block transition-transform duration-500 ease-in-out">
//                                 {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item, index) => (
//                                     <div className="relative block px-3 py-2 hover:bg-gray-700 group" key={index}>
//                                         {item}
//                                         <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
//                                             {["Option 1", "Option 2", "Option 3"].map((subitem) => (
//                                                 <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subitem}>
//                                                     {subitem}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </li>

//                         <li className="relative mx-2 group">
//                             <Link href="/blog" legacyBehavior>
//                                 <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                                     B L O G
//                                     <div className="absolute left-0 w-full mt-4">
//                                         <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                         <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     </div>
//                                 </a>
//                             </Link>
//                             <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                                 {["Blog Standard", "Blog Left Sidebar", "Blog No Sidebar", "Blog Classic", "Post Types"].map((item) => (
//                                     <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={item}>
//                                         {item}
//                                     </a>
//                                 ))}
//                             </div>
//                         </li>

//                         <li className="relative mx-2 group">
//                             <Link href="/shop" legacyBehavior>
//                                 <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
//                                     S H O P
//                                     <div className="absolute left-0 w-full mt-4">
//                                         <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                         <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
//                                     </div>
//                                 </a>
//                             </Link>
//                             <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
//                                 {["Product List", "Product Single", "Shop Layouts", "Shop Pages"].map((item) => (
//                                     <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={item}>
//                                         {item}
//                                     </a>
//                                 ))}
//                             </div>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Navbar;


import React from "react";
import Link from "next/link";
import style from "../styles/component/Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className="relative">
                <img src="/images/main-h-new-rev-img-1.jpg" className="absolute" />
                <div className="w-full border-t border-custom-brown absolute mt-24"></div>
                <div className="h-screen w-px border-l border-custom-brown absolute left-20"></div>
                <div className="h-screen w-px border-l border-custom-brown absolute right-20 top-0"></div>
                <nav className="p-4 flex relative justify-evenly">
                    <ul className="list-none flex justify-center p-0 mt-5">
                        <li className="relative mx-2 group">
                            <Link href="/home" legacyBehavior>
                                <div className="tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
                                    HOME
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </div>
                            </Link>
                            <div className=" absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                                <a id="mh" className={`relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>

                                    <div className="absolute left-0 w-full ">
                                        <div className={`${style.eltdf_btn_first_line} absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}></div>
                                        <div className={`${style.eltdf_btn_second_line} absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}></div>
                                    </div>
                                </a>
                                <div className=" inline-block">
                                    {[" Main Home", "Bar Home", "Restaurant Home", "Fine Dining", "Split Screen Showcase", "Haute Cuisine", "Restaurant Menu", "Fullscreen Showcase", "Carousel Showcase", "Landing"].map((item) => (
                                        <a href="#" className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={item}>
                                            {item}
                                            <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                            <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li className="relative mx-2 group">
                            <Link href="/pages" legacyBehavior>
                                <a className={`tracking-[5px]  relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    PAGES
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>
                            <div className="my-[1%]"></div>
                            <div className="mt-[20%]] inline-block absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                                {["About Us", "Meet The Chef", "Our Chefs", "Our Menu", "Our Kitchen", "Gallery Page", "Booking Page", "Contact Us", "Coming Us"].map((item) => (
                                    <a href="#" className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={item}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                    </a>
                                ))}
                            </div>
                        </li>


                        {/* <li className="relative mx-2 group">
                            <Link href="/portfolio" legacyBehavior>
                                <a className={` tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    PORTFOLIO
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>

                            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white hidden group-hover:block transition-transform duration-500 ease-in-out">
                                {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item, index) => (
                                    <div className="relative block px-3 py-2 hover:bg-gray-700 group" key={index}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
                                            {["Option 1", "Option 2", "Option 3"].map((subitem) => (
                                                <a href="#" className={`block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={subitem}>
                                                    {subitem}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li> */}

                        {/* <li className="relative mx-2 group">
                            <Link href="/portfolio" legacyBehavior>
                                <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    PORTFOLIO
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>
                            <div className="my-[1%]"></div>
                            <div className="  inline-block absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                <Link href="/Portfolio_Types" legacyBehavior>
                                    <a className={` relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    Portfolio Types
                                        <div className="absolute left-0 w-full mt-4">
                                            <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                            <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        </div>
                                    </a>
                                </Link>
                                <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white hidden group-hover:block transition-transform duration-500 ease-in-out">
                                {["gallery-portfolio", "standard-portfolio", "slider-portfolio"].map((item, index) => (
                                    <a href="#" className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={item}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                    

                                    </a>
                                ))}
                                </div>
                                
                            </div>
                        </li> */}

                        {/* <li className="relative mx-2 group">
                            <Link href="/portfolio" legacyBehavior>
                                <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    PORTFOLIO
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>
                            <div className="my-[1%]"></div>
                           
                            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item) => (
                                    <div className="relative group" key={item}>
                                        <a href="#" className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}>
                                            {item}
                                            <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                            <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                            
                                        </a>

                                        
                                        <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                        {item === "Portfolio Types" && (
                                            <div className="relative group">
                                                {["gallery-portfolio", "standard-portfolio", "slider-portfolio"].map((subItem) => (
                                                    <a href="#" className=" relative group" key={subItem}>
                                                        {subItem}
                                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                        </div>
                           







                                        <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                        {item === "Portfolio Layout" && (
                                            <div className="absolute left-full top-0 mt-2 w-48 bg-custom-dark text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                                {["Two Col.", "Three Col.", "Three Col.Wide", "Four Col.", "Four Col.Wide", "Five Col.Wide"].map((subItem) => (
                                                    <a href="#" className="hidden group-hover:block inline-block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                        {subItem}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                        </div>
                                      
                                        <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                        {item === "Portfolio Single" && (
                                            <div className="absolute left-full top-0 mt-2 w-48 bg-custom-dark text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                                {["Small Images", "Small Slider", "Large Slider", "Large Images", "Gallery"].map((subItem) => (
                                                    <a href="#" className="hidden group-hover:block inline-block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                        {subItem}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                           

                        </li> */}

                        {/* <li className="relative mx-2 group">
                                <Link href="/portfolio" legacyBehavior>
                                    <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                        PORTFOLIO
                                        <div className="absolute left-0 w-full mt-4">
                                            <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                            <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        </div>
                                    </a>
                                </Link>

                                
                                <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                    {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item) => (
                                        <div className="relative group" key={item}>
                                            <a href="#" className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}>
                                                {item}
                                                <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                                <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                            </a>

                                        
                                            {item === "Portfolio Types" && (
                                                <div className="absolute left-0 mt-2 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                                    {["gallery-portfolio", "standard-portfolio", "slider-portfolio"].map((subItem) => (
                                                        <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                            {subItem}
                                                            <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                                        </a>
                                                    ))}
                                                </div>
                                            )}

                                        
                                            {item === "Portfolio Layout" && (
                                                <div className="absolute left-0 mt-2 w-48 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                                    {["Two Col.", "Three Col.", "Three Col.Wide", "Four Col.", "Four Col.Wide", "Five Col.Wide"].map((subItem) => (
                                                        <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                            {subItem}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}

                                        
                                            {item === "Portfolio Single" && (
                                                <div className="absolute left-0 mt-2 w-48 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                                    {["Small Images", "Small Slider", "Large Slider", "Large Images", "Gallery"].map((subItem) => (
                                                        <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                            {subItem}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </li> */}



                        {/* <li className="relative mx-2 group">
                        <Link href="/portfolio" legacyBehavior>
                            <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                PORTFOLIO
                                <div className="absolute left-0 w-full mt-4">
                                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                </div>
                            </a>
                        </Link>

                 
                        <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                            {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item) => (
                                <div className="relative" key={item}>
                                    <a href="#" className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                    </a>

                                  
                                    {item === "Portfolio Types" && (
                                        <div className="absolute left-full top-0 mt-2 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                            {["gallery-portfolio", "standard-portfolio", "slider-portfolio"].map((subItem) => (
                                                <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                    {subItem}
                                                    <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                 
                                    {item === "Portfolio Layout" && (
                                        <div className="absolute left-full top-0 mt-2 w-48 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                            {["Two Col.", "Three Col.", "Three Col.Wide", "Four Col.", "Four Col.Wide", "Five Col.Wide"].map((subItem) => (
                                                <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                   
                                    {item === "Portfolio Single" && (
                                        <div className="absolute left-full top-0 mt-2 w-48 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                            {["Small Images", "Small Slider", "Large Slider", "Large Images", "Gallery"].map((subItem) => (
                                                <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </li> */}

                        {/* <li className="relative mx-2 group">
                        <Link href="/portfolio" legacyBehavior>
                            <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                PORTFOLIO
                                <div className="absolute left-0 w-full mt-4">
                                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                </div>
                            </a>
                        </Link>

                        <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                            {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item) => (
                                <div className="relative group" key={item}>
                                    <a href="#" className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                    </a>

                        
                                    {item === "Portfolio Types" && (
                                        <div className="absolute left-full top-0  w-52 bg-custom-dark px-3 text-white ">
                                            {["gallery-portfolio", "standard-portfolio", "slider-portfolio"].map((subItem) => (
                                                <a href="#" className="inline-block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                    {subItem}
                                                    <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                                    <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                
                                    {item === "Portfolio Layout" && (
                                        <div className="absolute left-full top-0 mt-2 w-48 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                            {["Two Col.", "Three Col.", "Three Col.Wide", "Four Col.", "Four Col.Wide", "Five Col.Wide"].map((subItem) => (
                                                <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                
                                    {item === "Portfolio Single" && (
                                        <div className="absolute left-full top-0 mt-2 w-48 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                            {["Small Images", "Small Slider", "Large Slider", "Large Images", "Gallery"].map((subItem) => (
                                                <a href="#" className="block px-3 py-2 hover:bg-gray-700" key={subItem}>
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </li> */}

                        <li className="relative mx-2 group">
                            <Link href="/portfolio" legacyBehavior>
                                <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    PORTFOLIO
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>

                            {/* Menu chính */}
                            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 ease-in-out">
                                {["Portfolio Types", "Portfolio Layout", "Portfolio Single"].map((item) => (
                                    <div className="relative group" key={item}>
                                        <a href="#" className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}>
                                            {item}
                                            <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                            <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        </a>


                                    </div>
                                ))}
                            </div>
                        </li>





                        <li className="relative mx-2 group">
                            <Link href="/blog" legacyBehavior>
                                <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    BLOG
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>
                            <div className="my-[1%]"></div>
                            <div className=" inline-block absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                                {["Blog Standard", "Blog Left Sidebar", "Blog No Sidebar", "Blog Classic", "Post Types"].map((item) => (
                                    <a href="#" className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={item}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                    </a>
                                ))}
                            </div>
                        </li>

                        <li className="relative mx-2 group">
                            <Link href="/shop" legacyBehavior>
                                <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    SHOP
                                    <div className="absolute left-0 w-full mt-4">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>
                            <div className="my-[1%]"></div>
                            <div className=" inline-block absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                                {["Shop List", "Shop Single", "Shop Layouts", "Shop Pages"].map((item) => (
                                    <a href="#" className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={item}>
                                        {item}
                                        <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                    </a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

