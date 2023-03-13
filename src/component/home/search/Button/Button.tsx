import React, { useState, useEffect, RefObject } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "./Button.styles";
import plane2 from "@/asset/search-plane2.svg";
interface IProps<T> {
  status: "Idle" | "isLoading" | "isSuccess" | "isError";
  onClickHandler: (e: any) => void;
  imageStyle?: T;
  inputRef: RefObject<HTMLInputElement>;
}
interface IImageStyle {
  width?: number;
  height?: number;
  borderRadius?: number;
  src?: string;
}

const Span = styled.span`
  width: 50px;
`;
const SearchButton = (props: IProps<IImageStyle>) => {
  const { status, imageStyle, onClickHandler, inputRef } = props;
  const imageSrc = imageStyle?.src ?? plane2;
  const [dot, setDot] = useState<string>("");
  console.log(status);
  console.log("button");
  useEffect(() => {
    if (status === "isLoading") {
      const intervalId = setInterval(() => {
        setDot((prevDot) => (prevDot.length < 3 ? dot + "." : "."));
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [status, dot]);

  if (status === "isSuccess" || status === "Idle") {
    return (
      <Button onClick={() => onClickHandler(inputRef?.current?.value)}>
        <Image
          alt="plane"
          width={imageStyle?.width || 25}
          height={imageStyle?.width || 25}
          src={imageSrc}
        />
      </Button>
    );
  }

  if (status === "isLoading") {
    return (
      <Button>
        <span>{dot}</span>
      </Button>
    );
  }
  /** Todo 에러처리 */
  return (
    <Button>
      <span>Error</span>
    </Button>
  );
};
const MemoizedSearchButton = React.memo(SearchButton);

export default MemoizedSearchButton;
