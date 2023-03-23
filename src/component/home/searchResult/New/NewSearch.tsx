import {
  InfoBox,
  InfoCategory,
  Category,
  ItemBox,
  Item,
  ChatGPT,
} from "./NewSearch.styles";
import Image from "next/image";
import Capabilities from "@/asset/Capabilities.svg";
import Limitations from "@/asset/Limitations.svg";
import Examples from "@/asset/Examples.svg";

interface IProps<T> {
  storybookProps: T;
}
interface IMockData<T> {
  categories: string[];
  categoriesImg: any[];
  categoriesData: T;
}
interface ICategoiesData {
  [category: string]: string[];
}

const mockData: IMockData<ICategoiesData> = {
  categories: ["Examples", "Capabilities", "Limitations"],
  categoriesImg: [Examples, Capabilities, Limitations],
  categoriesData: {
    Examples: [...EXAMPLES],
    Capabilities: [...CAPABILITIES],
    Limitations: [...LIMITATIONS],
  },
};
import { EXAMPLES, CAPABILITIES, LIMITATIONS } from "@/constant/indexPage";

const NewSearch = (props: IProps<IMockData<ICategoiesData>>) => {
  const { storybookProps = mockData } = props;

  const categoryDetails = (category: string) => {
    const { categoriesData } = storybookProps;
    const data = categoriesData[category];

    if (!data) {
      return <Item>No data available for this category</Item>;
    }
    return data.map((el: string, index: number) => (
      <Item key={`${category} ${index}`}>{el}</Item>
    ));
  };

  return (
    <>
      <ChatGPT>Chat GPT</ChatGPT>
      <InfoBox>
        {storybookProps.categories.map((category: string, idx: number) => {
          return (
            <InfoCategory key={idx}>
              <Image alt={category} src={mockData.categoriesImg[idx]}></Image>
              <Category>{category}</Category>
              <ItemBox>{categoryDetails(category)}</ItemBox>
            </InfoCategory>
          );
        })}
      </InfoBox>
    </>
  );
};

export default NewSearch;
