import React from "react";
import plane1 from "../../../asset/search-plane.svg";
import plane2 from "../../../asset/search-plane2.svg";
import SearchButton from "./SearchButton";
import { Meta, Story } from "@storybook/react";

type SearchButtonProps = React.ComponentProps<typeof SearchButton>;

type TPlane = {
  plane1: SVGElement;
  plane2: SVGElement;
};

/**/
interface IProps {
  width?: number;
  height?: number;
  src?: any;
}

export default {
  title: "Search/SearchButton",
  component: SearchButton,
} as Meta<SearchButtonProps>;

const Template: Story<SearchButtonProps & { src: TPlane }> = (args) => {
  return <SearchButton {...args}></SearchButton>;
};

export const Primary: any = Template.bind({});
Primary.args = { src: plane1 };
export const Secondary: any = Template.bind({});
Secondary.args = { src: plane2, pseudo: { hover: true } };

export const DirectSelector = () => (
  <>
    <div className="story-grid">
      <Primary src={plane1} />
      <Secondary src={plane2}></Secondary>
    </div>
  </>
);

DirectSelector.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
  },
};
