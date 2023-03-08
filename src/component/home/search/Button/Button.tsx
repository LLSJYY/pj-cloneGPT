import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "./Button.styles";
import { useCounters } from "@/utils/hooks/loading";
import plane1 from "@/asset/search-plane.svg";
interface IProps {
  status: "Idle" | "Loading" | "Success" | "Error";
}
const backgroundColor = "#fff";
const backgroundColorHover = "skyblue";
const borderRadius = "2rem";

const Span = styled.span`
  width: 50px;
`;
const SearchButton = ({ status = "Idle" }: IProps) => {
  const count = useCounters({ initialCount: 0, step: 1 });
  const [dots, setDots] = useState("");

  useEffect(() => {
    setDots((prevDots) => (count < 2 ? prevDots + "." : "."));
  }, [count]);

  return (
    <Button
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      borderRadius={borderRadius}
    >
      {status === "Loading" ? (
        <Span>{dots}</Span>
      ) : (
        <Image alt="plane" width="50" height="50" src={plane1} />
      )}
    </Button>
  );
};

export default SearchButton;
