import { OlderChat } from ".";
import {
  Wrapper,
  Inner,
  ChatBoxWrapper,
  ChatBox,
  TextWrapper,
} from "./Older.styles";
const Older = ({ chatBoxId }: any) => {
  return (
    <Wrapper>
      <Inner>
        <ChatBoxWrapper>
          <ChatBox>
            <TextWrapper>
              <OlderChat />
            </TextWrapper>
          </ChatBox>
        </ChatBoxWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Older;
