import { useRecoilValue } from "recoil";
import { searchAtom } from "@/lib/chatHistory";
import { Question, Answer } from "./Older.styles";

export const OlderChat = () => {
  const chat = useRecoilValue(searchAtom);
  const { activeChatBox, chatHistory } = chat;
  const chatArray = chatHistory[activeChatBox];

  return (
    <>
      {chatArray.map((el, index) => {
        if (index % 2 === 0) {
          return <Question key={el}>{el}</Question>;
        }
        if (index % 2 === 1) {
          return <Answer key={el}>{el}</Answer>;
        }
      })}
    </>
  );
};
