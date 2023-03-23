import styled from "styled-components";

export const Option = styled.a`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in-out;
  color: #fff;
  background-color: transparent;
  margin: 0.25rem;
  &:hover {
    background-color: rgba(107, 114, 128, 0.1);
  }
`;
