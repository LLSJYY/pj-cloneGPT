import { atom } from "recoil";

export const resultStore = atom<string[]>({
  key: "resultStore",
  default: [],
});
