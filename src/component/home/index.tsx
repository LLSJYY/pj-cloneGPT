import CheckChatHistory from "./chat";
import SearchBar from "./search/bar/Bar";
import { Wrapper, ChatContainer, ChatDiv, EmptySpace } from "./index.styles";
export const Chat = (props: any) => {
  return (
    <Wrapper>
      <ChatContainer>
        <ChatDiv>
          <CheckChatHistory />
          <EmptySpace />
        </ChatDiv>
      </ChatContainer>
    </Wrapper>
  );
};
