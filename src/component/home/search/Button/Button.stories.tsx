import React from "react";
import plane1 from "@/asset/search-plane.svg";
import plane2 from "@/asset/search-plane2.svg";
import SearchButton from "./Button";
import { Meta, Story } from "@storybook/react";

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
    imageStyle: {
      control: {
        type: "object",
      },
    },
    borderRadius: { control: { type: "range", min: 1, max: 30, step: 3 } },
  },
  backgrounds: {},
} as Meta<SearchButtonProps>;

const Template: Story<SearchButtonProps> = (args) => {
  console.log(args);
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

export const DirectSelector = () => (
  <>
    <div className="story-grid">
      <>
        <Template status="Idle" />
        <Template status="isLoading" />
        <Template status="isError" />
      </>
    </div>
  </>
);

DirectSelector.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
  },
};
