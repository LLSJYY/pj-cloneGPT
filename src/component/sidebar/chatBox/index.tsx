import { ChatBox, Span } from "./Chatbox.styles";
import add from "@/asset/add.svg";
import Image from "next/image";
const ChatBoxes = () => {
  return (
    <ChatBox>
      <Image src={add} alt="add" />
      <Span>New chat</Span>
    </ChatBox>
  );
};

export default ChatBoxes;
