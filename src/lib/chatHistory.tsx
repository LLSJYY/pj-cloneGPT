import { atom } from "recoil";

type TChat = {
  isNewChatbox: boolean;
  chatBoxId: string;
};

type TChatHistory = {
  title: string;
  status: "isLoading" | "isSuccess" | "isError" | "Idle";
  chatDetail: TChatDetail;
};

type TChatDetail = {
  firstChat: string[];
  totalChat: string[];
};

export const chatHistoryAtom = (chatBoxId: string) => {
  return atom<TChatHistory>({
    key: `chatBox_${chatBoxId}`,
    default: {
      title: chatBoxId,
      status: "Idle",
      chatDetail: {
        firstChat: [], // [FisrtQuestion,FirstAnswer]
        totalChat: [], // [Q,A,Q,A,...]
      },
    },
  });
};

export const chatAtom = atom<TChat>({
  key: `chat`,
  default: {
    isNewChatbox: true,
    chatBoxId: "",
  },
});
