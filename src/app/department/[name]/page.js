'use client'
import {useState, useEffect } from "react"
import axios from "axios"
function DepartmentPage({params}){
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/doctors/getdoctors?spec=${params.name}`)
        .then(res=>setDoctors(res.data))
    },[])
    console.log(doctors)
    return(
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
        <button className="mt-4 w-full bg-[#3FBBC0] hover:bg-[#3FBBC0/80] text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer">
          Book Appointment
        </button>
      </div>
    </div>
  ))}
</div>

    )
}

export default DepartmentPage