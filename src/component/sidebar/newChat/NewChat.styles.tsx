import styled from "styled-components";

export const NewChatButton = styled.div`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  transition-duration: 200ms;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
  width: 218px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
