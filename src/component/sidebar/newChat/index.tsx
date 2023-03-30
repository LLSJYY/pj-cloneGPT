import add from "@/asset/add.svg";
import Image from "next/image";
import { NewChatButton } from "./NewChat.styles";
import { useSetRecoilState } from "recoil";
import { searchAtom } from "@/lib/chatHistory";
const NewChat = () => {
  const setNewChat = useSetRecoilState(searchAtom);
  const btnClickHandler = () => {
    setNewChat((prev) => ({
      ...prev,
      chatHistory: {
        ...prev.chatHistory,
        [`chatbox_${Object.keys(prev.chatHistory).length}`]: [],
      },
    }));
  };

  return (
    <NewChatButton onClick={btnClickHandler}>
      <Image src={add} alt="add" />
      New chat
    </NewChatButton>
  );
};

export default NewChat;
