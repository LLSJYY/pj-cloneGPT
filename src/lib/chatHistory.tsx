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
