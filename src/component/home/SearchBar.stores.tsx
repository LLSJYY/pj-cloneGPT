import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";

type TPlane = {
  plane1: SVGElement;
  plane2: SVGElement;
};

/**/
interface IProps<T> {
  width?: number;
  height?: number;
  src?: T;
}

export default {
  title: "Search/SearchBar",
  component: SearchBar,
};

const Template = (args: any) => <SearchBar {...args}></SearchBar>;

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
