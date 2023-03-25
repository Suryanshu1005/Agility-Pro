import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../constants";
import Navlink from "./Navlink";
import { menu, close } from "../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          <Link to="/">
          <img src="https://agilitypro.in/templates/agilitypro/images/agilitypro.png" 
          alt="logo" className="md:cursor-pointer h-9" />
          </Link>
          <div className="md:hidden text-3xl ml-auto" onClick={() => setOpen(!open)}>
            <ion-icon name={`${ open ? "close" : "menu"}`}></ion-icon>
          </div>
          </div>

        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <Navlink />
        </ul>
        {/* Mobile nav */}
        <ul className={` bg-white md:hidden absolute w-full h-full bottom-0 py-24 pl-4
              duration-500 ${open ? "left-0" : "left-[-100%]"} `}>
          <Navlink />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar