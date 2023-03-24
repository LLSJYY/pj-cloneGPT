import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(52,53,65);

  @media (min-width: 768px) {
    border-top: 0;
    border-color: transparent;
  }

  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  gap: 0.75rem;

  &:last-child {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    margin-left: 4rem;
    margin-right: 4rem;

    &:last-child {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 48rem;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: row;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const Inputliner = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.25rem;
  & > * {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin: auto;
    margin-bottom: 0.5rem;
    & > * {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-grow: 1;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  border-color: rgba(255, 255, 255, 0.5);
  color: #fff;
  background-color: #4a5568;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
  }
`;
export const Input = styled.input`
  margin: 0;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
  color: #fff;
  padding: 0;
  padding-right: 1.75rem;
  outline: none;
  &.focus-visible {
    outline: none;
  }

  @media (min-width: 768px) {
    padding-left: 0;
  }
`;
