// import { Input } from "./Input/Input";
// import { useQuery } from "@tanstack/react-query";
// import { chatBot } from "@/api/chatbot";
// interface IGetAnswer {
//   results: IModel[];
// }

// interface IModel {
//   data: string;
// }

// const SearchBar = () => {
//   const { data, isLoading, isError } = useQuery<IGetAnswer>(["chatbot"], () =>
//     chatBot("can you explain gitflow sys? and translate korean")
//   );
//   if (data) {
//     console.log(data);
//   }
//   if (isLoading) {
//     console.log("aas");
//   }
//   return <Input />;
// };

// export default SearchBar;

export {};
