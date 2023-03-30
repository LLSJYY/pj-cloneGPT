import { useRecoilState } from "recoil";
import { searchAtom } from "@/lib/chatHistory";
import { useQuery } from "@tanstack/react-query";
import { chatBot } from "@/api/chatbot";
import { useState, useEffect } from "react";

export const useChatHistory = (question: string) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [chat, setChat] = useRecoilState(searchAtom);
  const { data, fetchStatus } = useQuery({
    queryKey: ["chat"],
    queryFn: () => chatBot(question),
    enabled: isClicked,
  });
  console.log(data, question);
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
