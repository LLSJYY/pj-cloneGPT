import SearchBar from "./search/SearchBar";
import SearchButton from "./search/SearchButton";
import { Wrapper } from "./search/SearchBarStyle";
import { chatBot } from "@/api/chatbot";
export const HomePage = () => {
  const res = chatBot("hello");
  return (
    <Wrapper>
      <SearchBar />
      <SearchButton src={""} />
    </Wrapper>
  );
};
