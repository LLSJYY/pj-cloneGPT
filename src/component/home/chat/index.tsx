import NewSearch from "./New/NewSearch";
import { chatAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
import Success from "./Success/Success";
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
    return <Success {...props} chatBoxId={chatBoxId} />;
  }
  return <></>;
};

export default Result;
