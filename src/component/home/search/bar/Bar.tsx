import {
  Form,
  InputWrapper,
  Input,
  Wrapper,
  Inputliner,
  InputStyle,
} from "./Bar.styles";
import { useRef, useState, useEffect } from "react";
import { chatBot } from "@/api/chatbot";
import { useApi } from "@/utils/hooks/useApi";
import Footer from "@/component/footer/Footer";
import SearchButton from "../button/Button";
import { chatAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
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
  const [chat, setChat] = useRecoilState(chatAtom);
  const fetchChatBot = async () => {
    const res = await chatBot(inputRef?.current?.value as string);
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
    setIsClicked(false);

    if (isSuccess && data) {
      console.log(data);
      setChat({ isNewChatbox: false, chatBoxId: data });
    }
    if (isError) {
      console.log("Error");
    }
  }, [isLoading && data]); //Todo 분기처리

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default SearchBar;
