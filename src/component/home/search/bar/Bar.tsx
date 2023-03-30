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
import { chatAtom } from "@/lib/chatHistory";
import { useRecoilState } from "recoil";
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

  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <Inputliner />
          <InputStyle>
            <Input ref={inputRef} />
            <SearchButton {...props} inputRef={inputRef} />
          </InputStyle>
        </InputWrapper>
      </Form>
      <Footer />
    </Wrapper>
  );
};

export default SearchBar;
