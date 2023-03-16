import { resultStore } from "@/lib/resultStore";
import { useRecoilValue } from "recoil";
import NewSearch from "./NewSearch";
interface IProps {
  result: any[];
}

const Result = (props: any) => {
  const result = useRecoilValue(resultStore);
  if (result.length === 0) {
    return <NewSearch {...props} />;
  }
  return <>{result}</>;
};

export default Result;
