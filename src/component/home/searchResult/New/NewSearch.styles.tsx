import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
`;
export const CategoryBox = styled.div`
  text-align: center;
  gap: 0.875rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  /* Screen size greater than or equal to 768px */
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;
export const ChatGPT = styled.h1`
  font-size: 4rem;
  font-weight: 600; 
  margin-top: 1.5rem; 
  text-align: center; 
    margin-bottom: 2.5rem; 
  display: flex; 
  gap: 0.5rem; 
  align-items: center; 
  justify-content: center; 

  @media (min-width: 640px) {
    margin-top: 20vh;
    margin-bottom: 4rem;
`;

export const CategoryTitle = styled.h1`
display: flex; 
gap: 0.75rem; /* equivalent to gap-3 */
align-items: center; /* equivalent to items-center */
margin: 0 auto; /* equivalent to m-auto */
font-size: 1.125rem; /* equivalent to text-lg */
font-weight: 400; /* equivalent to font-normal */

/* Styles for medium-sized screens */
@media (min-width: 768px) {
  flex-direction: column; /* equivalent to md:flex-col */
  gap: 0.5rem; /* equivalent to md:gap-2 */
`;

export const ItemBox = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
`;

export const ItemLi = styled.li`
  list-style: none;
  background-color: #f9fafb;
  padding: 0.75rem;
  border-radius: 0.375rem;

  &:hover {
    background-color: #edf2f7;
  }

  /* Styles when hovering over the component in dark mode */
  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #1a202c;
    }
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SeperateDiv = styled.div`
  width: 100%;
  height: 192px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 0px;
  }
`;
