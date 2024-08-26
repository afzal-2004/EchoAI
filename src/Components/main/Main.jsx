import { IoMdArrowDropdown } from "react-icons/io";
import { FaHotel, FaYoutube } from "react-icons/fa";
import { FaCode, FaMicrophone } from "react-icons/fa6";
import { ImFilePicture } from "react-icons/im";
import { MdOutlineFlight } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import "./main.css";
import { modelContext } from "../../Context/CreateContext.jsx";
import { useContext } from "react";

export const Main = () => {
  const {
    recentPrompt,
    Prompt,
    setPrompt,
    Sentrequest,
    RequestSend,
    ResponceData,
    loader = true,
  } = useContext(modelContext);

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
      <section className="main ">
        <nav className="navitems">
          <div className=" geminiText ">
            <p>Gemini</p>
            <IoMdArrowDropdown />
          </div>
          <img src="/AvtarGemini.png" alt="" className="w-[70px]" />
        </nav>
        {!RequestSend ? (
          <div className=" h-[70vh]">
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
          </div>
        ) : (
          <>
            {loader ? (
              <>
                <div className="h-[70vh] ">
                  <hr className="loader" />
                  <hr className="loader" />
                  <hr className="loader" />
                </div>
              </>
            ) : (
              <div className="h-[70vh] overflow-scroll">
                <div className="requestPrompt">
                  <img
                    src="./AvtarGemini.png"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <p>{recentPrompt}</p>
                </div>
                <div className="responcePrompt ">
                  <SiGooglegemini />
                  {/* <p>{ResponceData}</p> */}
                  <p dangerouslySetInnerHTML={{ __html: ResponceData }}></p>
                </div>
              </div>
            )}
          </>
        )}

        <div className=" PromptContainer ">
          <div className=" promptWindow ">
            <input
              type="text"
              placeholder="Enter a prompt here  "
              className=" promtinput "
              value={Prompt}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
                setPrompt(e.target.value);
              }}
            />
            <div className="prompticons">
              <ImFilePicture />
              <FaMicrophone />

              {(Prompt || ResponceData.length > 0) && (
                <IoSendSharp
                  onClick={() => {
                    Sentrequest();
                  }}
                />
              )}
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
