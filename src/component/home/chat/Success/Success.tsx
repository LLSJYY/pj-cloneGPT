import { useRecoilState } from "recoil";
import { chatHistoryAtom } from "@/lib/chatHistory";

const Success = ({ chatBoxId }: any) => {
  const [chatHistory, setChatHistory] = useRecoilState(
    chatHistoryAtom(chatBoxId)
  );
  console.log(chatHistory);
  return <>{chatHistory.chatDetail.firstChat[0]}</>;
};

export default Success;
