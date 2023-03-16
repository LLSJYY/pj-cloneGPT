import { resultStore } from "@/lib/resultStore";
import { useRecoilValue } from "recoil";
import NewSearch from "./NewSearch";
import Success from "./Success/Success";
interface IProps {
  result: any;
}

const Result = (props: any) => {
  const result = useRecoilValue(resultStore);
  if (result.length === 0) {
    return <NewSearch {...props} />;
  }
  return <Success />;
};

export default Result;
