import add from "@/asset/add.svg";
import Image from "next/image";
import { NewChatButton } from "./NewChat.styles";
const NewChat = () => {
  return (
    <NewChatButton onClick={() => console.log("a")}>
      <Image src={add} alt="add" />
      New chat
    </NewChatButton>
  );
};

export default NewChat;
