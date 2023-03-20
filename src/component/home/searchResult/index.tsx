import NewSearch from "./New/NewSearch";
import SearchBar from "../search/Bar";
import Success from "./Success/Success";
import styled from "styled-components";
interface IProps {
  result: any;
}
const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Result = (props: any) => {
  return (
    <Div>
      <NewSearch {...props} />
      <SearchBar {...props} />
    </Div>
  );
};

export default Result;
