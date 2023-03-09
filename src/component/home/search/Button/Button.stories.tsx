import React from "react";
import plane1 from "@/asset/search-plane.svg";
import plane2 from "@/asset/search-plane2.svg";
import SearchButton from "./Button";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button.styles";
type SearchButtonProps = React.ComponentProps<typeof SearchButton>;

export default {
  title: "Search/Button",
  component: SearchButton,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["Idle", "isLoading", "Success", "isError"],
      },
    },
    newImageSrc: {
      control: {
        type: "select",
        options: [plane1, plane2],
      },
    },
    borderRadius: { control: { type: "range", min: 1, max: 30, step: 3 } },
  },
  backgrounds: {},
} as Meta<SearchButtonProps>;

const Template: Story<SearchButtonProps> = (args) => <SearchButton {...args} />;
export const Idle = Template.bind({});
Idle.args = {
  status: "Idle",
};

export const Loading = Template.bind({});
Loading.args = { status: "isLoading" };

export const DirectSelector = () => (
  <>
    <div className="story-grid"></div>
  </>
);

DirectSelector.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
  },
};
