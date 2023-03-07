import { Input, Wrapper } from "./Input/Input";
import { useQuery } from "@tanstack/react-query";
import { chatBot } from "@/api/chatbot";
interface IGetAnswer {
  results: IModel[];
}

interface IModel {
  data: string;
}

interface IProps {
  status: "Idle" | "isLoading" | "Success" | "isError";
}
const SearchBar = ({ status }: IProps) => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
};

export default SearchBar;
