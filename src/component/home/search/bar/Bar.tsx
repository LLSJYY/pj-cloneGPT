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
import Footer from "@/component/footer/Footer";
import SearchButton from "../button/Button";
import { chatAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
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

  const { data, isLoading, fetchStatus } = useQuery({
    queryKey: ["chat"],
    queryFn: () => chatBot(inputRef?.current?.value as string),
    enabled: isClicked,
  });

  const onClickHandler = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    setIsClicked(false);
  }, [isClicked && fetchStatus]);

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
              fetchStatus={fetchStatus}
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
