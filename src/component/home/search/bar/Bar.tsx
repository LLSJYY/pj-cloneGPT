import {
  Form,
  InputWrapper,
  Input,
  Wrapper,
  Inputliner,
  InputStyle,
} from "./Bar.styles";
import { useRef, useState, useEffect } from "react";
import Footer from "@/component/footer/Footer";
import SearchButton from "../button/Button";
import { useChatHistory } from "@/utils/hooks/useChathistory";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const { setIsClicked, fetchStatus } = useChatHistory(
    inputRef.current?.value as string
  );
  const btnOnClickHandler = () => {
    setIsClicked(true);
  };
  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <Inputliner />
          <InputStyle>
            <Input ref={inputRef} />
            <SearchButton
              {...props}
              fetchStatus={fetchStatus}
              onClickHandler={btnOnClickHandler}
              inputRef={inputRef}
            />
          </InputStyle>
        </InputWrapper>
      </Form>
      <Footer />
    </Wrapper>
  );
};

export default SearchBar;
