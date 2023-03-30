import { useRecoilState } from "recoil";
import { searchSelector, chatNumber, chatHistoryAtom } from "@/lib/chatHistory";
import { useQuery } from "@tanstack/react-query";
import { chatBot } from "@/api/chatbot";
import { useState, useEffect } from "react";

export const useChatHistory = (question: string) => {
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useRecoilState(searchSelector(question));
  const [_chatNumber, setChatNumber] = useRecoilState(chatNumber);
  console.log(search);
  const { data, isLoading, fetchStatus } = useQuery({
    queryKey: ["chat"],
    queryFn: () => chatBot(question),
    enabled: isClicked,
  });

  return {
    data,
    fetchStatus,
    setIsClicked,
  };
};
