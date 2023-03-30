import { useRecoilState } from "recoil";
import { chatHistoryAtom } from "@/lib/chatHistory";
import {
  Wrapper,
  Inner,
  ChatBoxWrapper,
  ChatBox,
  TextWrapper,
  Question,
  Answer,
} from "./Older.styles";
const Older = ({ chatBoxId }: any) => {
  const [chatHistory, setChatHistory] = useRecoilState(
    chatHistoryAtom(chatBoxId)
  );
  return (
    <Wrapper>
      <Inner>
        <ChatBoxWrapper>
          <ChatBox>
            <TextWrapper>
              <Question>{"chatHistory..firstChat[0]"}</Question>
            </TextWrapper>
          </ChatBox>
        </ChatBoxWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Older;
