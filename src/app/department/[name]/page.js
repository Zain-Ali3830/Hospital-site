'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
// import 'react-toastify/dist/ReactToastify.css';

function DepartmentPage({ params }) {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    department: params.name,
    fee: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/api/doctors/getdoctors?spec=${params.name}`)
      .then(res => {
        setDoctors(res.data);
      });
  }, [params.name]);

  const openModal = (doctor) => {
    setForm({
      name: "",
      email: "",
      phone: "",
      doctor: doctor.name,
      department: params.name,
      fee: doctor.fee,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const { name, email, phone } = form;
    if (!name || !email || !phone) {
      toast.error("Please fill the complete form!");
      return;
    }
    setShowModal(false);
    toast.success("Appointment confirmed successfully!");
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ${showModal ? 'blur-sm pointer-events-none' : ''}`}>
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
              <p className="text-teal-500 font-semibold mb-2">{doctor.spec}</p>
              <p className="text-gray-600 mb-1">Degree: {doctor.deg}</p>
              <p className="text-gray-600 mb-1">Experience: {doctor.exp} years</p>
              <p className="text-gray-600 mb-1">Fee: ${doctor.fee}</p>
              <p className="text-gray-600">Availability: {doctor.avail}</p>
              <button
                className="mt-4 w-full bg-[#3FBBC0] hover:bg-[#3FBBC0]/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
                onClick={() => openModal(doctor)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative mx-4">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              <AiOutlineClose />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Book Appointment</h2>
            <div className="flex flex-col gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border px-4 py-2 rounded"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border px-4 py-2 rounded"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border px-4 py-2 rounded"
              />
              <input
                name="doctor"
                value={form.doctor}
                readOnly
                className="border px-4 py-2 rounded bg-gray-100"
              />
              <input
                name="department"
                value={form.department}
                readOnly
                className="border px-4 py-2 rounded bg-gray-100"
              />
              <input
                name="fee"
                value={`$${form.fee}`}
                readOnly
                className="border px-4 py-2 rounded bg-gray-100"
              />
              <button
                onClick={handleConfirm}
                className="bg-[#3FBBC0] hover:bg-[#3FBBC0]/80 text-white font-semibold py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentPage;
