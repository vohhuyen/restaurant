import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative">
      <img src="/images/main-h-new-rev-img-1.jpg" className="absolute"></img>
      <div className="w-full border-t border-custom-brown absolute mt-24"></div>
      <div className="h-screen w-px border-l border-custom-brown absolute left-20"></div>
      <div className="h-screen w-px border-l border-custom-brown absolute right-20 top-0"></div>
      <nav className="p-4 flex relative justify-evenly">
        <ul className="list-none flex justify-center p-0 mt-5">
          <li className="relative mx-2 group">
            <Link href="/home" legacyBehavior>
              <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ease-in-out font-open-sans-condensed text-lg">
                H O M E
                <div className="absolute left-0 w-full mt-4">
                  <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </div>
              </a>
            </Link>
            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Main Home
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Bar Home
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Restaurant Home
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Fine Dining
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Split Screen Showcase
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Haute Cuisine
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Restaurant Menu
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Fullscreen Showcase
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Carousel Showcase
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Landing
              </a>
            </div>
          </li>

          <li className="relative mx-2 group">
            <Link href="/pages" legacyBehavior>
              <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
                P A G E S
                <div className="absolute left-0 w-full mt-4">
                  <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </div>
              </a>
            </Link>
            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                About Us
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Meet The Chef
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Our Chefs
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Our Menu
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Our Kitchen
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Gallery Page
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Booking Page
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Contact Us
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Coming Us
              </a>
            </div>
          </li>

          <li className="relative mx-2 group">
  <Link href="/portfolio" legacyBehavior>
    <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
      P O R T F O L I O
      <div className="absolute left-0 w-full mt-4">
        <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
      </div>
    </a>
  </Link>
  <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white hidden group-hover:block transition-transform duration-500 ease-in-out">
    <a href="#" className="relative block px-3 py-2 hover:bg-gray-700 group">
      Portfolio Types
      <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Gallery Portfolio
        </a>
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Standard Portfolio
        </a>
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Slider Portfolio
        </a>
      </div>
    </a>
    <a href="#" className="relative block px-3 py-2 hover:bg-gray-700 group">
      Portfolio Layout
      <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Layout 1
        </a>
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Layout 2
        </a>
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Layout 3
        </a>
      </div>
    </a>
    <a href="#" className="relative block px-3 py-2 hover:bg-gray-700 group">
      Portfolio Single
      <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-52 bg-custom-dark px-3 text-white">
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Single 1
        </a>
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Single 2
        </a>
        <a href="#" className="block px-3 py-2 hover:bg-gray-700">
          Single 3
        </a>
      </div>
    </a>
  </div>
</li>



          <li className="relative mx-2 group">
            <Link href="/blog" legacyBehavior>
              <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
                B L O G
                <div className="absolute left-0 w-full mt-4">
                  <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </div>
              </a>
            </Link>
            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Blog Standard
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Blog Left Sidebar
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
              Blog No Sidebar
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
              Blog Classic
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Post Types
              </a>
            </div>
          </li>

          <li className="relative mx-2 group">
            <Link href="/shop" legacyBehavior>
              <a className="relative text-white hover:text-gray-400 capitalize transition duration-500 ml-10 ease-in-out font-open-sans-condensed text-lg">
                S H O P
                <div className="absolute left-0 w-full mt-4">
                  <div className="absolute inset-x-0 bottom-0 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  <div className="absolute inset-x-0 bottom-1 border-t-2 border-custom-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </div>
              </a>
            </Link>
            <div className="absolute left-0 mt-9 w-52 bg-custom-dark px-3 text-white transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100">
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Product List
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Product Single
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Shop Layouts
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-700">
                Shop Pages
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
