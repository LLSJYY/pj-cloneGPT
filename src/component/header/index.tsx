import { Hamburger, NewChatBox, Wrapper, Header } from "./Header.styles";

const HeaderBar = () => {
  return (
    <Header>
      <Wrapper>
        <NewChatBox />
        <Hamburger />
      </Wrapper>
    </Header>
  );
};

export default HeaderBar;
