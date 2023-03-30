import Image from "next/image";
import Capabilities from "@/asset/Capabilities.svg";
import Limitations from "@/asset/Limitations.svg";
import { IMockData } from "@/utils/types/Types";
import Examples from "@/asset/Examples.svg";
import {
  ChatGPT,
  Item,
  InfoBox,
  InfoCategory,
  Category,
  ItemBox,
  ChatInfo,
} from "./NewSearch.styles";
interface IProps<T> {
  storybookProps: T;
}

interface ICategoiesData {
  [category: string]: string[];
}

const mockData: IMockData<Record<string, any>> = {
  categoriesData: ["Examples", "Capabilities", "Limitations"],
  categoriesImg: [Examples, Capabilities, Limitations],
  categoriesDetail: {
    Examples: [...EXAMPLES],
    Capabilities: [...CAPABILITIES],
    Limitations: [...LIMITATIONS],
  },
};
import { EXAMPLES, CAPABILITIES, LIMITATIONS } from "@/constant/indexPage";

const NewSearch = (props: IProps<IMockData<ICategoiesData>>) => {
  const { storybookProps = mockData } = props;

  const categoryDetails = (category: string) => {
    const { categoriesDetail } = storybookProps;
    const data = categoriesDetail[category];

    if (!data) {
      return <Item>No data available for this category</Item>;
    }
    return data.map((el: string, index: number) => (
      <Item key={`${category} ${index}`}>{el}</Item>
    ));
  };

  return (
    <ChatInfo>
      <ChatGPT>Chat GPT</ChatGPT>
      <InfoBox>
        {storybookProps.categoriesData.map((category: string, idx: number) => {
          return (
            <InfoCategory key={idx}>
              <Image alt={category} src={mockData.categoriesImg[idx]}></Image>

              <Category>{category}</Category>
              <ItemBox>{categoryDetails(category)}</ItemBox>
            </InfoCategory>
          );
        })}
      </InfoBox>
    </ChatInfo>
  );
};

export default NewSearch;
