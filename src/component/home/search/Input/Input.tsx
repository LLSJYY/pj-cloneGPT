import styled from "styled-components";

interface IWrapperProps {
  display: string;
}
export const Input = styled.input`
  border: none;
  background-color: #fff;
  width: 80%;
  height: 50px;
`;

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  display: ${(props) => props.display};
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 80%;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
