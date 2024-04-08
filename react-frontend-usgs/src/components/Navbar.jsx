import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <div className="bg-gray-700 p-6 text-black font-semibold flex justify-between  items-center">
        <Link to={"/"}>
        <button className="p-2 rounded-md border-white flex items-center justify-center">
  <FaHome className="w-6 h-6 text-blue-500 hover:text-white hover:scale-125" />
</button>
        </Link>
        <h1 className="text-white md:text-sm lg:text-xl text-center">Earthquakes, Past 30 days. USGS </h1>
      </div>
    </>
  );
};

export default Navbar;
