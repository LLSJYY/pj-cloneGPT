import { Input, Wrapper } from "./Input/Input";
import { useRef, useState, useEffect } from "react";
import { chatBot } from "@/api/chatbot";
import { useApi } from "@/utils/hooks/useApi";
import MemoizedSearchButton from "./Button/Button";
interface IProps {
  status: "Idle" | "isLoading" | "Success" | "isError";
  onClickHandler: (e: any) => void;
}

const SearchBar = (props: any) => {
  const { status } = props;
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetchChatBot = async () => {
    const res = chatBot(inputRef?.current?.value as string);
    return res;
  };

  const { isError, isSuccess, isLoading, data } = useApi<string>(
    fetchChatBot,
    isClicked
  );
  const onClickHandler = () => {
    setIsClicked(true);
  };
  useEffect(() => {
    if (!isLoading) {
      setIsClicked(false);
    }
  }, [isLoading]);

  if (isError) {
    return <>something Wrong</>;
  }

  return (
    <Wrapper>
      <Input ref={inputRef} />
      <MemoizedSearchButton
        {...props}
        inputRef={inputRef}
        status={
          isLoading
            ? "isLoading"
            : isSuccess
            ? "isSuccess"
            : isError
            ? "isError"
            : "Idle"
        }
        onClickHandler={onClickHandler}
      />
    </Wrapper>
  );
};

export default SearchBar;
