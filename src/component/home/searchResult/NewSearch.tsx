import {
  CategoryBox,
  CategoryTitle,
  ItemBox,
  ItemLi,
  ItemButton,
  ChatGPT,
} from "./NewSearch.styles";
interface IProps {
  category: string[];
}

const NewSearch = (props: IProps) => {
  const { category } = props;
  console.log(category);
  return (
    <div>
      <ChatGPT>Chat GPT</ChatGPT>
      <CategoryBox>
        {category.map((category, idx) => {
          return (
            <CategoryTitle key={idx}>
              {category}
              <ItemBox>
                <ItemLi>
                  Remembers what user said earlier in the conversation
                </ItemLi>
                <ItemLi>
                  Remembers what user said earlier in the conversation
                </ItemLi>
                <ItemLi>
                  Remembers what user said earlier in the conversation
                </ItemLi>
              </ItemBox>
            </CategoryTitle>
          );
        })}
      </CategoryBox>
    </div>
  );
};

export default NewSearch;
