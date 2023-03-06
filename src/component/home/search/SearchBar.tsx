import { SearchBarInput } from "./SearchBarStyle";
import { useQuery } from "@tanstack/react-query";
import { chatBot } from "@/api/chatbot";
interface IGetAnswer {
  results: IModel[];
}

interface IModel {
  data: string;
}

const SearchBar = () => {
  const { data, isLoading, isError } = useQuery<IGetAnswer>(["chatbot"], () =>
    chatBot("hello")
  );

  if (data) {
    console.log(data);
  }
  return <SearchBarInput />;
};

export default SearchBar;
