import { Input, Wrapper } from "./Input/Input";
import { useRef, useState, useEffect } from "react";
import { chatBot } from "@/api/chatbot";
import { useApi } from "@/utils/hooks/useApi";
import { useRecoilState } from "recoil";
import { getChatBoxState } from "@/lib/chatHistory";
import MemoizedSearchButton from "./Button/Button";
interface IProps {
  storybookProps: IStorybookProps;
  chatBoxId: string;
}

interface IStorybookProps {
  state: IStatus;
}
interface IStatus {
  [status: string]: boolean;
}
const SearchBar = (props: IProps) => {
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
  const {
    storybookProps = { state: { isError, isSuccess, isLoading } },
    chatBoxId = "defaultId",
  } = props;

  const [chatBoxState, setChatBoxState] = useRecoilState(
    getChatBoxState(chatBoxId)
  );
  const State =
    Object.keys(storybookProps.state).find(
      (key) => storybookProps.state[key]
    ) || "Idle";

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
        status={State}
        onClickHandler={onClickHandler}
      />
    </Wrapper>
  );
};

export default SearchBar;
