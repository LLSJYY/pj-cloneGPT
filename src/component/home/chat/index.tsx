import NewSearch from "./new/NewSearch";
import { chatAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
import Older from "./older/Older";
interface IProps {
  result: any;
}

const Result = (props: any) => {
  const [chat, setChat] = useRecoilState(chatAtom);
  const { isNewChatbox, chatBoxId } = chat;
  if (isNewChatbox) {
    return <NewSearch {...props} />;
  }
  if (!isNewChatbox) {
    return <Older {...props} chatBoxId={chatBoxId} />;
  }
  return <></>;
};

export default Result;
