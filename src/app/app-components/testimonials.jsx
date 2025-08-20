'use client'
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    name: "Sarah Malik",
    message: "This hospital gave me excellent care. The staff were kind, professional, and always attentive.",
    image: "/minahil.jpg",
  },
  {
    id: 2,
    name: "Marwa",
    message: "From the ER to recovery, everything was smooth and comforting. Highly recommended!",
    image: "/marwa.jpg",
  },
  {
    id: 3,
    name: "Asad",
    message: "My experience was great. The doctors explained everything clearly and made me feel safe.",
    image: "/asad.jpg",
  },
    {
    id: 4,
    name: "Zahid",
    message: "Everything was well-organized, and I felt cared for throughout my entire stay.",
    image: "/zahid.jpg",
  },
    {
    id: 5,
    name: "Bilal",
    message: "I truly appreciated the professionalism and personal attention I received here.",
    image: "/bilal.jpg",
  },
];

function Testimonials(){
   const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    return(
        <>
       <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-4">
         <h1 className="text-3xl font-bold text-[#555555]">Testimonials</h1>
         <div className="border-b-4 border-[#3FBBC0] w-16"></div>
       </div>

        <div className="relative w-full flex justify-center items-center px-4 py-12 bg-[#f9f9f9]">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 text-center relative overflow-hidden transition-all duration-500">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
        <p className="text-[#6b6b6b] mt-2">{testimonials[currentIndex].message}</p>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3FBBC0] hover:text-white hover:bg-[#3FBBC0] p-2 rounded-full transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#3FBBC0] hover:text-white hover:bg-[#3FBBC0] p-2 rounded-full transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
        </>
    )
}
export default Testimonials