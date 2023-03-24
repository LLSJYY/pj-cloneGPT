import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const Hamburger = styled.button`
  @media (max-width: 767px) {
    display : inline-block
    font-size: 14px;
    margin : 1rem;
    padding: 1rem 1rem;
    background-color: none;
    border : none
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const NewChatBox = styled.button`
@media (max-width: 767px) {
  display : inline-block
  font-size: 14px;
  margin : 1rem;
  padding: 1rem 1rem;
}
@media (min-width: 768px) {
  display: none;
}`;
