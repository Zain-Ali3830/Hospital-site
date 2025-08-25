"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    doctor: "",
    department: "",
  });

  const [doctors, setDoctors] = useState([]);

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formatted = new Date(formData.date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const updatedData = { ...formData, date: formatted };
    console.log(updatedData);
    try {
      const result = await axios.post(
        "https://hospital-backend-production-7f96.up.railway.app/api/appointment",
        updatedData
      );
      // console.log('Result',result)
      toast.success(result.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
        doctor: "",
        department: "",
      });
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    }
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/getemergencydoctors?department=${formData.department}`
      )
      .then((res) => setDoctors(res.data));
  }, [formData.department]);

  console.log(doctors);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-5">
        <h1 className="text-3xl font-bold text-[#555555]">Appointment</h1>
        <div className="border-b-4 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b]">
          Book your appointment today and take the first step toward better
          health.
        </p>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center px-20 gap-5">
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row  w-full ">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleFormData}
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormData}
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 md:flex-row w-full">
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleFormData}
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <select
            onChange={handleFormData}
            name="department"
            value={formData.department || "Select Department"}
            className="select select-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          >
            <option disabled selected hidden className="text-[#6b6b6b]">
              Select Department
            </option>
            <option>Cardiology</option>
            <option>Surgery</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Radiology</option>
          </select>
          <select
            onChange={handleFormData}
            name="doctor"
            value={formData.doctor || "Select Doctor"}
            className="select select-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          >
            <option disabled selected hidden>
              Select Doctor
            </option>
            {doctors.length > 0 ? (
              doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {`Dr.${doc.name}`}
                </option>
              ))
            ) : (
              <option disabled>Please Select Department</option>
            )}
          </select>
        </div>

        <textarea
          placeholder="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={handleFormData}
          className="textarea textarea-bordered w-full h-32 px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
        />
        <button
          onClick={handleSubmit}
          className=" text-semibold bg-[#3FBBC0] py-2 px-6 border-2 border-[#3FBBC0] text-white hover:bg-white transition duration-300 hover:text-[#3FBBC0] rounded-sm cursor-pointer"
        >
          Make an Appointment
        </button>
      </div>
    </>
  );
}

export default Appointment;
