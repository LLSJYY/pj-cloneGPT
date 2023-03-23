import SearchBar from "@/component/home/search/Bar";
import Result from "@/component/home/searchResult";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";
import Image from "next/image";
const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #fff;
`;
const HomeSideBar = styled.div`
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

const HomeDiv = styled.div`
  flex: 1;
  overflow: auto;
`;

const HomeDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  height: calc(100% - 32px);
  background-color: rgba(52, 53, 65);
`;

const ChatInfo = styled.div`
  height: 100%;
  width: 100%;
  max-width: 2xl;
  display: flex;
  flex-direction: column;
  color: #f3f4f6;
`;

export const SeperateDiv = styled.div`
  width: 100%;
  height: 32px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 48px;
  }
`;

const Home = (props: any) => {
  const ROOT_CSS = {
    height: 600,
    width: 400,
  };
  return (
    <HomeWrapper>
      <HomeSideBar>
        <HomeMain>
          <HomeDiv>
            <HomeDiv2>
              <ChatInfo>
                <Result />
                <SeperateDiv />
              </ChatInfo>
            </HomeDiv2>
            <SearchBar {...props} />
          </HomeDiv>
        </HomeMain>
      </HomeSideBar>
    </HomeWrapper>
  );
};

export default Home;
