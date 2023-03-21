import NewSearch from "./New/NewSearch";
import SearchBar from "../search/Bar";
import Footer from "@/component/footer/Footer";
import styled from "styled-components";
interface IProps {
  result: any;
}
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Result = (props: any) => {
  return (
    <Wrapper>
      <NewSearch {...props} />
    </Wrapper>
  );
};

export default Result;
