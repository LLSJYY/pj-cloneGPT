import React from "react";
import plane1 from "@/asset/search-plane.svg";
import plane2 from "@/asset/search-plane2.svg";
import type { Meta, Story } from "@storybook/react";
import SearchButton from "./Button";

type SearchButtonProps = React.ComponentProps<typeof SearchButton>;

export default {
  title: "Search/Button",
  component: SearchButton,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["Idle", "isLoading", "isSuccess", "isError"],
      },
    },
    imageStyle: {
      control: {
        type: "object",
      },
    },
  },
  backgrounds: {},
} as Meta<SearchButtonProps>;

const Template: Story<SearchButtonProps> = (args) => {
  return <SearchButton {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  status: "Idle",
  imageStyle: {
    width: 50,
    height: 50,
    src: plane2,
    borderRadius: 2,
  },
};

export const DirectSelector = (props: SearchButtonProps) => (
  <>
    <div className="story-grid">
      <>
        <Template {...props} status="Idle" />
        <Template {...props} status="isLoading" />
        <Template {...props} status="isError" />
      </>
    </div>
  </>
);

DirectSelector.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
  },
};
