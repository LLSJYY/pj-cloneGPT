import React, { useState, useEffect, RefObject } from "react";
import Image from "next/image";
import plane2 from "@/asset/search-plane3.png";
import { Button, Span } from "./Button.styles";
interface IProps {
  status: string; // type Error
  onClickHandler: (e: any) => void;
  imageStyle?: IImageStyle;
  inputRef: RefObject<HTMLInputElement>;
}
interface IImageStyle {
  width?: number;
  height?: number;
  borderRadius?: number;
  src?: string;
}

const SearchButton = (props: IProps) => {
  const { status, imageStyle, onClickHandler, inputRef } = props;
  const imageSrc = imageStyle?.src ?? plane2;
  const [dot, setDot] = useState<string>("");
  useEffect(() => {
    if (status === "isLoading") {
      const intervalId = setInterval(() => {
        setDot((prevDot) => (prevDot.length < 3 ? prevDot + "." : "."));
      }, 500); //props

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
          width={imageStyle?.width || 16}
          height={imageStyle?.width || 16}
          src={imageSrc}
        />
      </Button>
    );
  }

  if (status === "isLoading") {
    return (
      <Button>
        <Span>{dot}</Span>
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

export default SearchButton;
