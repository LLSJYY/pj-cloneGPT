import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background-color: #fff;
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  padding: 0.2rem;

  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 80%;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
