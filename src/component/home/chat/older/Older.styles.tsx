import styled from "styled-components";
type TInner = {
  index: number;
};
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #f3f4f6;
  overflow: scroll;
`;
export const Inner = styled.div<TInner>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "rgba(68, 70, 84, 1)" : "rgba(52,53,65)"};
  color: #e2e8f0;
`;

export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1rem;
  gap: 1rem;
  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    gap: 1.5rem;
    max-width: 42rem;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
  }

  @media (min-width: 1024px) {
    max-width: 48rem;
    padding: 2.5rem;
  }

  @media (min-width: 1280px) {
    max-width: 57rem;
    padding: 3rem;
  }

  @media (min-width: 1536px) {
    max-width: 64rem;
    padding: 4rem;
  }
`;

export const ChatBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: calc(100% - 50px);

  @media (min-width: 768px) {
    gap: 0.75rem;
    width: calc(100% - 115px);
  }

  @media (min-width: 1024px) {
    width: calc(100% - 115px);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.75rem;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  min-height: 20px;
  white-space: pre-wrap;
`;

export const Answer = styled.div`
  overflow-wrap: break-word;
  width: 100%;
`;
