import {
  ChatBox,
  Wrapper,
  ChatBoxContent,
  ChatBoxText,
} from "./ChatHistory.style";
import chatBox from "@/asset/chatbox.svg";
import Image from "next/image";
import { searchAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
const ChatHistory = () => {
  const [chat, setChat] = useRecoilState(searchAtom);
  const { chatHistory } = chat;
  const chatBoxClickHandler = (chatBox: string) => {
    setChat((prev) => ({ ...prev, activeChatBox: chatBox }));
  };

  return (
    <>
      <Wrapper>
        <ChatBox>
          {Object.keys(chatHistory).map((el) => (
            <ChatBoxContent onClick={() => chatBoxClickHandler(el)} key={el}>
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
