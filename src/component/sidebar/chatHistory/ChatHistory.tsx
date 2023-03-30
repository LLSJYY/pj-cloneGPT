import {
  ChatBox,
  Wrapper,
  ChatBoxContent,
  ChatBoxText,
} from "./ChatHistory.style";
import chatBox from "@/asset/chatbox.svg";
import Image from "next/image";
import { searchAtom } from "@/lib/chatHistory";
import { useRecoilValue } from "recoil";
const ChatHistory = () => {
  const chatBoxes = useRecoilValue(searchAtom);
  const { chatHistory } = chatBoxes;
  return (
    <>
      <Wrapper>
        <ChatBox>
          {Object.keys(chatHistory).map((el) => (
            <ChatBoxContent key={el}>
              <Image alt="chatBox" src={chatBox} />
              <ChatBoxText>
                <>{el}</>
              </ChatBoxText>
            </ChatBoxContent>
          ))}
        </ChatBox>
      </Wrapper>
    </>
  );
};

export default ChatHistory;
