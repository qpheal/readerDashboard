import React from "react";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsPerson } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { IoChevronDown, IoNotificationsOutline } from "react-icons/io5";
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineBarChart,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa"
import { GiChoice } from "react-icons/gi";
import { MdSecurity, MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", link: "./" },
    { title: "Analytics", icon: <AiOutlineBarChart />, link: "./analytics" },
    { title: "Customer Management", spacing: true, icon: <FaUsers /> },
    { title: "Profile", icon: <BsPerson />, link: "./profile" },
    {
      title: "Settings",
      link: "./settings",
      submenu: true,
      icon: <AiOutlineSetting />,
      submenuItems: [
        {
          title: "Preference",
          link: "/settings/preference",
          icon: <GiChoice />,
        },
        {
          title: "Security",
          link: "./settings/security",
          icon: <MdSecurity />,
        },
        {
          title: "Notification",
          link: "./settings/notifications",
          icon: <IoNotificationsOutline />,
        },
      ],
      onClick: true,
    },
    {
      title: "Support",
      icon: <MdContactSupport />,
      link: "/settings/preference",
    },
    { title: "LogOut", spacing: true, icon: <AiOutlineLogout /> },
  ];
  return (
    <div
      className={`bg-[white] h-screen p-5 py-1 ${
        open ? "w-[285px]" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-[white] text-[orange] text-3xl rounded-full border-2 top-9 absolute border-[orange] w-8 h-8 cursor-pointer  ${
          open ? "left-[273px]" : "left-[68px]"
        } ${!open && "rotate-180"} duration-300 `}
        onClick={() => setOpen(!open)}
      />

      <div
        className={`flex items-center rounded-md bg-light-white border-[black] border-2 mt-6 ${
          !open ? "px-2.5" : "px-4"
        } py-2`}
        style={{ width: "90%" }}
      >
        <BsSearch
          className={`text-[orange] text-lg block float-left cursor-pointer ${
            open && "mr-2"
          } `}
        />

        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-black focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <Link
              to={menu.link}
              key={index}
              className={`text-[black] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-orange hover:font-bold hover:color-[orange] rounded-md mt-2 ${
                menu.spacing ? "mt-9" : "mt-2"
              } `}
              style={{ hover: "red" }}
            >
              <span className="text-2xl text-[orange] block float-left ">
                {menu.icon ? menu.icon : <BiSolidDashboard />}
              </span>
              <span
                className={`text-[16px] font-[600] hover:font-bold font-medium flex-1 ${
                  !open && "hidden"
                } duration-100 `}
              >
                {menu.title}
              </span>
              {menu.submenu && open && (
                <IoChevronDown
                  onClick={() => setSubMenuOpen(!subMenuOpen)}
                  className={`${subMenuOpen && "rotate-180"} duration-50`}
                />
              )}
            </Link>

            {menu.submenu && subMenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <Link
                    to={submenuItem.link}
                    key={index}
                    className={`text-[black] text-sm hover:font-bold hover:bg-light-orange flex items-center gap-x-4 cursor-pointer p-1 px-8 hover:bg-light-white rounded-md mt-2`}
                  >
                  <span className="text-2xl text-[orange] block float-left ">
                {submenuItem.icon ? submenuItem.icon : <BiSolidDashboard />}
              </span>
              <span className={`text-[16px] ${
                  !open && "hidden"
                } duration-100 `}>
              {submenuItem.title}
              </span>
                    
                  </Link>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
