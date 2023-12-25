import React from "react";
import Logo from "../../assets/img/Logo.png";
import DarkLogo from "../../assets/img/Darklogo.png";
import { Crossicon } from "./Icon";

const Sidebar = ({ setSide }) => {
  return (
    <div className=" bg-black max-w-[400px] w-full h-screen py-6 px-4 relative">
      <span
        className=" absolute top-4 right-4 cursor-pointer"
        onClick={() => setSide(false)}
      >
        <Crossicon />
      </span>
      <div className="m-6">
        <img className="w-[260px] h-[72px]" src={DarkLogo} alt="" />
      </div>
      <ul className={`flex  flex-col mt-9 gap-[52px] text-white `}>
        <a href="">
          <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
            ABOUT
          </li>
        </a>
        <a href="">
          <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
            SERVICES
          </li>
        </a>
        <a href="">
          <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
            ROADMAP
          </li>
        </a>
        <a href="">
          <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
            TEAM
          </li>
        </a>
        <a href="">
          <li className=" hover:font-bold font-Montserrat text-[17px] font-medium">
            FAQ’s
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
