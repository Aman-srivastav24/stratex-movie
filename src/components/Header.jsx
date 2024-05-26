import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaGrinHearts } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="bg-black text-white font-bold p-2 md:p-4 m-4 rounded-lg ">
        <div className="container flex  justify-evenly items-center mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="cursor-pointer hover:scale-110">All MOVIES</h1>
            <BiSolidCameraMovie className="text-[20px]"/>
          </Link>
          <Link to="fav" className="flex items-center gap-2">
            <h1 to="#" className="cursor-pointer hover:scale-110">
              FAVORITE
            </h1>
            <FaGrinHearts className="text-[20px]"/>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
