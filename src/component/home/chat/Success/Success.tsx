import { useRecoilState } from "recoil";
import { chatHistoryAtom } from "@/lib/chatHistory";

const Success = ({ chatBoxId }: any) => {
  const [chatHistory, setChatHistory] = useRecoilState(
    chatHistoryAtom(chatBoxId)
  );
  return <>{chatHistory.chatDetail}</>;
};

export default Success;
