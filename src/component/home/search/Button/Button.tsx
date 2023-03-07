import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "./Button.styles";
import { useCounters } from "@/utils/hooks/loading";
interface IProps {
  width?: number;
  height?: number;
  src: string;
}

const Span = styled.span`
  width: 50px;
`;
const SearchButton = ({ width = 50, height = 50, src = "/" }: IProps) => {
  // const count = useCounters({ initialCount: 0, step: 1 });
  // const [dots, setDots] = useState("");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setDots((prevDots) => (count < 2 ? prevDots + "." : "."));
  // }, [count]);

  return (
    <Button
      backgroundColor="#fff"
      backgroundColorHover="skyblue"
      borderRadius="2rem"
    >
      {/* {loading ? (
        <Span>{dots}</Span>
      ) : (
        <Image alt="plane" width={width} height={height} src={src} />
      )} */}
    </Button>
  );
};

export default SearchButton;
