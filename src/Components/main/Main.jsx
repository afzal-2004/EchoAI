import { IoMdArrowDropdown } from "react-icons/io";
import { FaHotel, FaYoutube } from "react-icons/fa";
import { FaCode, FaMicrophone } from "react-icons/fa6";
import { ImFilePicture } from "react-icons/im";
import { MdOutlineFlight } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";

import "./main.css";

export const Main = () => {
  const data = [
    {
      text: "Find hotels in Phuket for a week in March and suggest a packing list.",
      icon: <FaHotel className="cardicons" />,
    },
    {
      text: "Find flights to Miami for New Years. What's the usual temperature then?",
      icon: <MdOutlineFlight className="cardicons" />,
    },
    {
      text: "Give me tips for how to grow my YouTube channel.",
      icon: <FaYoutube className="cardicons" />,
    },
    {
      text: " full Stack devlopement Learning roadmap in various tech stack.",
      icon: <FaCode className="cardicons" />,
    },
  ];

  return (
    <>
      <section className="main">
        <nav className="navitems">
          <div className=" geminiText ">
            <p>Gemini</p>
            <IoMdArrowDropdown />
          </div>
          <img src="/AvtarGemini.png" alt="" className="w-[70px]" />
        </nav>
        <div className="parentDevtext">
          <div>
            <p className="devText">Hello Dev ,</p>
            <p>How can I help You</p>
          </div>
        </div>

        <div className="cardContainer">
          <div className="cardParent ">
            {data.map((Data, i) => (
              <div key={i} className=" card    ">
                <p className="text-[20px]">{Data.text}</p>
                {Data.icon}
              </div>
            ))}
          </div>
        </div>
        <div className=" PromptContainer">
          <div className=" promptWindow ">
            <input
              type="text"
              placeholder="Enter a prompt here  "
              className=" promtinput "
            />
            <div className="prompticons">
              <ImFilePicture />
              <FaMicrophone />
              <IoSendSharp />
            </div>
          </div>
          <p className=" belowwarning ">
            {" "}
            Gemini may Display incorrect info , including about people , So
            double check its responce, Your privacy & Gemini Apps
          </p>
        </div>
      </section>
    </>
  );
};
