import NewSearch from "./New/NewSearch";
interface IProps {
  result: any;
}

const Result = (props: any) => {
  return <NewSearch {...props} />;
};

export default Result;
