"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/doctor4.jpg",
  "/doctor5.jpg",
  "/doctor6.jpg",
  "/doctor7.jpg",
  "/doctor8.jpg",
  "/doctor9.jpg",
  "/doctor10.jpg",
];

function Gallery() {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const sliderWidth = useRef(0);

  useEffect(() => {
    const width = sliderRef.current.scrollWidth / 2;
    sliderWidth.current = width;

    let animation;

    const moveSlider = async () => {
      if (!isHovered) {
        await controls.start({
          x: -width,
          transition: { duration: 10, ease: "linear" },
        });
        controls.set({ x: 0 });
        moveSlider();
      }
    };

    moveSlider();

    return () => {
      controls.stop();
      cancelAnimationFrame(animation);
    };
  }, [controls, isHovered]);

  return (
    <>
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-5">
        <h1 className="text-3xl font-bold text-[#555555]">Gallery</h1>
        <div className="border-b-4 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b]">
          Discover our hospital gallery showcasing modern facilities and
          compassionate care in action.
        </p>
      </div>
      <div
        className="overflow-hidden w-full bg-gray-100 p-4 rounded-xl shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-4 w-max"
          ref={sliderRef}
          animate={controls}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[150px] h-[150px] rounded-md overflow-hidden border border-gray-300"
            >
              <img
                src={src}
                alt={`Person ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Gallery;
