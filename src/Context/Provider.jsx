/* eslint-disable react/prop-types */
import { modelContext } from "./CreateContext";
import { useState } from "react";
import run from "../config/GeminiAi";
export const Provider = ({ children }) => {
  const [Prompt, setPrompt] = useState("");
  const [ResponceData, setResponceData] = useState([]);
  const [RequestSend, setRequestSend] = useState(false);
  const [recentPrompt, setrecentPrompt] = useState("");

  const Sentrequest = async () => {
    run(Prompt);

    const GeminiResponce = await run(Prompt);
    setResponceData(GeminiResponce);
    // if (!Prompt === "") {
    setRequestSend(true);
    // }
    setrecentPrompt(Prompt);
    setPrompt("");
  };

  const value = {
    Prompt,
    setPrompt,
    Sentrequest,
    ResponceData,
    RequestSend,
    recentPrompt,
  };
  return (
    <modelContext.Provider value={value}>{children}</modelContext.Provider>
  );
};
