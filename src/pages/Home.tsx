import SearchBar from "@/component/home/search/Bar";
import { useQuery } from "@tanstack/react-query";
import { chatBot } from "@/api/chatbot";
import { useEffect, useState } from "react";
interface IGetAnswer {
  results: IModel[];
}

interface IModel {
  data: string;
}
type TStatus = "Idle" | "isLoading" | "isError" | "Success";

const Home = () => {
  const [isDataReceived, setIsDataReceived] = useState(false);
  const [status, setStatus] = useState<TStatus>("Idle");

  const { data, isLoading, isError } = useQuery<IGetAnswer>(["chatbot"], () =>
    chatBot("can you explain gitflow sys? and translate korean")
  );
  useEffect(() => {
    if (isLoading) {
      setStatus("isLoading");
    }
    if (isError) {
      setStatus("isError");
    }
    if (data) {
      setIsDataReceived(true);
      setStatus("Success");
    }
  }, [data, isLoading, isError]);

  console.log(status, isDataReceived);
  if (data) {
  }

  if (isLoading) {
  }
  return <SearchBar status={status} />;
};

export default Home;
