import { useRecoilState } from "recoil";
import { chatHistoryAtom } from "@/lib/chatHistory";
import { useQuery } from "@tanstack/react-query";
import { chatBot } from "@/api/chatbot";

export const useChatHistory = (
  chatBoxId: string,
  question: string,
  isClicked: boolean
) => {
  const [chatHistory, setChatHistory] = useRecoilState(
    chatHistoryAtom(chatBoxId)
  );

  const { data, isLoading, fetchStatus } = useQuery({
    queryKey: ["chat"],
    queryFn: () => chatBot(question),
    enabled: isClicked,
  });
};
