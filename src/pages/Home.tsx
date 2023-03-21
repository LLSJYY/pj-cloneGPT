import SearchBar from "@/component/home/search/Bar";
import Result from "@/component/home/searchResult";
import SideBar from "@/component/sidebar";
import styled from "styled-components";
import Header from "@/component/header";
const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Temp = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    display: flex;
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
