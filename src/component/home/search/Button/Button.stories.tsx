import React from "react";
import plane1 from "@/asset/search-plane.svg";
import plane2 from "@/asset/search-plane2.svg";
import SearchButton from "./Button";
import { Meta, Story } from "@storybook/react";

type SearchButtonProps = React.ComponentProps<typeof SearchButton>;

type TPlane = {
  plane1: SVGElement;
  plane2: SVGElement;
};

interface IProps {
  status: "Idle" | "Loading" | "Success" | "Error";
  src?: any;
}

export default {
  title: "Search/Button",
  component: SearchButton,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["Idle", "Loading", "Success", "Error"],
      },
    },
    src: {
      control: {
        type: "select",
        options: [plane1, plane2],
      },
    },
  },
} as Meta<SearchButtonProps>;

const Template: Story<SearchButtonProps & { src: TPlane }> = (args) => {
  return <SearchButton {...args}></SearchButton>;
};

export const Idle = Template.bind({});
Idle.args = {
  src: plane1,
  status: "Idle",
  backgroundColor: "#fff",
  backgroundColorHover: "skyblue",
};

export const Loading = Template.bind({});
Loading.args = { status: "Loading", backgroundColor: "#fff" };

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
