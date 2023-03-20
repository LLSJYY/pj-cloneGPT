import styled from "styled-components";

export const Input = styled.input`
  color: #fff;
  background-color: #3e3f4b;
  border: none;
  width: 100%;
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 0.2rem;
  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  background-color: #3e3f4b;
  position: absolute;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  bottom: 10%;

  @media (min-width: 768px) {
    /* styles for the input box when the window width is at least 768px */
    width: 760px;
  }

  @media (max-width: 767px) {
    /* styles for the input box when the window width is less than 768px */
    width: 95%;
  }
`;
