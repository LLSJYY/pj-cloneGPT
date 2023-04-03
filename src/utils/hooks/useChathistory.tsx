import { useRecoilState } from "recoil";
import { searchAtom } from "@/lib/chatHistory";
import { useQuery } from "@tanstack/react-query";
import { chatBot, GPTTURBO } from "@/api/chatbot";
import { useState, useEffect } from "react";

export const useChatHistory = (question: string) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [chat, setChat] = useRecoilState(searchAtom);
  const { activeChatBox, chatHistory } = chat;
  const propmtQuestion = `${chatHistory[activeChatBox].join(",")}${question}`;
  const { data, fetchStatus, status } = useQuery({
    queryKey: ["chat"],
    queryFn: () => GPTTURBO(propmtQuestion),
    enabled: isClicked,
  });
  console.log(data.split(":"));
  useEffect(() => {
    if (isClicked) {
      setIsClicked(false);
      setChat((prev) => {
        return {
          ...prev,
          chatHistory: {
            ...prev.chatHistory,
            [prev.activeChatBox]: [
              ...prev.chatHistory[prev.activeChatBox],
              question,
              data,
            ],
          },
        };
      });
    }
  }, [data]);
  return {
    data,
    fetchStatus,
    setIsClicked,
  };
};
