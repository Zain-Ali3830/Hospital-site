"use client";
import { FaHeartbeat, FaBrain, FaXRay, FaStethoscope } from "react-icons/fa";
import Link from "next/link";
const cardsData = [
  {
    id: 1,
    department: "Cardiologist",
    explanation: "Specializes in heart disorders, cardiovascular care.",
    icon: FaHeartbeat,
  },
  {
    id: 2,
    department: "Neurologist",
    explanation: "Focuses on disorders of the brain and nervous system.",
    icon: FaBrain,
  },
  {
    id: 3,
    department: "Radiologist",
    explanation: "Uses imaging technology like X-rays and MRIs for diagnosis.",
    icon: FaXRay,
  },
  {
    id: 4,
    department: "Medicine",
    explanation: "Covers general diagnosis and healthcare services.",
    icon: FaStethoscope,
  },
];
function Cards() {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 md:flex-row gap-4 ">
      {cardsData.map((item) => {
        const Icon = item.icon;
        return (
        <Link key={item.id} href={`/department/${item.department.toLocaleLowerCase()}`}>
          <div
            className="flex flex-col items-center py-4 px-4 md:px-6 relative border-2 rounded-sm shadow-sm cursor-pointer hover:bg-[#3FBBC0] hover:text-white transition-colors duration-300 overflow-hidden "
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <Icon className="text-gray-700 text-3xl " />
              <h1 className="font-bold text-3xl">{item.department}</h1>
            </div>
            <p className="text-center text-[#6b6b6b]">{item.explanation}</p>
          </div>
        </Link>
        );
      })}
    </div>
  );
}

export default Cards;
