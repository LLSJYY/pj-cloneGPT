import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "./Button.styles";
import { useCounters } from "@/utils/hooks/loading";
import plane1 from "@/asset/search-plane.svg";
interface IProps {
  status: "Idle" | "isLoading" | "Success" | "isError";
  newImageSrc?: string;
}

const Span = styled.span`
  width: 50px;
`;
const SearchButton = ({ status = "Idle", newImageSrc }: IProps) => {
  const imageSrc = newImageSrc || plane1;

  const count = useCounters({ initialCount: 0, step: 1 });
  const [dots, setDots] = useState("");

  useEffect(() => {
    setDots((prevDots) => (count < 2 ? prevDots + "." : "."));
  }, [status === "isLoading" && count]);

  if (status === "Success") {
    return (
      <Button>
        <Image alt="plane" width="50" height="50" src={imageSrc} />
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
};

export default SearchButton;
