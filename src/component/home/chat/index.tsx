import NewSearch from "./new/NewSearch";
import { searchAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
import Older from "./older/Older";
interface IProps {
  result: any;
}

const CheckChatHistory = (props: any) => {
  const [chat, setChat] = useRecoilState(searchAtom);
  const { activeChatBox, chatHistory } = chat;

  if (!chatHistory[activeChatBox]) {
    return <NewSearch {...props} />;
  }
  if (chatHistory[activeChatBox].length < 2) {
    return <NewSearch {...props} />;
  }
  if (chatHistory[activeChatBox].length > 1) {
    return <Older {...props} activeChatBox={activeChatBox} />;
  }
  return <></>;
};

export default CheckChatHistory;
