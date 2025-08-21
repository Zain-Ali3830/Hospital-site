"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  {
    id: 1,
    icon: FaFacebook,
    link: "",
  },
  {
    id: 2,
    icon: FaInstagram,
    link: "",
  },
  {
    id: 3,
    icon: FaTwitter,
    link: "",
  },
  {
    id: 4,
    icon: FaLinkedin,
    link: "",
  },
];
function Footer() {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col justify-evenly items-start px-4 gap-16 py-12 bg-[#F7FCFC] mt-10 md:flex-row items-center px-0 ">
        {/* Section 1 */}
        <div className="flex flex-col gap-2 ">
          <div>
            <h2 className="text-[#555555] font-bold text-3xl">Medicio</h2>
          </div>
          <div className=" relative top-8 flex flex-col gap-2 ">
            <div className="flex flex-col text-sm">
              <p className="text-[#6b6b6b]">A108 Adam Street</p>
              <p className="text-[#6b6b6b]">New York, NY 535022</p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 text-sm">
                <h6 className="font-semibold text-[#555555]">Phone:</h6>
                <p className="text-[#6b6b6b]">+1 5589 55488 55</p>
              </div>
              <div className="flex gap-1 text-sm">
                <h6 className="font-semibold text-[#555555]">Emial:</h6>
                <p className="text-[#6b6b6b]">info@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-2 relative top-10">
            {socials.map((social) => {
              return (
                <div
                  key={social.id}
                  className="w-10 h-10 rounded-full border border-[#6b6b6b] hover:border-[#3fbbc0] flex justify-center items-center cursor-pointer"
                >
                  <social.icon className="text-[#6b6b6b] text-xl hover:text-[#3FBBC0] transition duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-[#555555]">Useful Links</h2>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Home
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            About us
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Services
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Departments
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Contact{" "}
          </a>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl font-bold text-[#555555]">Departments</h2>
          {/* <div className="flex flex-col gap-2"> */}
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Cardiology
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Neurology
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Radiology
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Medicine
          </a>
          <a href="" className="text-sm text-[#6b6b6b] hover:text-[#3FBBC0]">
            Laboratory
          </a>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
export default Footer;
