import {
  ChatBox,
  Wrapper,
  ChatBoxContent,
  ChatBoxText,
} from "./ChatHistory.style";
import chatBox from "@/asset/chatbox.svg";
import Image from "next/image";
const ChatHistory = () => {
  return (
    <Wrapper>
      <ChatBox>
        <ChatBoxContent>
          <Image alt="chatBox" src={chatBox} />
          <ChatBoxText></ChatBoxText>
        </ChatBoxContent>
      </ChatBox>
    </Wrapper>
  );
};

export default ChatHistory;
