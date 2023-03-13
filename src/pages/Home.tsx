import SearchBar from "@/component/home/search/Bar";
import { chatBot } from "@/api/chatbot";
import { useEffect, useState } from "react";
import { useApi } from "@/utils/hooks/useApi";
interface IGetAnswer {
  queryKey: Array<string>;
  queryFn: IModel[];
  enabled: boolean;
}

interface IModel {
  data: string;
}
interface IStatus {
  process: "Idle" | "isLoading" | "isError" | "Success";
  queryId: number;
  clicked?: boolean;
}
const Home = () => {
  const [status, setStatus] = useState<Array<IStatus>>([
    {
      process: "Idle",
      queryId: 0,
      clicked: false,
    },
  ]);

  return <SearchBar />;
};

export default Home;
