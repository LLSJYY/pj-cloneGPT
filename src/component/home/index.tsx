import SearchBar from "./search/SearchBar";
import SearchButton from "./search/SearchButton";
import { Wrapper } from "./search/SearchBarStyle";

export const HomePage = () => {
  return (
    <Wrapper>
      <SearchBar />
      <SearchButton src={""} />
    </Wrapper>
  );
};
