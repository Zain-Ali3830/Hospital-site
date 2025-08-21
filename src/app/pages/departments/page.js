const departments = [
  {
    id: 1,
    image: "/emergency.jpg",
    title: "Emergency Department",
    description:
      "Provides immediate care for urgent and life-threatening conditions.",
  },
  {
    id: 2,
    image: "/medicine.jpg",
    title: "Internal Medicine",
    description: "Manages adult diseases with non-surgical treatment methods.",
  },
  {
    id: 3,
    image: "/cardiology.jpg",
    title: "Cardiology",
    description: "Specializes in heart-related conditions and treatments.",
  },
  {
    id: 4,
    image: "/neurology.jpg",
    title: "Neurology",
    description: "Focuses on disorders of the brain and nervous system.",
  },
  {
    id: 5,
    image: "/pulmonology.jpg",
    title: "Pulmonology",
    description: "Deals with respiratory system diseases like asthma and COPD.",
  },
  {
    id: 6,
    image: "/endruconology.jpg",
    title: "Endocrinology",
    description: "Treats hormone imbalances and gland-related disorders.",
  },
  {
    id: 7,
    image: "/gastroenterology.jpg",
    title: "Gastroenterology",
    description: "Manages diseases of the digestive tract and liver.",
  },
  {
    id: 8,
    image: "/generalsurgery.jpg",
    title: "General Surgery",
    description: "Performs surgical procedures for various conditions.",
  },
  {
    id: 9,
    image: "/orthopedics.jpg",
    title: "Orthopedics",
    description: "Handles bone, joint, and muscle injuries or disorders.",
  },
  {
    id: 10,
    image: "/neurosurgery.jpg",
    title: "Neurosurgery",
    description: "Conducts surgeries on the brain, spine, and nerves.",
  },
  {
    id: 11,
    image: "/cardiothoracicsurgery.jpg",
    title: "Cardiothoracic Surgery",
    description: "Performs heart and chest-related surgeries.",
  },
  {
    id: 12,
    image: "/plasticsurgery.jpg",
    title: "Plastic Surgery",
    description: "Offers reconstructive and cosmetic surgical procedures.",
  },
];

function Departments() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-10 gap-5">
        <h1 className="text-3xl font-bold text-[#555555]">Departments</h1>
        <div className="border-b-4 border-[#3FBBC0] w-10"></div>
        <p className="text-[#6b6b6b]">
          Our hospital departments provide specialized care across a wide range
          of medical fields to ensure comprehensive treatment for every patient.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {departments.map((department) => {
          return (
            <div
              key={department.id}
              className="flex flex-col justify-center items-center py-4 px-4 gap-5 border-2 rounded-sm shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:text-[#3FBBC0] "
            >
              <img
                src={department.image}
                alt={department.title}
                className="cursor-pointer object-cover w-60 h-60"
              />
              <h3 className="font-bold text-[#555555]>">{department.title}</h3>
              <p className="text-[#6b6b6b]">{department.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Departments;
