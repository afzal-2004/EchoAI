import { GiHamburgerMenu } from "react-icons/gi";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosHelpCircleOutline, IoMdRefresh } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";

import "./sideBar.css";

export const Sidebar = () => {
  const [openSidebar, setopenSidebar] = useState(false);
  const data = [
    {
      icon: <IoIosHelpCircleOutline className="text-[25px] " />,
      text: "Help",
    },
    {
      icon: <IoSettings className=" text-[25px]  " />,
      text: " Setting",
    },
    {
      icon: <IoMdRefresh className=" text-[25px]  " />,
      text: " Activity",
    },
  ];
  const handleSidebar = () => {
    setopenSidebar(!openSidebar);
  };

  return (
    <>
      <section className="sidebar navbar ">
        <div className={`sidebarTop ${openSidebar && "items-start"}`}>
          <GiHamburgerMenu className="text-[35px]" onClick={handleSidebar} />
          <p
            className={`flex justify-center items-center gap-3  ${
              openSidebar && "bg-gray-400"
            } p-2  rounded-3xl`}
          >
            <FaCirclePlus className="text-[35px] " />
            {openSidebar && <span>New Chat</span>}
          </p>
        </div>
        {openSidebar && (
          <div>
            <p>What is React....</p>
          </div>
        )}

        <div className="sidebarBelowmain">
          {data.map((Data, i) => (
            <div key={i} className="SidebarBelow">
              {Data.icon}

              {openSidebar && <p>{Data.text}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
