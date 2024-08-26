import React from "react";
import Link from "next/link";
import style from "../../styles/component/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className="relative z-20">
        {/* <div className="w-full border-t border-[#C9AB81] absolute mt-24"></div> */}
        {/* <div className="h-screen w-px border-l border-[#C9AB81] absolute left-20"></div>
                <div className="h-screen w-px border-l border-[#C9AB81] absolute right-20 top-0"></div> */}

        <nav className="p-4 flex relative justify-evenly bg-0">
          <ul className="list-none flex justify-center p-0 mt-5">
            <li className="relative mx-2 group">
              <Link href="/home" legacyBehavior>
                <div className="tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
                  HOME
                  <div className="absolute left-0 w-full mt-3">
                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  </div>
                </div>
              </Link>
              <div className=" absolute left-0 mt-[73%] w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                <a
                  id="mh"
                  className={`relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg ${style.link}`}
                >
                  <div className="absolute left-0 w-full ">
                    <div
                      className={`${style.eltdf_btn_first_line} absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}
                    ></div>
                    <div
                      className={`${style.eltdf_btn_second_line} absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out`}
                    ></div>
                  </div>
                </a>
                <div className="my-[1%] inline-block">
                  {[
                    "Main Home",
                    "Bar Home",
                    "Restaurant Home",
                    "Fine Dining",
                    "Split Screen Showcase",
                    "Haute Cuisine",
                    "Restaurant Menu",
                    "Fullscreen Showcase",
                    "Carousel Showcase",
                    "Landing",
                  ].map((item) => (
                    <a
                      href="#"
                      className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                      key={item}
                    >
                      {item}
                      <span
                        className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                      ></span>
                      <span
                        className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                      ></span>
                    </a>
                  ))}
                </div>
              </div>
            </li>

          

            <li className="relative mx-2 group">
              <Link href="/Pages" legacyBehavior>
                <a
                  className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}
                >
                  PAGES
                  <div className="absolute left-0 w-full mt-3">
                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  </div>
                </a>
              </Link>
              <div className="my-[1%]"></div>
              <div className="inline-block absolute left-0 w-52 mt-[44%] bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    About Us
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Meet The Chef
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Our Chefs
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Our Menu
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Our Kitchen
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Gallery Page
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Pages" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Booking Page
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/map" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Contact Us
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Portfolio" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Coming Us
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Portfolio" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Profile
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>

              </div>
            </li>
              
            <li className="relative mx-2 group">
              <Link href="/PORTFOLIO" legacyBehavior>
                <a
                  className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}
                >
                  PORTFOLIO
                  <div className="absolute left-0 w-full mt-3">
                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  </div>
                </a>
              </Link>
              <div className="my-[1%]"></div>
              <div className="inline-block absolute left-0 w-52 mt-[44%] bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                <Link href="/Portfolio" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Portfolio Types
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Portfolio" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Portfolio Layout
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/Portfolio" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Portfolio Single
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
              </div>
            </li>

            {/* <li className="relative mx-2 group">
                            <Link href="/blog" legacyBehavior>
                                <a className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}>
                                    BLOG
                                    <div className="absolute left-0 w-full mt-3">
                                        <div className="absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                        <div className="absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                                    </div>
                                </a>
                            </Link>
                            <div className="my-[1%]"></div>
                            <div className=" inline-block absolute left-0 w-52 mt-[44%]   bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                                {["Blog Standard", "Blog Left Sidebar", "Blog No Sidebar", "Blog Classic", "Post Types"].map((item) => (
                                    <Link
                                        href={item === "Blog Classic" ? "/BlogClassic" : "#"}
                                        key={item}
                                    >
                                        <a href="#" className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`} key={item}>
                                            {item}
                                            <span className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                            <span className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}></span>
                                        </a>
                                        <Link />
                                    ))}
                                    </div>
                            </li> */}

            <li className="relative mx-2 group">
              <Link href="/blog" legacyBehavior>
                <a
                  className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}
                >
                  BLOG
                  <div className="absolute left-0 w-full mt-3">
                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  </div>
                </a>
              </Link>
              <div className="my-[1%]"></div>
              <div className="inline-block absolute left-0 w-52 mt-[44%] bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                <Link href="/BlogClassic" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Blog Classic
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
                <Link href="/BlogClassic" legacyBehavior>
                  <span
                    className={`inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                  >
                    Blog Standard
                    <span
                      className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                    <span
                      className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                    ></span>
                  </span>
                </Link>
              </div>
            </li>

            <li className="relative mx-2 group">
              <Link href="/shop" legacyBehavior>
                <a
                  className={`tracking-[5px] relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg ${style.link}`}
                >
                  SHOP
                  <div className="absolute left-0 w-full mt-1">
                    <div className="absolute inset-x-0 bottom-0 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="absolute inset-x-0 bottom-1 border-t-2 border-[#C9AB81] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  </div>
                </a>
              </Link>
              <div className="my-[1%]"></div>
              <div className=" inline-block absolute left-0 mt-[44%] w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
                {["Shop List", "Shop Single", "Shop Layouts", "Shop Pages"].map(
                  (item) => (
                    <a
                      href="#"
                      className={` inline-block px-3 py-2 hover:bg-gray-700 ${style.link}`}
                      key={item}
                    >
                      {item}
                      <span
                        className={`${style.eltdf_btn_first_line} border border-[#C9AB81] mt-1 block w-full`}
                      ></span>
                      <span
                        className={`${style.eltdf_btn_second_line} border border-[#C9AB81] mt-1 block w-full`}
                      ></span>
                    </a>
                  )
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
