import React from "react";
import { Wrapper } from "./SearchBarStyle";
import { Meta, Story } from "@storybook/react";
import SearchBar from "./SearchBar";
type WrapperProps = React.ComponentProps<typeof Wrapper>;

/**/

export default {
  title: "Search/SearchBar",
  component: Wrapper,
} as Meta<WrapperProps>;

const Template = (args: any) => (
  <Wrapper {...args}>
    <SearchBar />
  </Wrapper>
);

export const Default: any = Template.bind({});
export const Hover: any = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const DirectSelector = () => (
  <>
    <div className="story-grid">
      <Default />
    </div>
  </>
);

DirectSelector.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
  },
};
