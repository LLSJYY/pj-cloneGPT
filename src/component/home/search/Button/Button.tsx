import React, { useState, useEffect } from "react";
import Image from "next/image";
import plane2 from "@/asset/search-plane2.svg";
import { Button, Span } from "./Button.styles";
interface IProps {
  fetchStatus: string;
  imageStyle?: IImageStyle;
  onClickHandler: () => void;
  status: string;
}
interface IImageStyle {
  width?: number;
  height?: number;
  borderRadius?: number;
  src?: string;
}

const SearchButton = (props: IProps) => {
  const { fetchStatus, onClickHandler } = props;
  const [dot, setDot] = useState<string>("");

  useEffect(() => {
    if (fetchStatus === "fetching") {
      const intervalId = setInterval(() => {
        setDot((prevDot) => (prevDot.length < 3 ? prevDot + "." : "."));
      }, 500); //props

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [fetchStatus, dot]);

  if (fetchStatus === "idle") {
    return (
      <Button onClick={onClickHandler}>
        <Image alt="plane" width={16} height={16} src={plane2} />
      </Button>
    );
  }
  if (fetchStatus === "fetching") {
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
