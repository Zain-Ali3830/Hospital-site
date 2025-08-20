"use client";
function Emergency() {
  return (
    <>
      <div className="bg-[#3FBBC0] flex flex-col justify-center items-center gap-4 py-10">
        <h1 className="text-3xl font-bold text-white text-center">
          In an emergrncy? Need help now?
        </h1>
        <p className="text-white text-center max-w-xl px-4">
          Our emergency department is open 24/7 to provide immediate medical
          attention. Whether it's a sudden illness or a critical situation, our
          expert team is ready to help you anytime, any day.
        </p>
        <button className="bg-transparent py-2 px-6 border-2 border-white text-white hover:bg-white transition duration-300 hover:text-[#3FBBC0] rounded-sm cursor-pointer">
          Make an Appointment
        </button>
      </div>
    </>
  );
}
export default Emergency;
