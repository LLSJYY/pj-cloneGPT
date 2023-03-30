import SearchBar from "@/component/home/search/bar/Bar";
import styled from "styled-components";
import SideBar from "@/component/sidebar";
import { Chat } from "@/component/home";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #fff;
  overflow: hidden;
`;
const HomePadding = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 260px;
  }
`;

const HomeMain = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`;

const HomeChatWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

const HomeChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  height: calc(100% - 32px);
  background-color: rgba(52, 53, 65);
`;

export const EmptySpace = styled.div`
  width: 100%;
  height: 32px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 48px;
  }
`;

const Home = (props: any) => {
  return (
    <Wrapper>
      <HomePadding>
        <HomeMain>
          <Chat />
        </HomeMain>
      </HomePadding>
      <SideBar />
    </Wrapper>
  );
};

export default Home;
