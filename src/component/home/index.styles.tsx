import styled from "styled-components";
export const Wrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  height: calc(100% - 32px);
  background-color: rgba(52, 53, 65);
`;

export const ChatDiv = styled.div`
  height: calc(100% - 5rem);
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #f3f4f6;
`;

export const EmptySpace = styled.div`
  width: 100%;
  height: 32px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 48px;
  }
`;
