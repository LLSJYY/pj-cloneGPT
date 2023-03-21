import styled from "styled-components";

export const NewChatBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 218px;
  height: 18px;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  background-color: #202123;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  align-items: center;
  color: #fff;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
    transition: background-color 200ms ease-in-out;
  }
`;
export const ChatBox = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  display: flex;
  flex-direction: row;
  width: 218px;
  height: 18px;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  background-color: #202123;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  align-items: center;
  color: #fff;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
    transition: background-color 200ms ease-in-out;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  text-align: center;
  align-items: center
  height: 16px;
  margin-left : 0.5rem;
`;
