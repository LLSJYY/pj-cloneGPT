import styled from "styled-components";

interface IButtonProps {
  borderRadius?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
}

/* 초기값
borderRadius : 2rem
backgroundColor : #fff
backgroundColorHover : skyblue
*/

export const Button = styled.button<IButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border-radius: ${(props) => props.borderRadius || 0.2}rem;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: black;
  font-size: 14px;
  margin: 11px 20px;
  background-color: ${(props) => props.backgroundColor || "#3e3f4b"};
  &:hover {
    background-color: ${(props) =>
      props.backgroundColorHover || " rgb(17 24 39)"};
    color: blue;
  }

  position: absolute;
  padding: 0.25rem;
  border-radius: 0.375rem;
  color: #718096;
  bottom: -0.375rem;
  right: -0.375rem;
  cursor: pointer;
  ${(props) => props.backgroundColor || "#2d3748"}
  &:hover {
    background-color: ${(props) => props.backgroundColorHover || "#4a5568"};
  }

  &:disabled:hover {
    background-color: transparent;
  }

  @media (min-width: 768px) {
    bottom: -0.625rem;
    right: -0.625rem;
  }
`;

export const Span = styled.span`
  color: #fff;
`;
