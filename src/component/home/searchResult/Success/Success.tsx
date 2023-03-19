import { useRecoilState } from "recoil";
import { getChatBoxState } from "@/lib/chatHistory";
import { useState } from "react";
const Success = () => {
  const [chatBoxState, setChatBoxState] = useRecoilState(
    getChatBoxState(chatBoxId)
  );
  const [currentQuestion, setCurrentQuestion] = useState("");

  return <>{result.map((el) => el)}</>;
};

export default Success;
