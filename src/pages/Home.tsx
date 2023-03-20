import SearchBar from "@/component/home/search/Bar";
import Result from "@/component/home/searchResult";
import SideBar from "@/component/sidebar";
import styled from "styled-components";
import Header from "@/component/header";
const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Temp = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
const Home = (props: any) => {
  return (
    <Temp>
      <Header />
      <SideBar />
      <HomeStyle>
        <Result />
      </HomeStyle>
    </Temp>
  );
};

export default Home;
