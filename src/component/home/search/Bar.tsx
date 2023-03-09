import { Input, Wrapper } from "./Input/Input";
import SearchButton from "./Button/Button";

interface IProps {
  status: "Idle" | "isLoading" | "Success" | "isError";
}
const SearchBar = (props: IProps) => {
  const { status } = props;
  return (
    <Wrapper display={status === "isError" ? "none" : "flex"}>
      <Input />
      <SearchButton {...props} />
    </Wrapper>
  );
};

export default SearchBar;
