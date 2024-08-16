import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import user1 from "../../assets/user1.jpg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar bg-gray-50 p-4 shadow-md ">
      <div className="logo flex items-center space-x-2">
        <h1 className="text-[orange] font-bold text-[24px]">ReaderApp</h1>
      </div>
      <div className="icons flex items-center space-x-3">
        <div className="notification relative cursor-pointer">
          <IoIosNotificationsOutline className="text-[26px] hover:text-orange-400" />
          <span className="notification-badge">1</span>
        </div>
        <AiOutlineSetting className="text-[26px] hover:text-orange-400 cursor-pointer" />
        <div className="user flex items-center space-x-1 cursor-pointer hover:text-orange-400">
          <img src={user1} alt="User" className="w-7 h-7 object-cover rounded-full border-[2px] border-[orange]" />
          <span className="font-semibold text-[18px]">Carl</span>
        </div>
      </div>
    </div>
  );
};
