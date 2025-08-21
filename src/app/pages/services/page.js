import { FaHeartbeat } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaUserMd } from 'react-icons/fa';
import { FaDna } from 'react-icons/fa';
import { FaFileMedical } from 'react-icons/fa';
import { FaWheelchair } from 'react-icons/fa';


const cardData = [
  {
    id: 1,
    icon: FaHeartbeat,
    title: " Our Medical Services",
    description:
      "We provide a full spectrum of healthcare services, from routine checkups to advanced treatments. Each department is equipped with expert staff and modern technology to ensure the best care possible",
  },
  {
    id: 2,
    icon: FaPills,
    title: " Our Medicines",
    description:
      "We offer a wide range of pharmaceutical products, including medications for various conditions. Our experienced pharmacists provide personalized care to meet the unique needs of our patients.",
  },
  {
    id: 3,
    icon: FaUserMd,
    title: " Our Doctors",
    description:
      "Our doctors are highly trained and experienced professionals who provide comprehensive healthcare services. They are dedicated to ensuring the best possible care for our patients.",
  },
  {
    id: 4,
    icon: FaDna,
    title: " Our Laboratories",
    description:
      "We have state-of-the-art laboratories that are equipped to perform advanced diagnostic tests and provide accurate results for our patients.",
  },
  {
    id: 5,
    icon: FaFileMedical,
    title: " Our Medical Records",
    description:
      "We maintain a secure and confidential medical records system to ensure the privacy and confidentiality of our patients' information.",
  },
  {
    id: 6,
    icon: FaWheelchair,
    title: " Our Ambulance Services",
    description:
      "We offer emergency medical transportation services, ensuring quick and efficient access to healthcare for patients in need.",
  },

];
function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-5">
        <h1 className="text-3xl font-bold text-[#555555]">Services</h1>
        <div className="border-b-4 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b]">
          Comprehensive medical services for patients of all ages.
        </p>
      </div>

      {/* Services cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {cardData.map((item) => (
      <div
        key={item.id}
        className="flex flex-col justify-center items-center py-6 px-4 gap-5 cursor-pointer text-[#555555] hover:text-[#3FBBC0]"
      >
        <div className="rounded-full flex justify-center items-center w-20 h-20 bg-white shadow-gray-300 shadow-lg">
          <span className="text-[#3FBBC0] text-2xl">{<item.icon />}</span>
        </div>
        <p className="text-2xl font-bold hover:text-[#3FBBC0]">
          {item.title}
        </p>
        <div className="border-b-2 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b] text-center">{item.description}</p>
      </div>
    ))}
  </div>

    </>
  );
}

export default Services;
