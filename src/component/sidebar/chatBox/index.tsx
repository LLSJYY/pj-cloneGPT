import { NewChatBox, Span } from "./Chatbox.styles";
import add from "@/asset/add.svg";
import Image from "next/image";
const ChatBoxes = () => {
  return (
    <NewChatBox>
      <Image src={add} alt="add" />
      <Span>New chat</Span>
    </NewChatBox>
  );
};

export default ChatBoxes;
