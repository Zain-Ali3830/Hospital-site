"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 md:flex-row w-full">
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="input input-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          />
          <select
            onChange={(e) =>
              setFormData({ ...formData, doctor: e.target.value })
            }
            name="doctor"
            value={formData.doctor || "Select Doctor"}
            className="select select-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          >
            <option disabled selected hidden >
              Select Doctor
            </option>
            <option>Doctor 1</option>
            <option>Doctor 2</option>
            <option>Doctor 3</option>
            <option>Doctor 4</option>
            <option>Doctor 5</option>
          </select>
          <select
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            name="department"
            value={formData.department||"Select Department"}
            className="select select-bordered w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
          >
            <option disabled selected hidden className="text-[#6b6b6b]">
              Select Department
            </option>
            <option>Department 1</option>
            <option>Department 2</option>
            <option>Department 3</option>
            <option>Department 4</option>
            <option>Department 5</option>
          </select>
        </div>

        <textarea
          placeholder="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="textarea textarea-bordered w-full h-32 px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3FBBC0]"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (
              !formData.name ||
              !formData.email ||
              !formData.phone ||
              !formData.date ||
              !formData.doctor ||
              !formData.department
            ) {
              toast.error("Please fill all the fields");
              return;
            } else {
              const formatted = new Date(formData.date).toLocaleString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              );
              setFormData({ ...formData, date: formatted });
              console.log(formData);
              toast.success("Appointment Booked Successfully");
              setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                message: "",
                doctor: "",
                department: "",
              });
            }
          }}
          className=" text-semibold bg-[#3FBBC0] py-2 px-6 border-2 border-[#3FBBC0] text-white hover:bg-white transition duration-300 hover:text-[#3FBBC0] rounded-sm cursor-pointer"
        >
          Make an Appointment
        </button>
      </div>
    </>
  );
}

export default Appointment;
