import { Input, Wrapper } from "./Input/Input";
import { useRef, useState, useEffect } from "react";
import { chatBot } from "@/api/chatbot";
import { useApi } from "@/utils/hooks/useApi";
import { useRecoilState } from "recoil";
import MemoizedSearchButton from "./Button/Button";
import { resultStore } from "@/lib/resultStore";
interface IProps {
  status: "Idle" | "isLoading" | "Success" | "isError";
  onClickHandler: (e: any) => void;
}

const SearchBar = (props: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetchChatBot = async () => {
    const res = chatBot(inputRef?.current?.value as string);
    return res;
  };
  const [result, setResult] = useRecoilState<string[]>(resultStore);
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
      if (isSuccess) {
        setResult((prev) => [...prev, data as string]);
      }
      if (isError) {
        console.log("Error");
      }
    }
  }, [isLoading]); //Todo 분기처리

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
