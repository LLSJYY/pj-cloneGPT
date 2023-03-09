import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "./Button.styles";
import { useCounters } from "@/utils/hooks/loading";
import plane2 from "@/asset/search-plane2.svg";
interface IProps<T> {
  status: "Idle" | "isLoading" | "Success" | "isError";
  imageStyle?: T;
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
const SearchButton = ({ status = "Idle", imageStyle }: IProps<IImageStyle>) => {
  const imageSrc = imageStyle?.src ?? plane2;
  console.log(status);
  const count = useCounters({ initialCount: 0, step: 1 });
  const [dots, setDots] = useState("");

  useEffect(() => {
    setDots((prevDots) => (count < 2 ? prevDots + "." : "."));
  }, [status === "isLoading" && count]);

  if (status === "Success" || status === "Idle") {
    return (
      <Button>
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
        <Span>{dots}</Span>
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
