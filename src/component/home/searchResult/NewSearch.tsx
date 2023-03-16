import {
  CategoryBox,
  CategoryTitle,
  ItemBox,
  ItemLi,
  ItemButton,
  ChatGPT,
} from "./NewSearch.styles";
interface IProps {
  storybookProps: any;
}
interface IMockData<T> {
  categories: string[];
  categoriesData: T;
}
interface ICategoiesData {
  [category: string]: string[];
}

const mockData: IMockData<ICategoiesData> = {
  categories: ["Example", "Capabilities", "Limitations"],
  categoriesData: {
    Example: [...EXAMPLES],
    Capabilities: [...CAPABILITIES],
    Limitations: [...LIMITATIONS],
  },
};
import { EXAMPLES, CAPABILITIES, LIMITATIONS } from "@/constant/indexPage";

const NewSearch = (props: IProps) => {
  const { storybookProps = mockData } = props;
  console.log(storybookProps);
  const categoryDetails = (category: string) => {
    const { categoriesData } = storybookProps;
    const data = categoriesData[category];

    if (!data) {
      return <ItemLi>No data available for this category</ItemLi>;
    }
    return data.map((el: string, index: number) => (
      <ItemLi key={`${category} ${index}`}>{el}</ItemLi>
    ));
  };

  return (
    <div>
      <ChatGPT>Chat GPT</ChatGPT>
      <CategoryBox>
        {storybookProps.categories.map((category: string, idx: number) => {
          return (
            <CategoryTitle key={idx}>
              {category}
              <ItemBox>{categoryDetails(category)}</ItemBox>
            </CategoryTitle>
          );
        })}
      </CategoryBox>
    </div>
  );
};

export default NewSearch;
