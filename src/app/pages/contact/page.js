"use client";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/contact",
        formData
      );
      toast.success(res.data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error(err.response.data.message || "Something went wrong");
    }
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-5">
        <h1 className="text-3xl font-bold text-[#555555]">Contact Us</h1>
        <div className="border-b-4 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b]">
          Providing exceptional care and building healthier communities every
          day.
        </p>
      </div>
      <div className="w-full h-[400px] mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27234.81742648768!2d74.24114840710645!3d31.431970120772462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901080b110569%3A0x33b0fb0b941e5adf!2sWAPDA%20Town%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1755755924924!5m2!1sen!2s"
          width="100%"
          height="450"
          //   style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Form To contact */}
      {/* Main Container */}
      <div className="mt-20 flex flex-col justify-center items-center gap-5 xl:flex-row">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div className="flex flex-col justify-center items-center py-6 px-24 gap-5 border shadow-sm rounded-sm sm:px-28 md:px-32">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white border-2 border-[#3FBBC0] border-dotted">
              <IoLocationOutline className="text-[#3FBBC0] text-2xl" />
            </div>
            <h2 className="text-[#555555] font-bold text-2xl">Address</h2>
            <p className="text-[#6b6b6b]">A108 Adam Street</p>
          </div>

          <div className="flex flex-col w-[100%] justify-center items-center gap-5 md:flex-row">
            <div className="flex flex-col  justify-center items-center py-4 px-24 gap-5 border shadow-sm rounded-sm md:px-16 ">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white border-2 border-[#3FBBC0] border-dotted">
                <FaPhoneAlt className="text-[#3FBBC0] text-2xl" />
              </div>
              <h2 className="text-[#555555] font-bold text-2xl">Call Us</h2>
              <p className="text-[#6b6b6b]">+1 5589 55488 55</p>
            </div>

            <div className="flex flex-col justify-center items-center py-4 px-24 gap-5 border shadow-sm rounded-sm md:px-16">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white border-2 border-[#3FBBC0] border-dotted">
                <MdOutlineEmail className="text-[#3FBBC0] text-2xl" />
              </div>
              <h2 className="text-[#555555] font-bold text-2xl">Email Us</h2>
              <p className="text-[#6b6b6b]">info@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center items-center py-4 px-12 gap-5 border shadow-sm rounded-sm">
          <div className="flex flex-col justify-center items-center py-6  gap-5 w-full md:flex-row ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 w-full h-40 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-[#3FBBC0] text-white px-10 py-2 rounded-md hover:bg-[#3FBBC0]/80 transition duration-300 cursor-pointer font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Contact;
