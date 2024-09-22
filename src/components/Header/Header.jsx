import React, { useEffect, useState } from "react";
import IconLogo from "../Icons/IconLogo";
import { Link } from "react-router-dom";
import DropDownHeader from "../DropDownHeader/DropDownHeader";
import IconNav1 from "../Icons/IconNav1";
import { navLinksTitle, navLinksParagh } from "../../common/constant";
import { MenuOutlined } from "@ant-design/icons";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import { pathDefault } from "../../common/pathDefault";

import Login from "../../components/Login/Login";

const Header = () => {
  // Thêm Sign In component vào nut SignIn
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [searchOpacity, setSearchOpacity] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setSearchOpacity(1);
      } else {
        setSearchOpacity(0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hàm toggle mở/đóng sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className=" fixed z-50 py-5 top-0 left-0 right-0 border-b bg-white shadow-sm">
      <div className="max-container px-8 flex items-center gap-5">
        {/* Left Header */}
        <div className="flex items-center w-1/2 space-x-4">
          <div className="lg:hidden">
            <MenuOutlined
              className="text-2xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          <div>
            <Link to="/">
              <IconLogo />
            </Link>
          </div>

          {/* Search */}
          <FormSearchProduct size={20} />
          {/* <div
            className="header_search flex items-center border border-gray-500 rounded-md flex-1"
            style={{ opacity: searchOpacity, visibility: "visible" }}
          >
            <input
              className="flex-1 h-full py-3 px-2 outline-none rounded-md"
              type="text"
              placeholder="What service are you looking to day?"
            />
            <button className="px-4 py-3 bg-black text-white rounded-md">
              <i className="fa-solid fa-magnifying-glass "></i>
            </button>
          </div> */}
        </div>

        {/* Right Header */}
        <nav className="flex items-center justify-between w-1/2">
          <div>
            <DropDownHeader
              name="Fiverr Pro"
              content={{
                title: ["I'm looking to hire", "I want to offer Pro services"],
                paragh: [
                  "My team needs vetted freelance talent and a premium business solution.",
                  "I’d like to work on business projects as a Pro freelancer or agency.",
                ],
                icon: <IconNav1 />,
              }}
            />
          </div>

          <div>
            <DropDownHeader
              name="Explore"
              content={{
                title: navLinksTitle,
                paragh: navLinksParagh,
              }}
            />
          </div>

          <Link
            to="/"
            className="hidden px-2 py-2 font-bold hover:bg-gray-100 hover:text-primary duration-300 rounded-md xl:flex items-center gap-1"
          >
            <i className="fa-solid fa-earth-americas"></i>
            English
          </Link>

          <Link
            to="/"
            className="hidden lg:block px-2 py-2 font-bold hover:bg-gray-100 hover:text-primary duration-300 rounded-md whitespace-nowrap "
          >
            Become a Seller
          </Link>

          <Link
            // to={pathDefault.register}
            onClick={openModal}
            className={`py-2 px-5 hover:text-primary duration-300 font-bold whitespace-nowrap`}
          >
            Sign in
          </Link>
          {isModalOpen && <Login visible={isModalOpen} onClose={closeModal} />}

          <Link
            to={pathDefault.register}
            className={`py-2 px-5 rounded-md border border-primary text-green-600 hover:bg-primary hover:text-white duration-300 font-bold`}
          >
            Join
          </Link>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="px-4 py-7">
          <Link
            to={pathDefault.register}
            className="py-3 px-5 text-white font-bold bg-black rounded-md hover:opacity-80"
          >
            Join Fiverr
          </Link>
          <div className="mt-8 pl-2">
            <Link to="/" className="block p-2 hover:bg-gray-100">
              Fiverr Pro
            </Link>
            <Link to="/" className="block p-2 hover:bg-gray-100">
              Explore
            </Link>
            <Link to="/" className="block p-2 hover:bg-gray-100">
              English
            </Link>
            <Link to="/" className="block p-2 hover:bg-gray-100">
              Become a Seller
            </Link>
            <Link
              // to={pathDefault.register}
              onClick={openModal}
              className="block p-2 hover:bg-gray-100"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay khi sidebar mở */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;
