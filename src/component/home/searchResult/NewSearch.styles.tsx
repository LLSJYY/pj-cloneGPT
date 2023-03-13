import styled from "styled-components";

export const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
`;
export const CategoryTitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
`;

export const ItemBox = styled.ul`
  gap: 0.875rem;
  flex-direction: column;
  display: flex;
  padding: 1rem;
  margin: 0;
  height: 100%;
  width: 100%;
`;

export const ItemButton = styled.button`
  border: none;
  opacity: 1;
  height: 100%;
  width: 100%;
`;

export const ItemLi = styled.li`
background-color: #f7f7f8;
margin : 0.5rem ;
padding: 0.5rem;
list-style: none;
gap: 0.875rem;
border: none;
font-size: 1.25rem
background-color: rgba(247, 247, 248, 0);
opacity: 1;
border-radius: 0.375rem
`;

export const ChatGPT = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  padding-bottom: 5rem;
`;
