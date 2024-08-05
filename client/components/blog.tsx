import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div
      className="h-[1000px] relative z-0"
      style={{ backgroundColor: "#0b1315" }}
    >
      {/* <div className="border-t border-custom-yellow opacity-50 w-full absolute mt-24"></div>
      <div className="border-l border-custom-yellow opacity-50 w-1 h-[1000px] absolute left-28 top-0"></div>
      <div className="border-l border-custom-yellow opacity-50 w-1 h-[1000px] absolute right-28 top-0"></div> */}
      {/* <nav className="text-white px-8 py-4 flex justify-between items-center h-24">
        <div className="flex items-center w-screen top-10">
          <div className="header">
            <svg
              version="1.1"
              width="34.875px"
              height="46.938px"
              viewBox="0 0 34.875 46.938"
              enableBackground="new 0 0 34.875 46.938"
            >
              <polyline
                fill="none"
                stroke="#C9AB81"
                strokeMiterlimit="10"
                points="0.5,0.003 0.5,36.438 22.875,36.438"
              />
              <polyline
                fill="none"
                stroke="#C9AB81"
                strokeMiterlimit="10"
                points="6.5,5.003 6.5,41.438 28.875,41.438"
              />
              <polyline
                fill="none"
                stroke="#C9AB81"
                strokeMiterlimit="10"
                points="12.5,10.003 12.5,46.438 34.875,46.438"
              />
            </svg>
          </div>
          <div className="container flex justify-center">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="hover:text-white text-md uppercase font-open-sans-condensed tracking-wide"
                >
                  H o m e
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-md uppercase font-open-sans-condensed"
                >
                  P a g e s
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-md uppercase font-open-sans-condensed"
                >
                  P o r t f o l i o
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-md uppercase font-open-sans-condensed"
                >
                  B l o g
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-md uppercase font-open-sans-condensed"
                >
                  S h o p
                </a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 37 25.2"
              className="eltdf-menu-opener"
            >
              <line y1="7.6" x2="24" y2="7.6"></line>
              <line x1="4.1" y1="0.5" x2="28.1" y2="0.5"></line>
              <line x1="10.1" y1="24.6" x2="34.1" y2="24.6"></line>
              <line x1="13" y1="17.6" x2="37" y2="17.6"></line>
            </svg>
          </div>
        </div>
      </nav> */}
      <div className="flex w-full">
        <div className="container-left w-28">0</div>
        <div className="container-center w-[1285px]">
          <div className="flex mt-5 ml-10">
            <div className="flex text-custom-yellow uppercase text-xl">
              <p>B l o g</p>
              <p className="ml-4">C l a s s i c</p>
            </div>
            <div className="flex text-white ml-96">
              <p>Home</p>
              <div className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 8.3 8.5"
                  className="eltdf-breadcrumb-arrow w-2 h-2 mt-2"
                >
                  <polyline
                    points="0.4 0.4 3.6 4.2 0.4 8.1"
                    fill=""
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  ></polyline>
                  <polyline
                    points="4.5 0.4 7.7 4.2 4.5 8.1"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  ></polyline>
                </svg>
              </div>
              <p className="ml-3">Blog Classic</p>
            </div>
          </div>
          <div className="flex mt-32">
            <div className="w-4/12 ml-5">
              <img src="/images/delious-desert.jpg" alt="Delicious Dessert" />
              <div className="flex text-white mt-5">
                <div className="">October 4, 2019</div>
                <div className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8.3 8.5"
                    className="eltdf-breadcrumb-arrow w-2 h-2 mt-2"
                  >
                    <polyline
                      points="0.4 0.4 3.6 4.2 0.4 8.1"
                      fill=""
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    ></polyline>
                    <polyline
                      points="4.5 0.4 7.7 4.2 4.5 8.1"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    ></polyline>
                  </svg>
                </div>
                <div className="ml-2">Latest menus</div>
                <div className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8.3 8.5"
                    className="eltdf-breadcrumb-arrow w-2 h-2 mt-2"
                  >
                    <polyline
                      points="0.4 0.4 3.6 4.2 0.4 8.1"
                      fill=""
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    ></polyline>
                    <polyline
                      points="4.5 0.4 7.7 4.2 4.5 8.1"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    ></polyline>
                  </svg>
                </div>
                <div className="ml-2">Diane Johnson</div>
              </div>
              <div className="flex text-custom-yellow uppercase text-2xl font-sans mt-3">
                <p>D e l i o u s</p>
                <p className="ml-4">D e s e r t</p>
              </div>
              <div className="font-open-sans-condensed mt-3 text-white text-xl w-96">
                Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do
                eiusmod temporinc ididunt utlabor met dolore magna sensal iqua.
                Ut ...
              </div>
              <div>
                <div className="flex font-open-sans-condensed text-white uppercase mt-14 text-xl">
                  <p>Read</p>
                  <p className="ml-2">More</p>
                </div>
                <div className="border-t w-20"></div>
                <div className="border-t w-20 mt-1"></div>

              </div>
            </div>
           
          
          </div>
        </div>
        <div className="container-right w2/12"></div>
      </div>
    </div>
  );
};

export default Blog;
