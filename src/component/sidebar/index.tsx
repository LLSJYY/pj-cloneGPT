import styled from "styled-components";
import NewChat from "./newChat";
import ChatHistory from "./chatHistory/ChatHistory";
import OptionBox from "./options/OptionBox";

const Wrapper = styled.div`
  background-color: #1a202c;
  color: white;
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 260px;
  flex-direction: column;
  background-color: #202123;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const SideBarNav = styled.nav`
  padding: 0.5rem;
  display: flex;
  height: 100%;
  min-height: 0;
  flex-direction: column;
`;
const SideBar = () => {
  return (
    <Wrapper>
      <SideBarNav>
        <NewChat />
        <ChatHistory />
        <OptionBox></OptionBox>
      </SideBarNav>
    </Wrapper>
  );
};

export default SideBar;
