"use client";
import { useState } from "react";
import { CiClock2, CiMobile3 } from "react-icons/ci";
import { FaHospitalAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white w-full">
        {/* Top Bar */}
        <div className="flex justify-center items-center bg-[#3FBBC0] py-2 px-12 w-full md:justify-between">
          <div className="flex items-center text-white gap-2 hidden md:flex">
            <CiClock2 size={30} />
            <h3>Monday-Saturday, 8AM to 10PM</h3>
          </div>
          <div className="flex items-center justify-center text-white gap-2">
            <CiMobile3 size={30} />
            <h3>call us now (+91) 123 456 7890</h3>
          </div>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 px-4 md:px-6 relative">
          <div className="flex items-center justify-center gap-4">
            <FaHospitalAlt size={40} className="text-[#38b6b2]" />
            <h1 className="font-bold text-3xl">MEDICIO</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-center items-center gap-5 font-medium text-sm">
            {[
              { id: 1, name: "Home", link: "/" },
              { id: 2, name: "About", link: "/pages/about" },
              { id: 3, name: "Services", link: "/pages/services" },
              { id: 4, name: "Departments", link: "/pages/departments" },
              { id: 5, name: "Contact", link: "/pages/contact" },
            ].map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <span className="text-[#AFAFAF] hover:text-[#3FBBC0]">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-[#3FBBC0] focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={30} />
          </button>

          {/* Desktop Button */}
          <Link href={'/pages/appointment'}>
          <button  className="hidden md:block bg-[#3FBBC0] text-white py-2 px-4 rounded-sm cursor-pointer hover:bg-[#61c9cd]">
           Make an Appointment
          </button>
          </Link>
        </nav>

        {/* Modal for Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 ">
            <div className="w-[90%] max-w-sm bg-white mx-auto mt-36 p-6 rounded-md shadow-lg relative">
              <button
                className="absolute top-4 right-4 text-[#3FBBC0]"
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={25} />
              </button>

              <ul className="flex flex-col gap-4 text-center font-medium text-sm mt-4">
                {[
                  { id: 1, name: "Home", link: "/" },
                  { id: 2, name: "About", link: "/pages/about" },
                  { id: 3, name: "Services", link: "/pages/services" },
                  { id: 4, name: "Departments", link: "/pages/departments" },
                  { id: 5, name: "Contact", link: "/pages/contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <Link href={item.link} onClick={() => setMenuOpen(false)}>
                      <span className="text-[#AFAFAF] hover:text-[#3FBBC0]">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <Link href={'/pages/appointment'}>
                <button className="bg-[#3FBBC0] text-white py-2 px-4 rounded-sm cursor-pointer hover:bg-[#61c9cd]">
                  Make an Appointment
                </button>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
