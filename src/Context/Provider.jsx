/* eslint-disable react/prop-types */
import { modelContext } from "./CreateContext";
import { useState } from "react";
import run from "../config/GeminiAi";
export const Provider = ({ children }) => {
  const [Prompt, setPrompt] = useState("");
  const [ResponceData, setResponceData] = useState([]);
  const [RequestSend, setRequestSend] = useState(false);
  const [recentPrompt, setrecentPrompt] = useState(null);
  const [loader, setloader] = useState(false);

  const Sentrequest = async () => {
    setrecentPrompt(Prompt);
    setloader(true);
    setPrompt("");
    setRequestSend(true);

    const GeminiResponce = await run(Prompt);

    let ResponceArray = GeminiResponce.split("**");

    let newResponce = "";
    for (let i = 0; i < ResponceArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponce += ResponceArray[i];
      } else {
        newResponce += "<b>" + ResponceArray[i] + "</b>";
      }
    }

    let FinalResponceT = newResponce.split("*").join("</br>");

    let newResponceArray = FinalResponceT.split(/[\d]+/);
    console.log(newResponce.split("*"));

    setResponceData(newResponceArray);
    setloader(false);
  };

  const value = {
    Prompt,
    setPrompt,
    loader,
    Sentrequest,
    ResponceData,
    RequestSend,
    recentPrompt,
  };
  return (
    <modelContext.Provider value={value}>{children}</modelContext.Provider>
  );
};
