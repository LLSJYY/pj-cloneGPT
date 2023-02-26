import plane from "../../asset/search-plane2.svg";

import Image from "next/image";
import styled from "styled-components";
interface IProps {
  width?: number;
  height?: number;
  src: string;
}

const Button = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border-radius: 2rem;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: black;
  font-size: 14px;
  padding: 11px 20px;
  background-color: #fff;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;

const SearchButton = ({ width = 50, height = 50, src = "/" }: IProps) => {
  return (
    <Button>
      <Image alt="plane" width={width} height={height} src={src} />
    </Button>
  );
};

export default SearchButton;
