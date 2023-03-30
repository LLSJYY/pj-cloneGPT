import ChatHistory from "@/component/sidebar/chatHistory/ChatHistory";
import { atom, selector } from "recoil";

type TChatHistory = {
  keyword: string;
  result: string | null;
  activeChatBox: string;
  chatHistory: TActiveChatBox;
};
type TActiveChatBox = {
  [key: string]: string[];
};
export const searchAtom = atom<TChatHistory>({
  key: "searchAtom",
  default: {
    keyword: "",
    result: null,
    activeChatBox: "chatBox_0",
    chatHistory: {
      chatBox_0: [],
    },
  },
});

export const chatNumber = atom({
  key: "chatBoxAtom",
  default: 1,
});

export const chatHistoryAtom = (chatBoxKey: string) =>
  atom({
    key: `chatHistory_${chatBoxKey}`,
    default: [],
  });

export const searchSelector = (keyword: string) =>
  selector({
    key: `searchSelector_${keyword}`,
    get: ({ get }) => {
      const activeChatBox = get(searchAtom).activeChatBox;
      const chatHistory = get(chatHistoryAtom(activeChatBox));
      return {
        keyword,
        result: null,
        activeChatBox,
        chatHistory,
      };
    },
    set: ({ set, get }, newValue: any) => {
      const activeChatBox = get(searchAtom).activeChatBox;
      set(chatHistoryAtom(activeChatBox), newValue.chatHistory);
      set(searchAtom, (prevSearch) => ({
        ...prevSearch,
        keyword: newValue.keyword,
        result: newValue.result,
        chatHistory: newValue.chatHistory,
      }));
    },
  });

export const newChatBox = () => {
  return (prev: any) => {
    const chatBox = prev + 1;
    return {
      ...prev,
      activeChatBox: `chatBox_${chatBox}`,
      chatHistory: {
        ...prev.chatHistory,
        [`chatBox_${chatBox}`]: [],
      },
    };
  };
};
