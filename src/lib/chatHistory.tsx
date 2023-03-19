import { atom } from "recoil";

type ChatHistory = { question: string; answer: string }[];

type ChatBoxState = {
  chatHistory: ChatHistory;
};

const chatBoxesState = atom<{ [key: string]: ChatBoxState }>({
  key: "chatBoxes",
  default: {},
});

export const getChatBoxState = (chatBoxId: string) => {
  return atom({
    key: `chatBox_${chatBoxId}`,
    default: {
      chatHistory: [],
    },
  });
};
