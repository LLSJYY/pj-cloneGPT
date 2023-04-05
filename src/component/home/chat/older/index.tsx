import { useRecoilValue } from "recoil";
import { searchAtom } from "@/lib/chatHistory";
import { Question, Answer } from "./Older.styles";
import { ChatBox, TextWrapper, ChatBoxWrapper, Inner } from "./Older.styles";
export const OlderChat = () => {
  const chat = useRecoilValue(searchAtom);
  const { activeChatBox, chatHistory } = chat;
  const chatArray = chatHistory[activeChatBox];

  function createAnswer(answer: string) {
    return { __html: answer };
  }
  return (
    <>
      {chatArray.map((el, index) => {
        if (index % 2 === 0) {
          return (
            <Inner key={`question-${index}`} index={index}>
              <ChatBoxWrapper>
                <ChatBox>
                  <TextWrapper>
                    <Question>{el}</Question>
                  </TextWrapper>
                </ChatBox>
              </ChatBoxWrapper>
            </Inner>
          );
        }
        if (index % 2 === 1) {
          return (
            <Inner key={`answer-${index}`} index={index}>
              <ChatBoxWrapper>
                <ChatBox>
                  <TextWrapper>
                    <Answer
                      key={"asd"}
                      dangerouslySetInnerHTML={createAnswer(el)}
                    />
                  </TextWrapper>
                </ChatBox>
              </ChatBoxWrapper>
            </Inner>
          );
        }
        return <div key={"error"}>error</div>;
      })}
    </>
  );
};
