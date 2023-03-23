import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: flex-start;
  overflow: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #f8f8f8;
  font-size: 0.875rem;
`;

export const ChatBoxContent = styled.a`
  width: 220px;
  display: flex;
  align-items: center;
  padding: 0.75rem 0.75rem;
  margin-bottom: 0.5rem;
  gap: 0.75rem;
  position: relative;
  border-radius: 0.375rem;
  cursor: pointer;
  break-all: auto;
  transition: background-color 0.2s ease-in-out, padding-right 0.2s ease-in-out;

  &:hover {
    background-color: #2a2b32;
    padding-right: 1rem;
  }
`;

export const ChatBoxText = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  max-height: 1.25rem;
  overflow: hidden;
  word-break: break-all;
  position: relative;
`;
