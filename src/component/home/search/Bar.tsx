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
  display: "none" | "flex";
}
const SearchBar = ({ status }: IProps) => {
  return (
    <Wrapper display={status === "isError" ? "none" : "flex"}>
      <Input />
    </Wrapper>
  );
};

export default SearchBar;
