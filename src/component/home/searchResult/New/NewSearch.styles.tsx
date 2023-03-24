import styled from "styled-components";

export const ChatGPT = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-top: calc(10vh);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  margin-bottom: 4rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2.25rem; /* equivalent to text-4xl in tailwind */
    font-weight: 600; /* equivalent to font-semibold in tailwind */
    text-align: center;
    margin-top: 1.5rem; /* equivalent to mt-6 in tailwind */
    margin-bottom: 2.5rem; /* equivalent to mb-10 in tailwind */
    display: flex;
    gap: 0.5rem; /* equivalent to gap-2 in tailwind */
    align-items: center;
    justify-content: center;
  }
`;
export const InfoBox = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: center;
  gap: 0.875rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;
  }
  overflow: auto;
  background-color: rgba(52, 53, 65);
  padding-bottom: 0.5rem;
`;
export const InfoCategory = styled.div`
  border-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.875rem;
  margin-bottom: auto;
  flex: 1;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Category = styled.div`
  display: flex;
  font-size: 1.125rem;

  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.875rem;
  @media (max-width: 768px) {
    margin-bottom: auto;
    flex: 1;
  }
`;
export const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  max-width: 20rem;
  margin: auto;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 30rem;
  }
`;

export const Item = styled.li`
  list-style: none;
  background-color: #3e3f4b;
  padding: 0.75rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: #202123;
  }
`;
