import {
  Form,
  InputWrapper,
  Input,
  Wrapper,
  Inputliner,
  InputStyle,
} from "./Input/Input";
import { useRef, useState, useEffect } from "react";
import { chatBot } from "@/api/chatbot";
import { useApi } from "@/utils/hooks/useApi";
import Footer from "@/component/footer/Footer";
import SearchButton from "./Button/Button";
interface IProps {
  storybookProps: IStorybookProps;
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
  const { storybookProps = { state: { isError, isSuccess, isLoading } } } =
    props;

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
      }
      if (isError) {
        console.log("Error");
      }
    }
  }, [isLoading]); //Todo 분기처리

  return (
    <>
      {" "}
      <Form>
        <InputWrapper>
          <Inputliner />
          <InputStyle>
            <Input ref={inputRef} />
            <SearchButton
              {...props}
              inputRef={inputRef}
              status={State}
              onClickHandler={onClickHandler}
            />
          </InputStyle>
        </InputWrapper>
      </Form>
      <Footer />
    </>
  );
};

export default SearchBar;
