import { TiTick } from "react-icons/ti";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { FaFlask } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import {
  FaHospital,
  FaHeartbeat,
  FaStethoscope,
  FaUserNurse,
} from "react-icons/fa";

const cardData = [
  {
    id: 1,
    icon: FaUserDoctor,
    numbers: 25,
    title: "Doctors",
  },
  {
    id: 2,
    icon: FaHospitalAlt,
    numbers: 15,
    title: "Departments",
  },
  {
    id: 3,
    icon: FaFlask,
    numbers: 8,
    title: "Labs",
  },
  {
    id: 4,
    icon: FaAward,
    numbers: 150,
    title: "Awards",
  },
];
function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-5">
        <h1 className="text-3xl font-bold text-[#555555]">About Us</h1>
        <div className="border-b-4 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b]">
          Providing exceptional care and building healthier communities every
          day.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-20 lg:flex-row md:px-28 mt-10">
        <iframe
          //   width="860"
          height="415"
          src="https://www.youtube.com/embed/EBlhQ0IdAmE?si=P_KhtuTIZJyJ1RhV"
          title="YouTube video player"
          //   frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="md:w-[800px] lg:w-[1000px]"
        ></iframe>

        <div className="flex flex-col justify-center items-center gap-5 px-4">
          <h2 className="text-2xl font-bold text-[#555555]">
            Providing compassionate care with clinical excellence and modern
            technology.
          </h2>
          <p className="text-[#6b6b6b]">
            We are dedicated to offering personalized treatment plans,
            prioritizing your health and well-being at every step.
          </p>
          <ul className="text-[#6b6b6b]">
            <li>
              <div className="flex">
                <TiTick size={30} className="text-[#3FBBC0]" />
                <p>
                  {" "}
                  Our team is available around the clock to deliver timely and
                  effective medical care.
                </p>
              </div>
            </li>
            <li>
              <div className="flex">
                <TiTick size={30} className="text-[#3FBBC0]" />
                <p>
                  {" "}
                  We prioritize patient safety and confidentiality, ensuring
                  that your privacy is protected.
                </p>
              </div>
            </li>
            <li>
              <div className="flex">
                <TiTick size={30} className="text-[#3FBBC0]" />
                <p>
                  {" "}
                  Our commitment to innovation and technology empowers us to
                  deliver cutting-edge medical solutions.
                </p>
              </div>
            </li>
          </ul>
          <p className="text-[#6b6b6b]">
            With a focus on continuous improvement, we strive to make every
            experience better, safer, and more comforting. Your health is our
            mission, and your trust is our greatest reward.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className="flex flex-col justify-center items-center gap-10 px-10 md:flex-row  mt-10">
        {cardData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center gap-10 bg-gray-100  py-4 w-64 rounded-sm shadow-sm md:w-80 "
            >
              <span className="text-[#3FBBC0] text-4xl">{<item.icon />}</span>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl text-[#555555]">
                  {item.numbers}
                </h1>
                <p className="text-[#6b6b6b]">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Last Section */}
      <div className="flex flex-col justify-center items-center gap-10 px-10 lg:flex-row  mt-10">
        <img src="/lab.jpg" className="md:w-[600px]"></img>
        <div className="space-y-6 ">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#555555]">
            Who We Are & What We Stand For
          </h2>

          <div className="flex items-start gap-3">
            <FaUserDoctor className="text-[#3FBBC0] text-3xl" />
            <div className="text-[#6b6b6b]">
              <h4 className="font-bold text-[#555555]">Expert Medical Team</h4>
              <p>
                Our qualified and experienced doctors are dedicated to providing
                world-class healthcare with empathy and precision.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaHospital className="text-[#3FBBC0] text-3xl" />
            <div className="text-[#6b6b6b]">
              <h4 className="font-bold text-[#555555]">Modern Facilities</h4>
              <p>
                Our hospital is equipped with state-of-the-art technology to
                ensure accurate diagnosis and effective treatment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaHeartbeat className="text-[#3FBBC0] text-3xl" />
            <div className="text-[#6b6b6b]">
              <h4 className="font-bold text-[#555555]">Patient-Centered Care</h4>
              <p>
                Every patient receives personalized attention with care plans
                designed for comfort, safety, and recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
